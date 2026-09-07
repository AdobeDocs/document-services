/**
 * Marketo form loader — v3 (module-aware).
 * Exposes loadMarketoForm() globally. Call it from your page after IMS is ready.
 * ========================================================================= */

// Demo call removed — loadMarketoForm() is called from ica-faas.html after IMS is ready.





/**
 * Was OK as of 2026-07-22,
 * but milo could have changed depending on how much time has passed,
 * so you should check business.adobe.com for the latest stucture of the form, and the CSS rules.
 *
 * Build the form-host snippet from a dynamic title + paragraphs. The `.section`
 * scaffolding and the `.marketo-form-wrapper` host are fixed (the wrapper must match
 * the default formDestinationElement); only the heading and body copy vary.
 *
 * Text is escaped, so an apostrophe is safe but inline markup (links, <strong>) is
 * NOT rendered. If you need HTML in the copy, say so and I'll add a raw/allow-html mode.
 *
 * @param {string} [opts.title]                 heading text (omitted if falsy)
 * @param {string|string[]} [opts.paragraphs]   one string or an array of strings
 */
function buildFormSnippet({ title = "", paragraphs = [] } = {}) {
  const paras = (Array.isArray(paragraphs) ? paragraphs : [paragraphs])
    .filter((p) => p != null && String(p).trim() !== "")
    .map((p) => `<p class="body-xl">${escapeHtml(p)}</p>`)
    .join("\n                ");
  const heading = title ? `<h1 class="heading-xxl">${escapeHtml(title)}</h1>` : "";

  return `
  <div class="section xl-spacing two-up xl-gap one-up-tablet" style="background: rgb(0, 0, 0);" daa-lh="s1">
    <div>
      <div class="fragment">
        <div class="section">
          <div class="text dark static-links xl-spacing-bottom text-block con-block">
            <div class="foreground">
              <div>
                ${heading}
                ${paras}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marketo">
      <section class="marketo-form-wrapper"></section>
    </div>
  </div>
`;
}

/**
 *
 *
 *
 *
 *
 *
 *  You "shouldn't" need to change anything below this line.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * =========================================================================
 * MAIN
 * ========================================================================= */

