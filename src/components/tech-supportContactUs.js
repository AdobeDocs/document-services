// import classNames from "classnames";
// import { css } from "@emotion/react";
// import "@spectrum-css/typography";
import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Context from "@adobe/gatsby-theme-aio/src/components/Context";

import InputField from "./formComponent/InputField";
import SelectField from "./formComponent/SelectField";
import CheckBoxField from "./formComponent/CheckBoxField";
import _isEmpty from "lodash/isEmpty";
import _times from "lodash/times";
import jsonData from "./tech-support-dropdown-data.json";
import { withPrefix } from "gatsby";

const expertiseOptions = [
  {
    key: 1,
    label: "I am just trialing the product"
  },
  {
    key: 2,
    label: "I am a current customer"
  }
];

const issueTypeOptions = [
  {
    key: 1,
    label: "Account Management"
  },
  {
    key: 2,
    label: "Data Security & Privacy"
  },
  {
    key: 3,
    label: "Features - PDF Embed API"
  },
  {
    key: 4,
    label: "Features - PDF Services API"
  },
  {
    key: 5,
    label: "Support"
  }
];

const issue_sub_url_array = [
  {
    issue_type: "Account Management",
    sub_issue_type:
      "How do I see how many API transactions or calls I've used?",
    sub_issue_type_id:
      "account-management-how-do-i-see-how-many-api-transactions-or-calls"
  },
  {
    issue_type: "Account Management",
    sub_issue_type:
      "My company has an existing Enterprise Agreement with Adobe. Can I use the same Adobe credentials for PDF Services API?",
    sub_issue_type_id:
      "account-management-my-company-has-an-existing-enterprise-agreement-with-adobe-can-i-use-the-same-adobe-credentials"
  },
  {
    issue_type: "Account Management",
    sub_issue_type:
      "Why do I have to use a personal account when setting up a Free Tier or account? Why can't I use my company's existing enterprise email/account?",
    sub_issue_type_id:
      "account-management-why-do-i-have-to-use-a-personal-account-when-setting-up-a-free-tier-or-account"
  },
  {
    issue_type: "Account Management",
    sub_issue_type: "Where do I find my Client ID or API key?",
    sub_issue_type_id:
      "account-management-where-do-i-find-my-client-id-or-api-key"
  },
  {
    issue_type: "Account Management",
    sub_issue_type:
      "If I already have credentials and need new ones, how do I get them?",
    sub_issue_type_id:
      "account-management-if-i-already-have-credentials-and-need-new-ones-how-do-i-get-them"
  },
  {
    issue_type: "Account Management",
    sub_issue_type:
      "Can I continue using my same Free Tier credentials when I pay for Adobe Acrobat Services?",
    sub_issue_type_id:
      "account-management-can-i-continue-using-my-same-free-tier-credentials"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "Is Adobe Acrobat Services (PDF Services API and PDF Embed API) HIPAA compliant?",
    sub_issue_type_id:
      "data-security--privacy-is-adobe-document-services--hipaa-compliant"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "Where are the data centers for Adobe Acrobat Services based?",
    sub_issue_type_id:
      "data-security--privacy-where-are-the-data-centers-for-adobe-document-services-based"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type: "Will the choice to provision data in one data center over the other be irreversible?",
    sub_issue_type_id:
      "data-security--privacy-will-the-choice-to-provision-data-in-one-data-center-over-the-other-be-irreversible"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "Does Adobe collect any data about the PDF being viewed or processed? Where are the server side components hosted?",
    sub_issue_type_id:
      "data-security--privacy-does-adobe-collect-any-data-about-the-pdf-being-viewed-or-processed"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "How are data transfers by Adobe Acrobat Services secured?",
    sub_issue_type_id:
      "data-security--privacy-how-are-data-transfers-by-adobe-document-services-secured"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "How does Adobe Acrobat Services use or store file content and identity data?",
    sub_issue_type_id:
      "data-security--privacy-how-does-adobe-document-services-use-or-store-file-content"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "What regulatory compliances is Adobe Acrobat Services certified for?",
    sub_issue_type_id:
      "data-security--privacy-what-regulatory-compliances-are-adobe-document-services-certified-for"
  },
  {
    issue_type: "Data Security & Privacy",
    sub_issue_type:
      "Can I use Adobe Acrobat Services in a web, mobile, or desktop application?",
    sub_issue_type_id:
      "data-security--privacy-can-i-use-adobe-document-services-in-a-web-mobile-or-desktop-application"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type: "Can I use Adobe Acrobat Sign with PDF Embed API?",
    sub_issue_type_id:
      "features---pdf-embed-api-can-i-use-adobe-acrobat-sign-with-pdf-embed-api"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type:
      "Can we use PDF Embed API entirely disconnected from the internet?",
    sub_issue_type_id:
      "features---pdf-embed-api-can-we-use-pdf-embed-api-entirely-disconnected-from-the-internet"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type: "Is there any cost to using the PDF Embed API?",
    sub_issue_type_id:
      "features---pdf-embed-api-is-there-any-cost-to-using-the-pdf-embed-api"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type: "How can I set up Adobe Analytics with PDF Embed API?",
    sub_issue_type_id:
      "features---pdf-embed-api-how-can-i-set-up-adobe-analytics-with-pdf-embed-api"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type:
      "For PDF Embed API, is it possible to map multiple un-related domains to the same client ID? I would like to use the same credentials across all of my domains.",
    sub_issue_type_id:
      "features---pdf-embed-api-for-pdf-embed-api-is-it-possible-to-map-multiple-un-related-domains-to-the-same-client-id"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type:
      "For PDF Embed API, is it possible to map multiple sub-domains to the same client ID?",
    sub_issue_type_id:
      "features---pdf-embed-api-for-pdf-embed-api-is-it-possible-to-map-multiple-sub-domains-to-the-same-client-id"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type:
      "For PDF Embed API, I have mapped my domain but later realized the entry was incorrect. How can I update the domain from your portal?",
    sub_issue_type_id:
      "features---pdf-embed-api-for-pdf-embed-api-i-have-mapped-my-domain-but-later-realized-the-entry-was-incorrect"
  },
  {
    issue_type: "Features - PDF Embed API",
    sub_issue_type: "For PDF Embed API, how many domains can I map to?",
    sub_issue_type_id:
      "features---pdf-embed-api-for-pdf-embed-api-how-many-domains"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "If I am currently a paid customer, will I have access to the new services in PDF Services API?",
    sub_issue_type_id:
      "features---pdf-services-api-if-i-am-currently-a-paid-customer-will-i-have-access"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "Can we use the HTML to PDF function without having to zip the HTML files?",
    sub_issue_type_id:
      "features---pdf-services-api-can-we-use-the-html-to-pdf-function"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type: "Does PDF services API support custom fonts?",
    sub_issue_type_id:
      "features---pdf-services-api-does-pdf-services-api-support-custom-fonts"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type: "Can we create PDFs using HTML in multiple languages?",
    sub_issue_type_id:
      "features---pdf-services-api-can-we-create-pdfs-using-html"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "How is PDF Services API different from PDF Library? Or from Acrobat DC SDK?",
    sub_issue_type_id:
      "features---pdf-services-api-how-is-pdf-services-api-different-from-pdf-library"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type: "What programming languages are supported?",
    sub_issue_type_id:
      "features---pdf-services-api-what-programming-languages-are-supported"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type: "Can I run these acrobat Services on-premise?",
    sub_issue_type_id:
      "features---pdf-services-api-can-i-run-these-document-services-on-premise"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type: "What file formats can I create a PDF?",
    sub_issue_type_id:
      "features---pdf-services-api-what-file-formats-can-i-create-a-pdf"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "Tracked changes and comment support. What happens to any tracked changes and comments in the DOC or DOCX files that are converted to PDF? Are they rendered in the finalized document, or are tracked changes first accepted/rejected, and are comments removed from the output?",
    sub_issue_type_id:
      "features---pdf-services-api-tracked-changes-and-comment-support-what-happens-to-any-tracked-changes-and-comments-in-the-doc-or-docx-files"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "Where can we learn more about your Power Automate connector?",
    sub_issue_type_id:
      "features---pdf-services-api-where-can-we-learn-more-about-your-power-automate-connector"
  },
  {
    issue_type: "Features - PDF Services API",
    sub_issue_type:
      "Are there usage limitations associted with PDF Services API?",
    sub_issue_type_id:
      "features---pdf-services-api-are-there-usage-limitations-associted-with-pdf-services-api"
  },
  {
    issue_type: "Support",
    sub_issue_type: "Can we continue to use older versions of the API?",
    sub_issue_type_id:
      "support-can-we-continue-to-use-older-versions-of-the-api"
  },
  {
    issue_type: "Support",
    sub_issue_type: "How do I get support for technical issues?",
    sub_issue_type_id: "support-how-do-i-get-support-for-technical-issues"
  }
];

