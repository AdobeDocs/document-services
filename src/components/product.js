const clouds = ["Agreements and Contracts", "Content Publishing", "Financial"];

// Important: lastUpdated date should be unique to ensure stable sort across browsers
const products = [
  {
    id: 0,
    name: "Agreement",
    description: "Adobe Creative Cloud APIs and SDKs enable developers",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/agreement.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleagreement",
    docs: false,
    lastUpdated: "2020",
    cloud: clouds[0],
  },
  {
    id: 1,
    name: "Grant application",
    description:
      "The Libraries API lets you connect your app to Creative Cloud and expand the reach of your users' creative systems.",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/grant_application.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplegrant",
    docs: false,
    lastUpdated: "2019",
    cloud: clouds[2],
  },
  {
    id: 2,
    name: "Invoice",
    description:
      "Adobe XD’s powerful API platform lets developers and users extend XD within the app, or in the cloud.",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/invoice.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleinvoice",
    docs: false,
    lastUpdated: "2017",
    cloud: clouds[2],
  },
  {
    id: 3,
    name: "Sample proposal",
    description: "Give your users access to the perfect Adobe Stock",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/proposal_letter.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleproposal",
    docs: false,
    lastUpdated: "2002",
    cloud: clouds[2],
  },
  {
    id: 4,
    name: "Certification report",
    description:
      "With Photoshop APIs and SDKs, build plugins and integrations that harness the power of the world's best image editing",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/offer_letter.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },

  {
    id: 5,
    name: "Offer Letter",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleofferletter",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[0],
  },
  {
    id: 6,
    name: "Sample Award Letter",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleawardletter",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[1],
  },
  {
    id: 7,
    name: "City Programs Sheet",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplecityprogramsheet",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[1],
  },
  {
    id: 8,
    name: "LMS Certificate",
    description:"LMS Certificate",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_certificate.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 9,
    name: "Sample Annual Report",
    description:"Sample Annual Report",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/annual_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 10,
    name: "Employee Handbook",
    description:"Sample Annual Report",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/employee_handbook.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 10,
    name: "Remote Work",
    description:"Sample Annual Report",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/employee_remote.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 11,
    name: "Marketing Data Sheet",
    description:"Marketing Data Sheet",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/marketing_sheet.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 12,
    name: "Project Status Report",
    description:"Project Status Report",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/marketing_sheet.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 12,
    name: "Welcome Kit",
    description:"Welcome Kit",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/welcome_kit.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[1],
  },
  {
    id: 13,
    name: "Receipt",
    description:"Receipt",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/service_receipt.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[2],
  },
  {
    id: 14,
    name: "Sales Order",
    description:"Sales Order",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/sales_order.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[2],
  },
  {
    id: 15,
    name: "Investment Proposal Letter",
    description:"Investment Proposal Letter",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/sales_order.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[2],
  },
  {
    id: 16,
    name: "Mortgage Proposal",
    description:"Investment Proposal Letter",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/mortgage_proposal.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[2],
  },
  {
    id: 17,
    name: "Purchase Order",
    description:"Investment Proposal Letter",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/purchase_order.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[2],
  },
];

const sampleProducts = [
  {
    id: 0,
    name: "Agreement",
    description: "Adobe Creative Cloud APIs and SDKs enable developers",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/agreement.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleagreement",
    docs: false,
    lastUpdated: "2020",
    cloud: clouds[0],
  },
  {
    id: 1,
    name: "Grant application",
    description:
      "The Libraries API lets you connect your app to Creative Cloud and expand the reach of your users' creative systems.",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/grant_application.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplegrant",
    docs: false,
    lastUpdated: "2019",
    cloud: clouds[2],
  },
  {
    id: 2,
    name: "Invoice",
    description:
      "Adobe XD’s powerful API platform lets developers and users extend XD within the app, or in the cloud.",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/invoice.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleinvoice",
    docs: false,
    lastUpdated: "2017",
    cloud: clouds[2],
  },
  {
    id: 3,
    name: "Sample proposal",
    description: "Give your users access to the perfect Adobe Stock",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/proposal_letter.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleproposal",
    docs: false,
    lastUpdated: "2002",
    cloud: clouds[2],
  },
  {
    id: 4,
    name: "Certification report",
    description:
      "With Photoshop APIs and SDKs, build plugins and integrations that harness the power of the world's best image editing",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/offer_letter.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplereport",
    docs: false,
    lastUpdated: "2018",
    cloud: clouds[0],
  },
  {
    id: 5,
    name: "Offer Letter",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleofferletter",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[0],
  }
];

module.exports = {
  clouds,
  products,
  sampleProducts
};