async function loadMarketoForm(config) {
  if (!config || typeof config !== "object") {
    throw new Error("Configuration object is required.");
  }

  const form_config = config.form_config || {};
  const demo_ux = config.demo_ux || {};
  const form_architecture = config.form_architecture || {};

  // demo_ux — HTML + CSS + placement (formCss is resolved via settings below).
  const {
    formDestinationElement,
    snippetDestination = null,
    title = null,             // dynamic heading for the built snippet
    paragraphs = null,        // dynamic body copy: string or string[]
    formHTMLsnippet = null,   // full-override; wins over title/paragraphs
    loadCss = true,           // whether to inject formCss (only ever injected on business.adobe.com)
  } = demo_ux;

  // form_config — data-layer behaviour (assembled into window.mcz_marketoForm_pref).
  const {
    form_id_base,             // base form id (renders the page UI)
    form_id_program,          // if set: submission target; base form supplies the UI
    success,                  // -> form.success
    poi,                      // -> program.poi
    campaignIds,              // -> program.campaignids
    copartnernames,           // -> program.copartnernames
    templateOverrides = null, // { template, purpose, field_visibility, field_filters, program_id, known_visitor, auto_success }
    configureDataLayer = null,
    prefillFields = window.mktoPreFillFields,
  } = form_config;

  // form_architecture — instance identity + plumbing + lifecycle hooks.
  const {
    mktoFormJS = "/js/forms2/js/forms2.min.js",
    formSubmitPath = "/index.php/leadCapture/save2",
    previewMode = false,
    timeout = 10000,
    transformSpec = null,
    onFormReady = null,
  } = form_architecture;

  const settings = resolveSettings({
    munchkinId: form_architecture.munchkinId,
    formId: form_id_base,               // base form id (stageSettings.formId can override)
    instanceDomain: form_architecture.instanceDomain,
    formCss: demo_ux.formCss ?? null,
    stage: form_architecture.stage ?? false,
    stageSettings: form_architecture.stageSettings ?? null,
  });
  const { munchkinId, formId, instanceDomain, formCss } = settings;

  if (!munchkinId || !formId || !instanceDomain) {
    throw new Error("munchkinId, form_id_base, and instanceDomain are required.");
  }

  // Dedup guard on the id we'll actually render under. Only plan the program id if it
  // passes the same validity gate applied below (a number, distinct from the base).
  const programRequested = Number.isInteger(form_id_program) && form_id_program !== form_id_base;
  const plannedFormId = programRequested ? form_id_program : formId;
  if (document.getElementById(`mktoForm_${plannedFormId}`)) {
    throw new Error(`Form mktoForm_${plannedFormId} already loaded.`);
  }

  // Optional preview/QA mode. Mutates the address bar AND turns on the module
  // bundle's verbose + Lana logging (see marketo_form_setup_rules.js). Off by default.
  let previewUrl = document.location.href;
  if (previewMode) {
    const u = new URL(window.location.href);
    if (!u.searchParams.has("preview")) {
      u.searchParams.set("preview", "1");
      window.history.replaceState({}, "", u.toString());
    }
    previewUrl = u.toString();
  }

  // Inject the form CSS only when enabled AND the page is business.adobe.com. Elsewhere
  // (foreign host, bare page) it doesn't try — host string inlined to stay hoisting-safe.
  if (loadCss) {
    if (window.location.hostname === "business.adobe.com" || window.location.hostname === "adobe.com") {
      injectStylesheetOnce(formCss);
    } else {
      console.info(
        `Marketo form CSS not injected: host is "${window.location.hostname}", not business.adobe.com or adobe.com.`
      );
    }
  }

  // A full formHTMLsnippet override wins; otherwise build one from title/paragraphs.
  const effectiveSnippet =
    formHTMLsnippet || buildFormSnippet({ title: title || "", paragraphs: paragraphs || [] });

  // Resolve (and if needed create) the destination element.
  let destinationEl = document.querySelector(formDestinationElement);
  if (!destinationEl && snippetDestination && effectiveSnippet) {
    const host = document.querySelector(snippetDestination);
    if (host) {
      host.insertAdjacentHTML("afterbegin", effectiveSnippet);
      destinationEl = document.querySelector(formDestinationElement);
    } else {
      console.warn(`Snippet destination '${snippetDestination}' not found.`);
    }
  }
  if (!destinationEl) {
    throw new Error(`Form destination element '${formDestinationElement}' not found.`);
  }

  // Ensure the Marketo library is present.
  if (!window?.MktoForms2?.processForm) {
    await loadScriptOnce(`https://${instanceDomain}${mktoFormJS}`, { timeout: 15000 });
  }
  if (!window?.MktoForms2 || typeof window.MktoForms2.processForm !== "function") {
    throw new Error("MktoForms2.processForm unavailable after loading the library.");
  }

  // Fetch the base spec — this supplies the page UI (fields, layout, styling).
  const spec = await fetchFormSpecJSONP({
    instanceDomain, munchkinId, formId, previewUrl, timeout,
  });
  const baseFetchedId = spec.Id ?? formId;

  // Program-form override: the base form renders the UI, but the program form takes the submission.
  let programFormId = null;
  if (form_id_program !== undefined && form_id_program !== null) {
    if (!Number.isInteger(form_id_program)) {
      console.warn(
        `form_id_program must be a number (got ${typeof form_id_program}: ${JSON.stringify(form_id_program)}). ` +
        `Using base form ${baseFetchedId}.`
      );
    } else if (form_id_program === form_id_base) {
      console.warn(
        `form_id_program (${form_id_program}) matches form_id_base; no override applied. Using base form ${baseFetchedId}.`
      );
    } else {
      try {
        const programSpec = await fetchFormSpecJSONP({
          instanceDomain, munchkinId, formId: form_id_program, previewUrl, timeout,
        });
        if (programSpec && (programSpec.Id || Array.isArray(programSpec.rows))) {
          reportProgramFields(form_id_program, baseFetchedId, extractProgramFields(programSpec));
          programFormId = form_id_program; // config exists → override confirmed
        } else {
          console.warn(
            `Program form ${form_id_program} returned no usable configuration. Using base form ${baseFetchedId}.`
          );
        }
      } catch (e) {
        console.warn(
          `Could not load program form ${form_id_program} configuration (${e.message}). Using base form ${baseFetchedId}.`
        );
      }
    }
  }

  // Normalise identity/submit target. Override Id and Vid to the program id only when confirmed; otherwise keep the base id and its fetched version.
  const effectiveFormId = programFormId || baseFetchedId;
  spec.munchkinId = munchkinId;
  spec.Id = effectiveFormId;
  spec.Vid = programFormId ? programFormId : (spec.Vid ?? effectiveFormId);
  spec.name = `mktoForm_${effectiveFormId}`;
  spec.action = `https://${instanceDomain}${formSubmitPath}`;

  // Configure the data layer BEFORE render so the modules read our values.
  const pref = buildDataLayer(config.form_config?.pref ?? window.mcz_marketoForm_pref, {
    success, poi, campaignIds, copartnernames,
  });
  window.mcz_marketoForm_pref = pref;
  const ctx = { config, settings, pref, spec, effectiveFormId };

  setDataLayerFormId(pref, effectiveFormId);                       // deterministic id for getMktoFormID()
  applyTemplateOverrides(pref, templateOverrides, form_id_program); // form.template
  if (typeof configureDataLayer === "function") configureDataLayer(pref, ctx); // your seam

  // Reconcile the spec's known-lead template with the now-final known_visitor state.
  applyKnownVisitorToSpec(spec, pref);

  const finalSpec = typeof transformSpec === "function"
    ? (transformSpec(spec, ctx) || spec)
    : spec;

  // Mount and render, resolving with the live form instance.
  mountFormShell({ destinationEl, formId: finalSpec.Id });
  MktoForms2.setOptions({
    rootUrl: `https://${instanceDomain}`,
    baseUrl: `https://${instanceDomain}/js/forms2/`,
  });

  return new Promise((resolve, reject) => {
    let renderTimer = null;
    if (timeout > 0) {
      renderTimer = setTimeout(
        () => reject(new Error(`Form render timed out after ${timeout}ms.`)),
        timeout
      );
    }

    const onRendered = (formData) => {
      try {
        const form = MktoForms2.getForm(formData.Id);
        if (!form) {
          if (renderTimer) clearTimeout(renderTimer);
          return reject(new Error("Could not retrieve form instance after processForm."));
        }

        // Add hidden fields for the munchkinId.
        form.addHiddenFields({ munchkinId });

        // Call the onFormReady hook if provided.
        if (typeof onFormReady === "function") onFormReady(form, ctx);

        form.render();

        // Prefill AFTER render so we can tell which fields exist.
        applyPrefill(form, prefillFields);

        // Force mktoInstantInquiry to the create_inquiry control value and hold it there
        // Only when explicitly provided.
        // The default logic on the baseline form is always-always true which is odd,
        // so this fixes that...
        if (templateOverrides && typeof templateOverrides.create_inquiry === "boolean") {
          lockFieldToControl(form, "mktoInstantInquiry", templateOverrides.create_inquiry);
        }

        // Conditional State/province requirement (asterisk + block-on-submit) for the
        // countries that need it. The Milo module bundle on business.adobe.com does not wire
        // this the way the Marketo-LP baseline (mss.js) does, so we add it here.
        applyConditionalStateRequirement(form);

        if (renderTimer) clearTimeout(renderTimer);
        resolve(form);
      } catch (e) {
        if (renderTimer) clearTimeout(renderTimer);
        reject(new Error(`Error finalising Marketo form: ${e.message}`));
      }
    };

    try {
      MktoForms2.processForm(finalSpec, onRendered);
    } catch (e) {
      if (renderTimer) clearTimeout(renderTimer);
      reject(new Error(`Error processing Marketo form: ${e.message}`));
    }
  });
}