const issue_url_array = [
  {
    key: 1,
    title: "Account Management",
    id: "account-management"
  },
  {
    key: 2,
    title: "Data Security & Privacy",
    id: "data-security--privacy"
  },
  {
    key: 3,
    title: "Features - PDF Embed API",
    id: "features---pdf-embed-api"
  },
  {
    key: 4,
    title: "Features - PDF Services API",
    id: "features---pdf-services-api"
  },
  {
    key: 5,
    title: "Support",
    id: "support"
  }
];

const TechSupportContactUs = ({}) => {
  const [errorMsg, seterrorMsg] = useState({});
  const [formValue, setFormValue] = useState({});
  const [dynamicFaqLink, setDynamicFaqLink] = useState(
    "FAQ Article:Integration:Setting up your CID Key in 3 easy steps."
  );
  const [subIssueTypeOptions, setSubIssueTypeOptions] = useState();
  const [link, setLink] = useState("");
  const [btnDisable, setBtnDisable] = useState(false)

  const { location } = useContext(Context);

  useEffect(() => {
    const Options = jsonData.category
      .filter(category => {
        return category.category_name === formValue.issue_type
      })
      .map(filtered_category =>
        filtered_category.questions.map((question, index) => {
          return {label: question.qst, key: index};
        })
      );
       let keys = {key:Options[0]?.length+1 ,label:'Other'}
       Options[0]?.push(keys)
    setSubIssueTypeOptions(...Options);
  }, [formValue.issue_type]);

  useEffect(() => {
    let issue_link;
    let issue_sub_link;
    let hrefArray;
    let val;
    hrefArray = issue_sub_url_array.filter(d => {
      return (
        d.issue_type === formValue.issue_type &&
        d.sub_issue_type === formValue.issue_sub_type
      );
    });
    if (hrefArray.length || formValue.issue_type) {
      if (hrefArray.length) {
        val = `/document-services/faq/tech-support/#${hrefArray[0]?.sub_issue_type_id}`;
        issue_sub_link = `${location.pathname}/#${hrefArray[0]?.sub_issue_type_id}`;
      } else if(formValue.issue_sub_type === 'Other'){
        val = `/document-services/faq/tech-support/`;
        issue_sub_link = `/document-services/faq/tech-support/`;
      }else {
        issue_url_array.map(issue_url => {
          if (formValue.issue_type === issue_url.title) {
            return (
              (val = `/document-services/faq/tech-support/#${issue_url.id}`),
              (issue_link = `${location.pathname}/#${issue_url.id}`)
            );
          }
        });
      }
      setLink(val);
      setDynamicFaqLink(issue_sub_link ? issue_sub_link : issue_link);
    }
  }, [formValue.issue_type, formValue.issue_sub_type]);

  const getBadWords = str => {
    let badwords = ["death", "kill", "murder"];
    let words = [];
    badwords.forEach(word =>
      str
        .replace(/ /g, "")
        .toLowerCase()
        .includes(word.replace(/ /g, "").toLowerCase())
        ? words.push(word)
        : null
    );
    return words;
  };

  const onChnage = e => {
    if (e.target.id === "firstName") {
      setFormValue({ ...formValue, firstName: e.target.value });
    }

    if (e.target.id === "lastName") {
      setFormValue({ ...formValue, lastName: e.target.value });
    }
    if (e.target.id === "business_email") {
      setFormValue({ ...formValue, business_email: e.target.value });
    }
    if (e.target.id === "company_website") {
      setFormValue({ ...formValue, company_website: e.target.value });
    }
    if (e.target.id === "phone") {
      setFormValue({ ...formValue, phone: e.target.value });
    }
    if (e.target.id === "expertise") {
      setFormValue({ ...formValue, expertise: e.target.value });
    }
    if (e.target.id === "issue_type") {
      setFormValue({
        ...formValue,
        issue_type: e.target.value,
        issue_sub_type: ""
      });
    }
    if (e.target.id === "issue_sub_type") {
      setFormValue({ ...formValue, issue_sub_type: e.target.value });
    }
    if (e.target.id === "issue") {
      setFormValue({ ...formValue, issue: e.target.value });
    }
    if (e.target.id === "checkbox") {
      setFormValue({ ...formValue, checkbox: e.target.checked });
    }
  };

  const onSubmit = async( e) => {

    e.preventDefault();
    setBtnDisable(true)

    let randomString = _times(16, () =>
      ((Math.random() * 0xf) << 0).toString(16)
    ).join("");
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var blacklist = /\b(death|kill|murder)\b/;
    var checkBadWords;
    let error = {};

    if (_isEmpty(formValue?.firstName)) {
      error.firstName = "Required *";
      setBtnDisable(false)
    } else if (blacklist.test(formValue?.firstName)) {
      error.firstName = "Please avoid inappropriate words";
      setBtnDisable(false)
    } else {
      error.firstName = "";
    }

    if (_isEmpty(formValue?.lastName)) {
      error.lastName = "Required *";
      setBtnDisable(false)
    } else if (blacklist.test(formValue?.lastName)) {
      error.lastName = "Please avoid inappropriate words";
      setBtnDisable(false)
    } else {
      error.lastName = "";
    }

    if (_isEmpty(formValue?.business_email)) {
      error.business_email = "Required *";
      setBtnDisable(false)
    } else if (!emailCheck.test(formValue?.business_email)) {
      error.business_email = "Email address is not valid";
      setBtnDisable(false)
    } else if (blacklist.test(formValue?.business_email)) {
      error.business_email = "Please avoid inappropriate words";
      setBtnDisable(false)
    } else {
      error.business_email = "";
    }

    if (_isEmpty(formValue?.company_website)) {
      error.company_website = "Required *";
      setBtnDisable(false)
    } else if (blacklist.test(formValue?.company_website)) {
      error.company_website = "Please avoid inappropriate words";
      setBtnDisable(false)
    } else {
      error.company_website = "";
    }

    if (_isEmpty(formValue?.phone)) {
      error.phone = "Required *";
      setBtnDisable(false)
    } else {
      error.phone = "";
    }

    if (_isEmpty(formValue?.expertise)) {
      error.expertise = "Required *";
      setBtnDisable(false)
    } else {
      error.expertise = "";
    }
    if (_isEmpty(formValue?.issue_type)) {
      error.issue_type = "Required *";
      setBtnDisable(false)
    } else {
      error.issue_type = "";
    }
    if (_isEmpty(formValue?.issue_sub_type)) {
      error.issue_sub_type = "Required *";
      setBtnDisable(false)
    } else {
      error.issue_sub_type = "";
    }

    if (_isEmpty(formValue?.issue)) {
      error.issue = "Required *";
      setBtnDisable(false)
    } else {
      let foundWords = getBadWords(formValue?.issue);
      checkBadWords = foundWords.length > 0;
      if (foundWords.length > 0) {
        error.issue = "Please avoid inappropriate words";
        setBtnDisable(false)
      } else {
        error.issue = "";
      }
    }
    if (formValue?.checkbox !== true) {
      error.checkbox = "Required *";
      setBtnDisable(false)
    } else {
      error.checkbox = "";
    }
    seterrorMsg({ ...error });

    if (
      !_isEmpty(formValue?.firstName) &&
      !blacklist.test(formValue?.firstName) &&
      !_isEmpty(formValue?.lastName) &&
      !blacklist.test(formValue?.lastName) &&
      !_isEmpty(formValue?.business_email) &&
      emailCheck.test(formValue?.business_email) &&
      !blacklist.test(formValue?.business_email) &&
      !_isEmpty(formValue?.company_website) &&
      !blacklist.test(formValue?.company_website) &&
      !_isEmpty(formValue?.phone) &&
      !_isEmpty(formValue?.expertise) &&
      !_isEmpty(formValue?.issue_sub_type) &&
      !_isEmpty(formValue?.issue) &&
      !checkBadWords &&
      formValue?.checkbox == true
    ) {
      let techSupportData = {
        ...formValue,
        formType: "techSupport",
        formId: randomString
      };
      try {
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(techSupportData)
        };
        const response = await fetch(
          `https://927029-dcpm.adobeioruntime.net/api/v1/web/default/submit`,
          config
        );
        if (response.status === 200) {
          window.location.href = `/document-services/pricing/contact/support/confirmation/`;
        }
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  return (
    <form className="form-container Tech-Support-Form" name="Tech-Support-Form">
      <div className="head-container">
        <div className="caption">Get tech support.</div>
        <div className="faq-text">
          Please fill out the form below and an Adobe Expert will contact you
          within 3 business days.
        </div>
        <div className="faq-text">
          To get faster issue resolution, please visit our FAQ instead.{" "}
          <button
            className="faq-button-content"
            onClick={() =>
              (window.location.href = "/document-services/faq/tech-support/")
            }
          >
            <label className="button-label">FAQ</label>
          </button>
        </div>
        <div className="faq-text">
          For sales inquiries, submit a sales consultation request{" "}
          <b>
            <a className="link-content" href="../sales/">
              here.
            </a>
          </b>
        </div>
      </div>
      <div className="field-container">
        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.firstName}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.firstName}
        />
        <InputField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.lastName}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.lastName}
        />
      </div>
      <div className="field-container">
        <InputField
          id="business_email"
          name="business_email"
          label="Business Email"
          type="email"
          maxLength="50"
          pattern="^\w+(\s+\w+)*$"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.business_email}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.business_email}
        />
        <InputField
          id="company_website"
          name="company_website"
          label="Company Website"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.company_website}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.company_website}
        />
      </div>
      <div className="field-container">
        <InputField
          id="phone"
          name="phone"
          label="Phone"
          type="number"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.phone}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.phone}
        />
        <SelectField
          id="expertise"
          name="expertise"
          label="Expertise"
          type="text"
          maxLength="50"
          className="selectors"
          textClassName="lable-content text-content"
          initialOption="Please select your status"
          options={expertiseOptions}
          value={formValue?.expertise}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.expertise}
        />
      </div>
      <div className="area-container">
        <SelectField
          id="issue_type"
          name="issue_type"
          label="Issue Type"
          type="text"
          maxLength="50"
          className="selectors"
          textClassName="lable-content text-content"
          initialOption="Click here to select the nature of your issue"
          options={issueTypeOptions}
          value={formValue?.issue_type}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.issue_type}
        />
      </div>
      <div className="area-container">
        <SelectField
          id="issue_sub_type"
          name="issue_sub_type"
          label="Issue Sub-Type"
          type="text"
          maxLength="50"
          className="selectors"
          textClassName="lable-content text-content"
          initialOption="Click here to select your specific issue"
          options={subIssueTypeOptions}
          value={formValue?.issue_sub_type}
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.issue_sub_type}
        />
      </div>
      <div className="summary-area-content text-content">
        <div className="summary-container">
          <div className="caption">In a hurry?</div>
          <div className="faq-text">
            Get answers within minutes using the dynamic FAQ link below:
          </div>
          <div className="faq-text">
            <a
              href={link === "" ? "/document-services/faq/tech-support/" : link}
              className="link-content"
            >
              {dynamicFaqLink}
            </a>
          </div>
        </div>
      </div>
      <InputField
        id="issue"
        name="issue"
        textAreaPlaceholder="Issue"
        placeholder="Please describe your issue in detail."
        type="textarea"
        rows="10"
        areaClassName="area-content text-content"
        labelClassName="lable-content text-content"
        textareaContent={formValue.issue}
        value={formValue?.issue}
        onChange={e => onChnage(e)}
        errorMsg={errorMsg.issue}
      />
      <div className="content-container">
        <div className="checkbox-container">
          <CheckBoxField
            errorMsg={errorMsg.checkbox}
            className={`input-checkbox ${
              errorMsg.checkbox === "Required *" ? "required-checkbox" : ""
            }`}
            id="checkbox"
            name="checkbox"
            onChange={e => onChnage(e)}
            checked={formValue.checkbox}
          />
        </div>
        <div className="text-content checkbox-text-container">
          The{" "}
          <a href="https://www.adobe.com/privacy.html" className="link-content">
            Adobe family of companies
          </a>{" "}
          would like to keep you informed about Acrobat Services APIs, which
          may include contacting you via email. By checking this box, you agree
          to being contacted via email. Please see our{" "}
          <a
            target="_blank"
            href="https://www.adobe.com/privacy.html"
            className="link-content"
          >
            Privacy Policy
          </a>{" "}
          for more details.
        </div>
      </div>
      <div className="content-container text-content">
        <div>
          By clicking Submit, I agree that I have read and accepted the{" "}
          <a
            target="_blank"
            href="https://www.adobe.com/legal/terms.html"
            className="link-content"
          >
            Terms of Use.
          </a>
        </div>
      </div>
      <div className="button-container">
        <button className={ btnDisable ? "btn-disable button-content" : "button-content"}  disabled={btnDisable}  onClick={onSubmit} type="submit">
          <label className={btnDisable ? "btn-cursor button-label" : "button-label"} >Submit</label>
        </button>
      </div>
    </form>
  );
};

TechSupportContactUs.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string
};

export { TechSupportContactUs };
