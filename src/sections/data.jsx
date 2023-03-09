export const headline =
  "Frontend development + AI. Passionate about building products and make positive impacts on society.";

export const info = {
  contact: [
    {
      icon: <i className="ri-global-line"></i>,
      name: "lifei.tech",
      url: "https://lifei.tech",
    },
    {
      icon: <i className="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i className="ri-linkedin-box-fill"></i>,
      name: "Fei Li",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    {
      icon: <i className="ri-github-fill"></i>,
      name: "lifeitech",
      url: "https://github.com/lifeitech",
    },
  ],
  language: ["English (fluent)", "Chinese (native)", "Italian (beginner)"],
  techstack: [
    {
      icon: "ts.png",
      name: "TypeScript",
    },
    {
      icon: "js.png",
      name: "JavaScript",
    },
    {
      icon: "next.png",
      name: "Next.js",
    },
    {
      icon: "react.svg",
      name: "React",
    },
    {
      icon: "react.svg",
      name: "React Native",
    },
    {
      icon: "html.png",
      name: "HTML",
    },
    {
      icon: "css.png",
      name: "CSS",
    },
    {
      icon: "tailwind.jpg",
      name: "Tailwind",
    },
    {
      icon: "jekyll.png",
      name: "Jekyll",
    },
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "pytorch.png",
      name: "PyTorch",
    },
    {
      icon: "sql.png",
      name: "SQL",
    },
    {
      icon: "git.png",
      name: "git",
    },
  ],
};

export const projects = [
  {
    icon: "beenote.png",
    name: "BeeNote",
    link: "https://github.com/lifeitech/beenote",
    description: [
      "BeeNote is a full-stack CRUD application for taking language learning notes, built with Next.js 13 + Tailwind + DaisyUI + Tiptap + PocketBase + AWS SES. It utilizes Next.js 13's latest app directory feature for routing.",
      
      "It features user registration, email sending, audio recording, file uploading, rich text editor, dark theme support, and mobile friendliness.",

      <span>Try it now at <a className="underline" href="https://beenote.app" target="_blank">https://beenote.app</a>.</span>
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    description: [
      "Pixel Weather is a mobile app built with React Native and Expo. It can ask the user's geographic location, fetch weather data from an API for that location, and display weather data with a concise UI. Different cities and also the theme can be saved on local devices.",
    ],
  },
  {
    icon: "github.svg",
    name: "Noise Contrastive Estimation (NCE) in PyTorch",
    link: "https://github.com/lifeitech/nce",
    description: [
    "NCE is a method for estimating energy models in deep learning, by training a model to distinguish between data and noise through logistic regression.", 
  ],
  },
];

export const experience = [
  {
    icon: "transfereasy.png",
    company: "transfereasy.com",
    pos: "Data Intern",
    loc: "Beijing, China",
    time: "2018, 6 mos",
    description: [
      "Scraped officials, crimes and enterprises data from the Internet, using Python Scrapy library. Developed a named entity recognition (NER) program for extracting person names from scraped data.",
    ]
  }
]

export const education = [
  {
    icon: "bocconi.png",
    school: "Bocconi University",
    degree: "Msc. in Data Science",
    loc: "Milan, Italy",
    time: "2018 ~ 2020, 2 yrs",
    description: [
      "GPA: 110/110 cum laude",
    ],
  },
  {
    icon: "sdu.png",
    school: "Shandong University",
    degree: "BSc, Economics and Finance",
    loc: "Jinan, China",
    time: "2013 ~ 2017, 4 yrs",
    description: [" "],
  },
];