/**
 * Conditional State/province requirement — mirrors the R3 baseline (mss.js:248 / 637):
 * State is required ONLY for US, CA, IN, AU, NZ, MX, CN and optional for every other country.
 * The Milo marketo block on business.adobe.com does not wire this, so we replicate it:
 *   - on country change + on load, add/remove the required asterisk (<div class="mktoAsterix">*</div>)
 *     and the "mktoRequiredField" class on the State label for those countries;
 *   - block submit (onValidate) when State is empty for those countries and show the error.
 * The State field must be present (field_visibility.state = "visible") for this to run.
 */
function applyConditionalStateRequirement(form) {
  const STATE_REQUIRED = ["US", "CA", "IN", "AU", "NZ", "MX", "CN"];
  const formEl = (form.getFormElem && form.getFormElem()[0]) || null;
  if (!formEl) return;

  const isRequired = () => {
    const vals = (form.getValues && form.getValues()) || {};
    return STATE_REQUIRED.indexOf(String(vals.Country || "")) > -1;
  };

  const stateLabel = () => {
    let lbl = formEl.querySelector("#LblState") || formEl.querySelector('label[for="State"]');
    if (!lbl) {
      const s = formEl.querySelector("#State");
      const row = s && s.closest ? s.closest(".mktoFormRow") : null;
      lbl = row ? row.querySelector("label") : null;
    }
    return lbl;
  };

  const refresh = () => {
    const lbl = stateLabel();
    if (!lbl) return;
    const container = lbl.parentNode;
    if (isRequired()) {
      if (container && container.classList) container.classList.add("mktoRequiredField");
      if (!lbl.querySelector(".mktoAsterix")) {
        const a = document.createElement("div");
        a.className = "mktoAsterix";
        a.textContent = "*";
        lbl.insertBefore(a, lbl.firstChild);
      }
    } else {
      if (container && container.classList) container.classList.remove("mktoRequiredField");
      const ex = lbl.querySelector(".mktoAsterix");
      if (ex && ex.parentNode) ex.parentNode.removeChild(ex);
    }
  };

  // Re-evaluate whenever the country changes, and a few times after render (the State
  // dropdown is injected asynchronously by the geopicker for state-bearing countries).
  const countryEl = formEl.querySelector("#Country");
  if (countryEl) countryEl.addEventListener("change", () => setTimeout(refresh, 0));
  [0, 300, 800, 1500].forEach((ms) => setTimeout(refresh, ms));

  // Enforce required-on-submit for those countries (Milo may not).
  if (typeof form.onValidate === "function") {
    form.onValidate(() => {
      if (!isRequired()) return;
      const vals = (form.getValues && form.getValues()) || {};
      if (!vals.State) {
        if (form.submittable) form.submittable(false);
        try {
          const stateElem = form.getFormElem().find("#State");
          if (form.showErrorMessage) form.showErrorMessage("This field is required.", stateElem);
        } catch (_) { /* showErrorMessage unavailable */ }
        refresh();
      }
    });
  }
}

