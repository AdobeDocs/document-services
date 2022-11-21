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
    label: "less than 10K transactions/mo"
  },
  {
    key: 2,
    label: "10-50k transactions/mo"
  },
  {
    key: 3,
    label: "more than 50k transactions/mo"
  }
];

const SalesContactUs = ({}) => {
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
    if (e.target.id === "job_title") {
      setFormValue({ ...formValue, job_title: e.target.value });
    }
    if (e.target.id === "region") {
      setFormValue({ ...formValue, region: e.target.value });
    }
    if (e.target.id === "expected_monthly_volume") {
      setFormValue({ ...formValue, expected_monthly_volume: e.target.value });
    }
    if (e.target.id === "use_case") {
      setFormValue({ ...formValue, use_case: e.target.value });
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
      !_isEmpty(formValue?.use_case) &&
      !checkBadWords &&
      formValue?.checkbox == true
    ) {
      let salesFormData = {
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
          body: JSON.stringify(salesFormData)
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
          Get info about pricing, billing, and licensing.
        </div>
        <div className="faq-text">
          Please visit our{" "}
          <a className="link-content" href="/document-services/faq/sales/">
            FAQ
          </a>{" "}
          or fill out the form below to speak with an Adobe rep.
        </div>
        <div className="faq-text">
          For technical inquiries, submit a tech support request{" "}
          <a className="link-content" href="/document-services/pricing/contact/support/">
            here.
          </a>
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
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
          onChange={e => onChnage(e)}
          errorMsg={errorMsg.expected_monthly_volume}
        />
      </div>
      <InputField
        id="use_case"
        textAreaPlaceholder="Use Case"
        type="textarea"
        rows="6"
        areaClassName="area-content text-content"
        labelClassName="lable-content text-content"
        placeholder="Please describe your intended application of our PDF Services APIs."
        value={formValue?.use_case}
        onChange={e => onChnage(e)}
        errorMsg={errorMsg.use_case}
      />
      <div className="content-container">
        <div className="checkbox-container">
          <CheckBoxField
            className={`input-checkbox ${
              errorMsg.checkbox === "Required *" ? "required-checkbox" : ""
            }`}
            id="checkbox"
            name="checkbox"
            onChange={e => onChnage(e)}
            checked={formValue?.checkbox}
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
            Terms of Use
          </a>
          .
        </div>
      </div>
      <div className="button-container">
        <button  className={ btnDisable ? "btn-disable button-content" : "button-content"}  disabled={btnDisable} onClick={onSubmit} type="submit">
          <label className={btnDisable ? "btn-cursor button-label" : "button-label"} >Submit</label>
        </button>
      </div>
    </form>
  );
};

SalesContactUs.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string
};

export { SalesContactUs };
