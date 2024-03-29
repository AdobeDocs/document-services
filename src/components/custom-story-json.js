const baseUrl = '/document-services';
const clouds = [
    'Customer-Stories',
];
const products=[
    {
        id: 0,
        name: "Adobe",
        description: "Agreement Experience is projected to save deal desk and sales attorneys 36,000 hours annually on contracts.",
        icon: `${baseUrl}/img/custom-stories-icon/AE_story.png`,
        discover: `${baseUrl}/img/custom-story-docs/AdobeExpCloudStory.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 1,
        name: "Epson",
        description: "Epson supports distributed workforces with fast and highly secure printing powered by Adobe.",
        icon: `${baseUrl}/img/custom-stories-icon/epson.png`,
        discover: `${baseUrl}/img/custom-story-docs/Epson-story-PDF.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 2,
        name: "MTEC",
        description: "MTEC uses Adobe PDF Extract API to improve speed and accuracy of automatic text extraction from financial data PDF files.",
        icon: `${baseUrl}/img/custom-stories-icon/mtec.png`,
        discover: `${baseUrl}/img/custom-story-docs/mtec-story.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 3,
        name: "K2 Nintexfd",
        description: "Nintex transforms K2 Cloud workflows with Adobe Acrobat Services APIs.",
        icon: `${baseUrl}/img/custom-stories-icon/K2Nintex.png`,
        discover: `${baseUrl}/img/custom-story-docs/K2Nintex.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 4,
        name: "Adobe InDesign",
        description: "Adobe InDesign brings its new share for review features to life with Adobe Acrobat Services APIs.",
        icon: `${baseUrl}/img/custom-stories-icon/AdobeInDesign.png`,
        discover: `${baseUrl}/img/custom-story-docs/AdobeInDesign.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 5,
        name: "Cambridge Assessment",
        description: "Adobe InDesign brings its new share for review features to life with Adobe Acrobat Services APIs.",
        icon: `${baseUrl}/img/custom-stories-icon/Cambridge-Assessment.jpeg`,
        discover: `${baseUrl}/img/custom-story-docs/Cambridge-Assessment.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 6,
        name: "Evisort",
        description: "Evisort uses Adobe PDF Extract API to bring visibility and intelligence to contracts.",
        icon: `${baseUrl}/img/custom-stories-icon/Evisort.jpeg`,
        discover: `${baseUrl}/img/custom-story-docs/Evisort.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 7,
        name: "Waymark",
        description: "Waymark Tech enables rapid impact assessments and compliance workflows with Adobe PDF Extract API.",
        icon: `${baseUrl}/img/custom-stories-icon/Waymark.jpg`,
        discover: `${baseUrl}/img/custom-story-docs/Waymark-Story.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 8,
        name: "AI Singapore (AISG)",
        description: "AI Singapore accelerates deep learning models with Adobe PDF Extract API.",
        icon: `${baseUrl}/img/custom-stories-icon/AISingapore.png`,
        discover: `${baseUrl}/img/custom-story-docs/AI-Singapore-Story.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    },
    {
        id: 9,
        name: "AFTIA",
        description: "AFTIA helps a multinational financial services company better serve clients by accelerating client onboarding with Adobe apps and APIs.",
        icon: `${baseUrl}/img/custom-stories-icon/aftia.png`,
        discover: `${baseUrl}/img/custom-story-docs/aftia-story.pdf`,
        docs: false,
        lastUpdated: "2020",
        cloud: clouds[0],
    }
]

module.exports = { products, clouds}