/**
 * =========================================================================
 * MARKETO HELPERS
 * ========================================================================= */

/** Load an external script once; resolves when ready, rejects on error/timeout. */
function loadScriptOnce(src, { timeout = 15000 } = {}) {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing && existing.dataset.loaded === "true") return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = existing || document.createElement("script");
    let timer = null;
    const done = (fn, arg) => { if (timer) clearTimeout(timer); fn(arg); };

    script.onload = () => { script.dataset.loaded = "true"; done(resolve); };
    script.onerror = (e) =>
      done(reject, new Error(`Failed to load script: ${src} (${e?.message || "unknown error"})`));

    if (timeout > 0) {
      timer = setTimeout(
        () => done(reject, new Error(`Script load timed out after ${timeout}ms: ${src}`)),
        timeout
      );
    }
    if (!existing) { script.src = src; document.head.appendChild(script); }
  });
}

/** Inject a stylesheet once. Non-fatal on failure. */
function injectStylesheetOnce(href) {
  if (!href) return;
  try {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  } catch (e) {
    console.warn("Failed to inject Marketo form CSS:", e);
  }
}

/** Minimal HTML escaping for text injected into the snippet via insertAdjacentHTML. */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


/**
 * Collapse stage/prod into one effective instance.
 * When stage is on, fetch AND submit from the stage instance (munchkinId/formId/
 * instanceDomain all come from stageSettings). If you truly need fetch-prod /
 * submit-stage, add an explicit submitInstanceDomain override instead.
 */
