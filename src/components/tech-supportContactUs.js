// import classNames from "classnames";
// import { css } from "@emotion/react";
// import "@spectrum-css/typography";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputField from './formComponent/InputField'
import SelectField from "./formComponent/SelectField";
import CheckBoxField from "./formComponent/CheckBoxField";
import _isEmpty from 'lodash/isEmpty'
import jsonData from "./tech-support-dropdown-data.json"

const expertiseOptions = [
    {
        key: 1,
        label: "I am just trialing the product"
    },
    {
        key: 2,
        label: "I am a current customer"
    },
]

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
    },
]

const TechSupportContactUs = ({

}) => {
    const [errorMsg, seterrorMsg] = useState({});
    const [formValue, setFormValue] = useState({})
    const [dynamicFaqLink, setDynamicFaqLink] = useState("FAQ Article:Integration:Setting up your CID Key in 3 easy steps.")
    const [subIssueTypeOptions, setSubIssueTypeOptions] = useState()

    useEffect(() => {
        const Options = jsonData.category.filter((category) => { return category.category_name === formValue.issue_type }).map((filtered_category) => (filtered_category.questions.map((question, index) => { return { label: question.qst, key: index } })))
        setSubIssueTypeOptions(...Options)
    }, [formValue.issue_type])

    useEffect(() => {
        if (formValue.issue_type && formValue.issue_sub_type) {
            let linkcontent = `https://www.adobe.com/${formValue.issue_type}/${formValue.issue_sub_type}`
            setDynamicFaqLink(linkcontent)
        }
    }, [formValue.issue_type, formValue.issue_sub_type])

    const onChnage = (e) => {
        if (e.target.id === "firstName") { setFormValue({ ...formValue, firstName: e.target.value }) }
        if (e.target.id === "lastName") { setFormValue({ ...formValue, lastName: e.target.value }) }
        if (e.target.id === "business_email") { setFormValue({ ...formValue, business_email: e.target.value }) }
        if (e.target.id === "company_website") { setFormValue({ ...formValue, company_website: e.target.value }) }
        if (e.target.id === "phone") { setFormValue({ ...formValue, phone: e.target.value }) }
        if (e.target.id === "expertise") { setFormValue({ ...formValue, expertise: e.target.value }) }
        if (e.target.id === "issue_type") { setFormValue({ ...formValue, issue_type: e.target.value }) }
        if (e.target.id === "issue_sub_type") { setFormValue({ ...formValue, issue_sub_type: e.target.value }) }
        if (e.target.id === "issue") { setFormValue({ ...formValue, issue: e.target.value }) }
        if (e.target.id === "checkbox") { setFormValue({ ...formValue, checkbox: e.target.checked }) }
    }

    const onSubmit = () => {
        let error = {};
        if (_isEmpty(formValue?.firstName)) { error.firstName = "Required *" } else { error.firstName = "" }
        if (_isEmpty(formValue?.lastName)) { error.lastName = "Required *" } else { error.lastName = "" }
        if (_isEmpty(formValue?.business_email)) { error.business_email = "Required *" } else { error.business_email = "" }
        if (_isEmpty(formValue?.company_website)) { error.company_website = "Required *" } else { error.company_website = "" }
        if (_isEmpty(formValue?.phone)) { error.phone = "Required *" } else { error.phone = "" }
        if (_isEmpty(formValue?.expertise)) { error.expertise = "Required *" } else { error.expertise = "" }
        if (_isEmpty(formValue?.issue_type)) { error.issue_type = "Required *" } else { error.issue_type = "" }
        if (_isEmpty(formValue?.issue_sub_type)) { error.issue_sub_type = "Required *" } else { error.issue_sub_type = "" }
        if (_isEmpty(formValue?.issue)) { error.issue = "Required *" } else { error.issue = "" }
        if (formValue?.checkbox !== true) { error.checkbox = "Required *" } else { error.checkbox = "" }
        seterrorMsg({ ...error })
        if (!_isEmpty(formValue?.firstName) && !_isEmpty(formValue?.lastName) && !_isEmpty(formValue?.business_email) && !_isEmpty(formValue?.company_website) && !_isEmpty(formValue?.phone) && !_isEmpty(formValue?.expertise) && !_isEmpty(formValue?.issue_type) && !_isEmpty(formValue?.issue_sub_type) && !_isEmpty(formValue?.issue) && formValue?.checkbox == true) {
            alert("Thanks for your Submit")
        }
    }

    return (
        <>
            <form className="form-container Tech-Support-Form" name="Tech-Support-Form">
                <div className="head-container">
                    <div className="caption">Get tech support.</div>
                    <div className="faq-text">Please fill out the form below and an Adobe Expert will contact you within 3 business days.</div>
                    <div className="faq-text">To get faster issue resolution, please visit our FAQ istead. <button className="faq-button-content" onClick={() => (window.location.href = "/faq/tech-support/#account-management")}><label className="button-label">FAQ</label></button></div>
                    <div className="faq-text">For sales inquiries, submit a sales consultation request <a className="link-content" href="">here.</a></div>
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
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
                        errorMsg={errorMsg.company_website}
                    />
                </div>
                <div className="field-container">
                    <InputField
                        id="phone"
                        name="phone"
                        label="Phone"
                        type="text"
                        maxLength="50"
                        className="lnput-field"
                        labelClassName="lable-content text-content"
                        value={formValue?.phone}
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
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
                        onChange={(e) => onChnage(e)}
                        errorMsg={errorMsg.issue_sub_type}
                    />
                </div>
                <div className="summary-area-content text-content">
                    <div className="summary-container">
                        <div className="caption">In a hurry?</div>
                        <div className="faq-text">Get answers within minutes using the dynamic FAQ link below:</div>
                        <div className="faq-text"><b><a href="" className="link-content">{dynamicFaqLink}</a></b></div>
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
                    onChange={(e) => onChnage(e)}
                    errorMsg={errorMsg.issue}
                />
                <div className="content-container">
                    <div className="checkbox-container">
                        <CheckBoxField errorMsg={errorMsg.checkbox} className={`input-checkbox ${errorMsg.checkbox === "Required *" ? "required-checkbox" : ""}`} id="checkbox" name="checkbox" onChange={(e) => onChnage(e)} checked={formValue.checkbox} />
                    </div>
                    <div className="text-content checkbox-text-container">The <a href="https://www.adobe.com/privacy.html" className="link-content">Adobe family of companies</a> would like to keep you informed about Document Services APIs, which may include contacting you via email. By checking this box, you agree to being contacted via email. Please see our <a target="_blank" href="https://www.adobe.com/privacy.html" className="link-content">Privacy Policy</a> for more details.</div>
                </div>
                <div className="content-container text-content">
                    <div>By clicking Submit, I agree that I have read and accepted the <a target="_blank" href="https://www.adobe.com/legal/terms.html" className="link-content">Terms of Use.</a></div>
                </div>
                <div className="button-container">
                    <button className="button-content" onClick={onSubmit} type="submit"><label className="button-label">Submit</label></button>
                </div>
            </form>
        </>
    )
}

TechSupportContactUs.propTypes = {
    theme: PropTypes.string,
    content: PropTypes.string,
};

export { TechSupportContactUs };
