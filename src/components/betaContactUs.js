// import classNames from "classnames";
// import { css } from "@emotion/react";
// import "@spectrum-css/typography";
import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./formComponent/InputField";
import SelectField from "./formComponent/SelectField";
import CheckBoxField from "./formComponent/CheckBoxField";
import _isEmpty from "lodash/isEmpty";
import _times from "lodash/times";

const regionOptions = [
  {
    key: 1,
    label: "North America"
  },
  {
    key: 2,
    label: "Latin America"
  },
  {
    key: 3,
    label: "Asia/Pacific/Japan"
  },
  {
    key: 4,
    label: "Europe/Middle East/Africa"
  }
];

const volumeOPtions = [
  {
    key: 1,
    label: "less than 15k transactions/mo"
  },
  {
    key: 2,
    label: "15k-50k transactions/mo"
  },
  {
    key: 3,
    label: "more than 50k transactions/mo"
  }
];

const JoinBetaForm = ({ }) => {
  const [errorMsg, seterrorMsg] = useState({});
  const [formValue, setFormValue] = useState({});
  const [btnDisable, setBtnDisable] = useState(false)

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
  const onChange = e => {
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
    if (e.target.id === "job_title") {
      setFormValue({ ...formValue, job_title: e.target.value });
    }
    if (e.target.id === "region") {
      setFormValue({ ...formValue, region: e.target.value });
    }
    if (e.target.id === "expected_monthly_volume") {
      setFormValue({ ...formValue, expected_monthly_volume: e.target.value });
    }
    if (e.target.id === "checkbox") {
      setFormValue({ ...formValue, checkbox: e.target.checked });
    }
  };

  const onSubmit = async (e) => {

    e.preventDefault();
    setBtnDisable(true)

    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var blacklist = /\b(death|kill|murder)\b/;
    var checkBadWords;
    let error = {};
    let randomString = _times(16, () =>
      ((Math.random() * 0xf) << 0).toString(16)
    ).join("");
    // setLoading(true)

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

    if (_isEmpty(formValue?.job_title)) {
      error.job_title = "Required *";
      setBtnDisable(false)
    } else if (blacklist.test(formValue?.job_title)) {
      error.job_title = "Please avoid inappropriate words";
      setBtnDisable(false)
    } else {
      error.job_title = "";
    }

    if (_isEmpty(formValue?.region)) {
      error.region = "Required *";
      setBtnDisable(false)
    } else {
      error.region = "";
    }
    if (_isEmpty(formValue?.expected_monthly_volume)) {
      error.expected_monthly_volume = "Required *";
      setBtnDisable(false)
    } else {
      error.expected_monthly_volume = "";
    }

    if (_isEmpty(formValue?.use_case)) {
      error.use_case = "Required *";
      setBtnDisable(false)
    } else {
      let foundWords = getBadWords(formValue?.use_case);
      checkBadWords = foundWords.length > 0;
      if (foundWords.length > 0) {
        error.use_case = "Please avoid inappropriate words";
        setBtnDisable(false)
      } else {
        error.use_case = "";
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
      !_isEmpty(formValue?.job_title) &&
      !blacklist.test(formValue?.job_title) &&
      !_isEmpty(formValue?.region) &&
      !_isEmpty(formValue?.expected_monthly_volume) &&
      !checkBadWords &&
      formValue?.checkbox == true
    ) {
      let betaFormData = {
        ...formValue,
        formType: "sales",
        formId: randomString
      };
      try {
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(betaFormData)
        };
        const response = await fetch(
          `https://927029-dcpm.adobeioruntime.net/api/v1/web/default/submit`,
          config
        );
        if (response.status === 200) {
          window.location.href = `/document-services/pricing/contact/sales/confirmation/`;
        }
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  return (
    <form className="form-container Sales-Form">
      <div className="head-container">
        <div className="caption">
          Interested in joining the Beta Program for the Adobe Import/Export Form Data APIs?
        </div>
        <div className="faq-text">
          The Import/Export PDF Form Data APIs programmatically import and export data from form fields at scale.
        </div>
        <div className="faq-text">
          Primary capabilities of the Export PDF Form Data API include:
        </div>
        <div>
          <ul>
            <li className="faq-text">Export the form data as key/value pairs from a filled interactive PDF form (AcroForm/Static XFA). </li>
            <li className="faq-text">Export the JSON structure from an empty interactive PDF form (AcroForm/Static XFA), to populate with values for use in the Import Form Data service. </li>
          </ul>
        </div>
        <div className="faq-text">
          Primary capabilities of the Import PDF Form Data API include:
        </div>
        <div className="faq-text">
          <ul>
            <li className="faq-text">
              Import the form data from key/value pair into an empty interactive PDF form (AcroForm/Static XFA).
            </li>
          </ul>
        </div>
        <div className="faq-text">
          Use this form to have an Adobe representative contact you with more information about the Beta program or to answer other questions you have about the APIs. For additional information, please refer to the documentation [insert link].
        </div>
        <div className="request-access-beta">
          <div className="caption">Request access to the Beta Program </div>
          <div className="faq-text">For technical inquiries, submit a tech support request <a href="https://developer.adobe.com/document-services/pricing/contact/support/">here.</a></div>
        </div>
      </div>
      <div className="field-container">
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.firstName}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.firstName}
        />
        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.lastName}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.lastName}
        />
      </div>
      <div className="field-container">
        <InputField
          id="business_email"
          label="Business Email"
          type="email"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.business_email}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.business_email}
        />
        <InputField
          id="company_website"
          label="Company Website"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.company_website}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.company_website}
        />
      </div>
      <div className="field-container">
        <InputField
          id="phone"
          label="Phone"
          type="number"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.phone}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.phone}
        />
        <InputField
          id="job_title"
          label="Job Title"
          type="text"
          maxLength="50"
          className="lnput-field"
          labelClassName="lable-content text-content"
          value={formValue?.job_title}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.job_title}
        />
      </div>
      <div className="field-container">
        <SelectField
          id="region"
          label="Region"
          type="text"
          maxLength="50"
          className="selectors"
          textClassName="lable-content text-content"
          options={regionOptions}
          initialOption="Select your geography"
          value={formValue?.region}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.region}
        />
        <SelectField
          id="expected_monthly_volume"
          label="Expected Monthly Volume"
          type="text"
          maxLength="50"
          className="selectors"
          textClassName="lable-content text-content"
          options={volumeOPtions}
          initialOption="Select your anticipated volume"
          value={formValue?.expected_monthly_volume}
          onChange={e => onChange(e)}
          errorMsg={errorMsg.expected_monthly_volume}
        />
      </div>
      <div className="content-container">
        <div className="checkbox-container">
          <CheckBoxField
            className={`input-checkbox ${errorMsg.checkbox === "Required *" ? "required-checkbox" : ""
              }`}
            id="checkbox"
            name="checkbox"
            onChange={e => onChange(e)}
            checked={formValue?.checkbox}
          />
        </div>
        <div className="text-content checkbox-text-container">
          The{" "}
          <a href="https://www.adobe.com/privacy/policy.html" className="link-content">
            Adobe family of companies
          </a>{" "}
          would like to keep you informed about Acrobat Services APIs, which
          may include contacting you via email. By checking this box, you agree
          to being contacted via email. Please see our{" "}
          <a
            target="_blank"
            href="https://www.adobe.com/privacy/policy.html"
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
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.adobe.com%2Fcontent%2Fdam%2Fcc%2Fen%2Flegal%2Fdocuments%2FPrerelease-Software-License-Agreement_20240619-ImportExport-APIs.pdf&data=05%7C02%7Cmehakg%40adobe.com%7Cb5fad237c7f44303362f08dc94b39f32%7Cfa7b1b5a7b34438794aed2c178decee1%7C0%7C0%7C638548746385491717%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=CLOyReXA%2FJRuC%2BSH3MjXtjGdlzLLNccmnDz6ZcdcLXw%3D&reserved=0"
            className="link-content"
          >
            License Agreement for Prerelease Software, Import/Export PDF Form Data API Beta
          </a>
          .
        </div>
      </div>
      <div className="button-container">
        <button className={btnDisable ? "btn-disable button-content" : "button-content"} disabled={btnDisable} onClick={onSubmit} type="submit">
          <label className={btnDisable ? "btn-cursor button-label" : "button-label"} >Submit</label>
        </button>
      </div>
    </form>
  );
};

JoinBetaForm.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string
};

export { JoinBetaForm };