function resolveSettings(config) {
  const base = {
    munchkinId: config.munchkinId,
    formId: config.formId,
    instanceDomain: config.instanceDomain,
    formCss: config.formCss ?? null,
    isStage: false,
  };
  if (config.stage && config.stageSettings) {
    const s = config.stageSettings;
    return {
      ...base,
      munchkinId: s.munchkinId ?? base.munchkinId,
      formId: s.formId ?? base.formId,
      instanceDomain: s.instanceDomain ?? base.instanceDomain,
      formCss: s.formCss ?? base.formCss,
      isStage: true,
    };
  }
  return base;
}

/** Fetch the form spec from Marketo. */
function fetchFormSpecJSONP({ instanceDomain, munchkinId, formId, previewUrl, timeout = 10000 }) {
  return new Promise((resolve, reject) => {
    const callbackName =
      `marketo_jsonp_callback_${Date.now()}_${Math.floor(Math.random() * 1e5)}`;
    const script = document.createElement("script");
    let timer = null;

    const cleanup = () => {
      delete window[callbackName];
      if (script.parentNode) script.remove();
      if (timer) clearTimeout(timer);
    };

    window[callbackName] = (data) => {
      cleanup();
      if (!data || typeof data !== "object") {
        return reject(new Error("Received invalid data from Marketo form API."));
      }
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Failed to load Marketo form spec. Check network or script URL."));
    };

    if (timeout > 0) {
      timer = setTimeout(() => {
        cleanup();
        reject(new Error(`Marketo form spec request timed out after ${timeout}ms.`));
      }, timeout);
    }

    try {
      const url =
        `https://${instanceDomain}/index.php/form/getForm` +
        `?munchkinId=${encodeURIComponent(munchkinId)}` +
        `&form=${encodeURIComponent(formId)}` +
        `&url=${encodeURIComponent(previewUrl || document.location.href)}` +
        `&callback=${callbackName}` +
        `&_=${Date.now()}`;
      script.src = url;
      document.body.appendChild(script);
    } catch (e) {
      cleanup();
      reject(new Error(`Failed to initiate Marketo form request: ${e.message}`));
    }
  });
}

/**
 * Ensure the <form> element exists.
 */
function mountFormShell({ destinationEl, formId, suppressMarketoBaseCss = true }) {
  if (document.getElementById(`mktoForm_${formId}`)) return; // already mounted

  if (suppressMarketoBaseCss && !document.getElementById("mktoForms2BaseStyle")) {
    const span = document.createElement("span");
    span.id = "mktoForms2BaseStyle";
    destinationEl.appendChild(span);
  }

  const formEl = document.createElement("form");
  formEl.id = `mktoForm_${formId}`;
  destinationEl.appendChild(formEl);
}

/**
 * Extract program-specific fields from the form spec.
 * Ignores the identity fields (FirstName/LastName/Email) and the htmltext carrier
 * @returns {Array<{Name,InputLabel,Datatype,Maxlength}>}
 */
