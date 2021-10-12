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
    cloud: clouds[0],
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
    cloud: clouds[0],
  },
  {
    id: 3,
    name: "Sample proposal",
    description: "Give your users access to the perfect Adobe Stock",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/proposal_letter.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleproposal",
    docs: false,
    lastUpdated: "2002",
    cloud: clouds[0],
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
  },
  {
    id: 6,
    name: "Sample Award Letter",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_sampleawardletter",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[0],
  },
  {
    id: 7,
    name: "City Programs Sheet",
    description: "Create effects, define presets and brushes, manipu",
    icon: "https://www.adobe.io/gh-assets/img/template-icons/lms_report.jpg",
    discover: "https://www.adobe.com/go/dcdg_samplecityprogramsheet",
    docs: false,
    lastUpdated: "1999",
    cloud: clouds[0],
  },
];
module.exports = {
  clouds,
  products,
};