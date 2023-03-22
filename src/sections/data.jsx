const LANG = 'CN'  // or EN

const headlineEN = "Frontend development + AI.";

const headlineCN = "前端开发 + 数据科学";

const infoEN = {
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
  language: ["Chinese (native)", "English (fluent)", "Italian (beginner)"],
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
      icon: "vite.png",
      name: "Vite",
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

const infoCN = {
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
  language: ["中文 (母语)", "英语 (流利)", "意大利语 (入门)"],
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
      icon: "vite.png",
      name: "Vite",
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

const projectsEN = [
  {
    icon: "beenote.png",
    name: "BeeNote",
    link: "https://beenote.app",
    description: [
      "BeeNote is a full-stack CRUD application for taking language learning notes, built with Next.js 13 + Tailwind + DaisyUI + Tiptap + PocketBase + AWS SES + ChatGPT. It utilizes Next.js 13's latest app directory feature for routing.",
      
      "It features user registration, email sending, audio recording, file uploading, rich text editor, dark theme support, and mobile friendliness.",
      // <span>Try it now at <a className="underline" href="https://beenote.app" target="_blank">https://beenote.app</a>.</span>
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

const projectsCN = [
  {
    icon: "beenote.png",
    name: "BeeNote",
    link: "https://beenote.app",
    description: [
      "BeeNote是一个用来记录外语学习笔记的web app。用户注册登录后，可以创建笔记本，录音并上传音频、上传图片，保存字母、单词、语法等笔记。另外，app使用stream的方式接入了OpenAI的API，用户在富文本编辑器当中按 “Ctrl + /” 即可流畅体验ChatGPT。",
      
      "这是一个全栈CRUD应用，主框架是Next.js 13 (app directory)，CSS使用Tailwind，编辑器基于Tiptap构建，后端 (数据库+auth) 采用PocketBase，邮件发送使用AWS SES。",
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    description: [
      "Pixel Weather 是一个用 React Native 和 Expo 构建的跨平台手机应用。应用会在用户征得同意后获取用户的地理位置，从OpenWeather API获取该位置现在和未来的天气数据，并通过简洁明了的图表将数据展示给用户。用户亦可以将城市、dark theme 等设置保存在手机本地。",
    ],
  },
  {
    icon: "github.svg",
    name: "Noise Contrastive Estimation (NCE) in PyTorch",
    link: "https://github.com/lifeitech/nce",
    description: [
    "NCE是深度学习领域用来估计 energy model 参数的一个方法，其思想广泛用于word2vec、CLIP等众多模型。此方法将训练数据贴上正标签，将噪音贴上负标签，通过logistic regression进行数据和噪音的对比学习，从而将无监督学习问题转化为有监督学习问题。",
  ],
  },
];

const experienceEN = [
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

const experienceCN = [
  {
    icon: "transfereasy.png",
    company: "transfereasy.com",
    pos: "数据实习生",
    loc: "北京, 中国",
    time: "2018, 6 mos",
    description: [
      "TransferEasy是一个专注于跨境汇款和跨境支付等业务的创业公司。在本岗位中，我使用Python的Scrapy框架，从互联网爬取了大量官员履历、犯罪、企业行政处罚等数据，用于构建反洗钱数据库。另外，我基于已获取的数据，训练了一个识别中文人名的模型，以替代公司之前使用的付费API。"
    ]
  }
]

const educationEN = [
  {
    icon: "bocconi.png",
    school: "Università Bocconi",
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

const educationCN = [
  {
    icon: "bocconi.png",
    school: "博科尼大学 Università Bocconi",
    degree: "理学硕士，数据科学",
    loc: "米兰, 意大利",
    time: "2018 ~ 2020, 2 yrs",
    description: [
      "GPA: 110/110 cum laude",
    ],
  },
  {
    icon: "sdu.png",
    school: "山东大学 Shandong University",
    degree: "学士，经济与金融",
    loc: "济南, 中国",
    time: "2013 ~ 2017, 4 yrs",
    description: [" "],
  },
];

const footerEN = <div>This resume is built with Vite + React. Go to <a title="cv repository" class="underline" href="https://github.com/lifeitech/cv-react">lifeitech/cv-react</a> for source code and latest updates.</div>

const footerCN = <div>本简历基于 Vite 和 React 生成。 您可移步 <a title="cv repository" class="underline" href="https://github.com/lifeitech/cv-react">lifeitech/cv-react</a> 查看源代码与简历更新。</div>

export const headline = LANG == 'CN' ? headlineCN : headlineEN
export const info = LANG == 'CN' ? infoCN : infoEN
export const projects = LANG == 'CN' ? projectsCN : projectsEN
export const experience = LANG == 'CN' ? experienceCN : experienceEN
export const education = LANG == 'CN' ? educationCN : educationEN

export const projectTitle = LANG == 'CN' ? '相关项目' : 'Projects'
export const experienceTitle = LANG == 'CN' ? '相关经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Languages'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
export const footer = LANG == 'CN' ? footerCN : footerEN