function extractProgramFields(spec) {
  const rows = Array.isArray(spec?.rows) ? spec.rows : [];
  const IGNORE = new Set(["FirstName", "LastName", "Email"]);
  return rows
    .flat()
    .filter((f) => f && typeof f === "object" && typeof f.Name === "string")
    .filter((f) => !IGNORE.has(f.Name) && f.Datatype !== "htmltext")
    .map((f) => ({
      Name: f.Name,
      InputLabel: f.InputLabel ?? "",
      Datatype: f.Datatype ?? "",
      Maxlength: f.Maxlength ?? "",
    }));
}

/** Console notice + table for the program-form overrides. */
function reportProgramFields(programId, baseId, fields) {
  console.log(
    `Program Form ID detected (${programId}): this overrides the base form ID (${baseId}). ` +
    `The base form renders the page UI; the program form receives the submission. ` +
    `Note you have additional fields which can be captured specific to this program.`
  );
  if (fields.length && typeof console.table === "function") {
    console.table(fields);
  } else if (!fields.length) {
    console.log("No additional program-specific fields found beyond FirstName/LastName/Email.");
  }
}

/* =========================================================================
 * DATA-LAYER CONFIGURATION
 * ========================================================================= */

/** Ensure the nested data-layer objects the modules expect exist. */
function ensureDataLayer(pref) {
  pref = pref || {};
  pref.form = pref.form || {};
  pref.profile = pref.profile || {};
  pref.program = pref.program || {};
  return pref;
}

/**
 * Assemble window.mcz_marketoForm_pref from the loader's friendly config options,
 * augmenting any pre-existing global.
 */
function buildDataLayer(base, opts = {}) {
  const pref = ensureDataLayer(base || {});
  const { form, program } = pref;
  const { success, poi, campaignIds, copartnernames } = opts;

  if (success !== undefined) form.success = { ...(form.success || {}), ...success };
  if (poi !== undefined) program.poi = poi;
  if (campaignIds !== undefined) program.campaignids = { ...(program.campaignids || {}), ...campaignIds };
  if (copartnernames !== undefined) program.copartnernames = copartnernames;

  return pref;
}

/**
 * Make the form id deterministic for the module bundle.
 */
function setDataLayerFormId(pref, formId) {
  ensureDataLayer(pref).form.id = formId;
}

/** Generate a timestamp for synthesized template names. */
function yymmddhhmmss(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return (
    String(d.getFullYear()).slice(2) +
    p(d.getMonth() + 1) + p(d.getDate()) +
    p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds())
  );
}

/**
 * Register a synthesized template in window.templateRules.
 * @param {string} name - The name of the template.
 * @param {object} ov - The template overrides.
 */
function registerTemplateRule(name, ov) {
  if (!Array.isArray(window.templateRules)) window.templateRules = [];
  if (window.templateRules.some((t) => Object.keys(t)[0] === name)) return; // already registered

  const arr = (v) => (Array.isArray(v) ? v : v == null || v === "" ? [] : [String(v)]);
  const arrMap = (m) => (m && typeof m === "object"
    ? Object.fromEntries(Object.entries(m).map(([k, v]) => [k, arr(v)]))
    : {});

  window.templateRules.push({
    [name]: {
      purpose: arr(ov.purpose),
      field_visibility: arrMap(ov.field_visibility),
      field_filters: arrMap(ov.field_filters),
      program_id: String(ov.program_id ?? ""), // runtime reads rule.program_id (.length) — keep a string
      known_visitor: ov.known_visitor ?? false,
      auto_success: ov.auto_success ?? false,
    },
  });
}

/**
 * Resolve templateOverrides into form.template.
 * @param {object} pref  window.mcz_marketoForm_pref
 * @param {object} ov    templateOverrides { template, purpose, field_visibility, field_filters, program_id, known_visitor, auto_success, create_inquiry }
 * @param {number} [form_id_program]  used to name the synthesized template (form_<id>)
 */
