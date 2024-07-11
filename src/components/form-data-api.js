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

const FormDataAPI = ({ }) => {
  const [errorMsg, seterrorMsg] = useState({});
  const [formValue, setFormValue] = useState({});
  const [btnDisable, setBtnDisable] = useState(false)

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

  const onSubmit = async e => {
    e.preventDefault();
    setBtnDisable(true)

    let randomString = _times(16, () =>
      ((Math.random() * 0xf) << 0).toString(16)
    ).join("");
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var blacklist = /\b(death|kill|murder)\b/;
    var checkBlackWords;
    let error = {};

    if (_isEmpty(formValue?.firstName)) {
      error.firstName = "Required *";
      setBtnDisable(false)
    } else if (blacklist.test(formValue.firstName)) {
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
      !_isEmpty(formValue?.job_title) &&
      !blacklist.test(formValue?.job_title) &&
      !_isEmpty(formValue?.region) &&
      !_isEmpty(formValue?.expected_monthly_volume) &&
      !checkBlackWords &&
      formValue?.checkbox == true
    ) {
      let pdfElectronicSealAPIData = {
        ...formValue,
        formType: "pdfServices",
        formId: randomString
      };
      try {
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pdfElectronicSealAPIData)
        };
        const resp = await fetch(
          `https://927029-dcpm-stage.adobeioruntime.net/api/v1/web/default/submitstage`,
          config
        );
        const response = await resp.json();
        if (resp.status === 200) {
          setFormValue({
            firstName: "",
            lastName: "",
            where_did_you_hear_about_us: false,
            need_test_certificate: false,
            checkbox: false
          });
          alert(
            "Thank you! Your information has been successfully submitted."
          );
          setBtnDisable(false)
        }
      } catch (err) {
        console.log("err", err);
      }
    }
  };
  return (
    <form className="form-container Form-Data-API" id="my_form">
      <div className="head-container-accessibility">
        <div className="caption">
          Request access to the Beta Program
        </div>
        <div className="faq-text">
          For technical inquiries, submit a tech support request{" "}
          <a className="link-content" href="https://developer.adobe.com/document-services/pricing/contact/support/">
            here.
          </a>
        </div>
      </div>
      <div className="field-container-accessibility">
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
      <div className="field-container-accessibility">
        <InputField
          id="business_email"
          label="Business Email"
          type="text"
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
      <div className="field-container-accessibility">
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
      <div className="field-container-accessibility">
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
      <div className="content-container-accessibility">
        <div className="checkbox-container">
          <CheckBoxField
            className={`input-checkbox ${errorMsg.checkbox === "Required *" ? "required-checkbox" : ""
              }`}
            id="checkbox"
            name="checkbox"
            onChange={e => onChange(e)}
            value={formValue?.checkbox}
            checked={formValue?.checkbox}
          />
        </div>
        <div className="text-content checkbox-text-container">
          The{" "}
          <a href="https://www.adobe.com/privacy/policy.html" className="link-content">
            Adobe family of companies
          </a>{" "}
          would like to keep you informed about Acrobat Services APIs, which may include contacting you via email. By checking this box, you agree to being contacted via email. Please see our{" "}
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
      <div className="content-container-accessibility text-content">
        <div>
          By clicking Submit, I agree that I have read and accepted the{" "}
          <a
            target="_blank"
            href="https://www.adobe.com/content/dam/cc/en/legal/documents/Prerelease-Software-License-Agreement_20240619-ImportExport-APIs.pdf"
            className="link-content"
          >
            License Agreement for Prerelease Software, Import/Export PDF Form Data API Beta
          </a>
          .
        </div>
      </div>
      <div className="button-container">
        <button className={btnDisable ? "btn-disable button-content" : "button-content"} disabled={btnDisable} onClick={onSubmit} type="submit">
          <label className={btnDisable ? "btn-cursor button-label" : "button-label"}>Submit</label>
        </button>
      </div>
    </form>
  );
};

FormDataAPI.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string
};

export { FormDataAPI };