function applyTemplateOverrides(pref, ov, form_id_program) {
  if (!ov) return;
  const dl = ensureDataLayer(pref);

  const named = ov.template != null && String(ov.template).trim() !== "";
  if (named) {
    dl.form.template = ov.template; // existing template holds the config; ignore the rest
    return;
  }

  const progId = Number.isInteger(form_id_program) ? form_id_program : null;
  const tempName = progId ? `form_${progId}` : `temp${yymmddhhmmss()}`;
  dl.form.template = tempName;
  dl.form.known_visitor = ov.known_visitor ?? false; // mirror for pre-render knownLead.template reconciliation

  // create_inquiry -> form.mktoInstantInquiry[<subtype>] (subtype derived from purpose).
  // The runtime reads mktoInstantInquiry[form.subtype], so key it by this form's subtype.
  const subtype = ov.purpose != null
    ? String(Array.isArray(ov.purpose) ? ov.purpose[0] : ov.purpose).split(":")[0]
    : "";
  if (subtype) {
    dl.form.mktoInstantInquiry = {
      ...(dl.form.mktoInstantInquiry || {}),
      [subtype]: ov.create_inquiry ?? false,
    };
  }

  registerTemplateRule(tempName, ov);
}

/**
 * Reconcile the fetched Marketo spec's known-lead template with the effective known-visitor state.
 */
function applyKnownVisitorToSpec(spec, pref) {
  const knownLead = spec?.ProcessOptions?.knownLead;
  if (!knownLead) return; // this form spec carries no known-lead block

  const enabled = pref?.form?.known_visitor === true;
  if (!enabled) {
    knownLead.template = ""; // disabled -> clear per intent
    return;
  }
  if (!knownLead.template) {
    console.warn(
      "known_visitor enabled but ProcessOptions.knownLead.template is empty on this " +
      "form spec — the known-visitor form has nothing to render."
    );
  }
}

/**
 * Prefill the rendered form. Fields already present get their values set (setValuesCoerced).
 * Fields not on the form are added as hidden fields so they still submit.
 */
function applyPrefill(form, prefillFields) {
  if (!prefillFields || typeof prefillFields !== "object") return;
  const entries = Object.entries(prefillFields).filter(([, v]) => v !== undefined);
  if (!entries.length) return;

  const formEl = (form.getFormElem && form.getFormElem()[0]) || null;
  if (!formEl) { form.setValuesCoerced(Object.fromEntries(entries)); return; } // can't inspect DOM; best-effort

  const missing = {};
  for (const [name, value] of entries) {
    if (!formEl.querySelector(`[name="${name}"]`)) missing[name] = value;
  }
  if (Object.keys(missing).length) form.addHiddenFields(missing); // create the absent fields
  form.setValuesCoerced(Object.fromEntries(entries));             // now coerce-set them all
}

/**
 * Force a form field to a control value and hold it there, even against programmatic rewrites by the module bundle.
 */
function lockFieldToControl(form, name, value) {
  const formEl = form.getFormElem && form.getFormElem()[0];
  if (!formEl) return;
  const control = String(value);

  const lock = (input) => {
    if (!input || input.dataset.controlLocked === "1") return;
    input.setAttribute("data-control", control);
    input.setAttribute("value", control);
    try {
      Object.defineProperty(input, "value", {
        configurable: true,
        get() { return control; },
        set() { /* ignore — locked to data-control */ },
      });
    } catch (_) { /* getter/setter unavailable; attribute + observer still enforce */ }
    input.addEventListener("change", () => input.setAttribute("value", control));
    input.dataset.controlLocked = "1";
  };

  const ensure = () => {
    let inputs = formEl.querySelectorAll(`[name="${name}"]`);
    if (!inputs.length) {
      form.addHiddenFields({ [name]: value });
      inputs = formEl.querySelectorAll(`[name="${name}"]`);
    }
    inputs.forEach(lock);
  };

  ensure();
  new MutationObserver(ensure).observe(formEl, { childList: true, subtree: true });
}