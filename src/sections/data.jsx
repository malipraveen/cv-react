const LANG = 'EN'  // EN, CN

const headlineEN = "Senior Data Scientist @ ElectrifAi, working on LLMs and AI applications. Obtained my Msc degree in Data Science from Università Bocconi in Italy."

const headlineCN = "AI从业人员，在企业级AI应用领域有丰富的实践经验。知识技能涵盖深度学习、前后端开发等众多领域，英语听说读写流利。数据科学与经济金融复合教育背景。求职方向：AI落地应用、数据科学。"

const infoEN = {
  contact: [
    {
      icon: <i class="ri-global-line"></i>,
      name: "Website - lifei.tech",
      url: "https://lifei.tech",
    },
    {
      icon: <i class="ri-github-fill"></i>,
      name: "GitHub - lifeitech",
      url: "https://github.com/lifeitech",
    },
    {
      icon: <i class="ri-linkedin-box-fill"></i>,
      name: "LinkedIn - lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    // {
    //   icon: <i class="ri-twitter-x-line"></i>,
    //   name: "X - lifeitech",
    //   url: "https://twitter.com/lifeitech",
    // },
    {
      icon: <i class="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i class="ri-phone-line"></i>,
      name: "+86 19921834895",
      url: "",
    },
  ],
  language: ["Chinese (native)", "English (fluent)", "Italian (beginner)", "Japanese (beginner)"],
  techstack: [
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "pytorch.png",
      name: "PyTorch",
    },
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
      icon: "hugo.png",
      name: "Hugo",
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
      icon: <i class="ri-global-line"></i>,
      name: "个人网站：lifei.tech",
      url: "https://lifei.tech",
    },
    {
      icon: <i class="ri-github-fill"></i>,
      name: "GitHub：lifeitech",
      url: "https://github.com/lifeitech",
    },
    {
      icon: <i class="ri-linkedin-box-fill"></i>,
      name: "领英：lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    // {
    //   icon: <i class="ri-twitter-x-line"></i>,
    //   name: "推特：lifeitech",
    //   url: "https://twitter.com/lifeitech",
    // },
    {
      icon: <i class="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i class="ri-phone-line"></i>,
      name: "+86 19921834895",
      url: "",
    },
  ],
  language: ["中文 (母语)", "英语 (流利)", "意大利语 (入门)", "日语（入门）"],
  techstack: [
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "pytorch.png",
      name: "PyTorch",
    },
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
      icon: "hugo.png",
      name: "Hugo",
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
      icon: "sql.png",
      name: "SQL",
    },
    {
      icon: "git.png",
      name: "git",
    },
  ],
};

const experienceEN = [
  {
    icon: "electrifai.png",
    company: "ElectrifAi",
    pos: "Senior Data Scientist",
    loc: "Shanghai, China",
    time: "2023.07 - now",
    description: [
      "[AI Contract Review] A large bidding agency generates thousands of construction contracts each month that need to be reviewed. I lead a team to develope an end-to-end solution with open source LLMs to automate such task. Long context length (100K+ tokens), diverse formats and uncommon data distribution all post challenges. We designed engineering pipeline and novel fine-tuning methods to address such challenges and to address LLM hallucination and instability. I provide guidance and support for team members to ensure timely delivery.",

      "[Alumni Engagement] An US school wants to boost alumni giving rate. I analyzed their alumni data, segmented the alumni into several groups and proposed campaign strategies for each group."
    ]
  },
  {
    icon: "diamond.jpeg",
    company: "Past experience",
    pos: "Analyst @ Agricultural Bank of China HQ (2021.05-2022.06) · Product manager intern @ Ping An Technology (2021.12-2022.01) · Data dev. intern @ TransferEasy (2018.01-2018.06) · Research assistant @ Harvard (2027.08-2017.12)",
    loc: "",
    time: "",
    description: [
      ""
    ]
  },
]

const experienceCN = [
  {
    icon: "electrifai.png",
    company: "奥浦诺 ElectrifAi",
    pos: "高级数据科学家",
    loc: "上海, 中国",
    time: "2023.07至今",
    description: [
      "[某招标集团AI合同审核项目]",
      "1. 隐私和可控性是许多企业客户应用LLM时考虑的首要因素。从选购GPU服务器、部署开源模型到上线端到端全栈应用，我为客户提供完整的本地化部署大语言模型应用服务，用于工程建设合同的审核。文本长（10+万字）、格式繁杂、专业性强，都对LLM提出了挑战。我通过大量的工程及微调训练，有效解决大语言模型逻辑推理能力差、生成结果不稳定等问题。",
      "2. 给团队其他成员提供技术指导，带领团队按时完成交付。",
      "[某美国大学校友捐赠项目]",
      "某美国大学拟提升其校友捐赠率。我指导数据工程团队爬取领英、脸书等社交媒体数据，丰富数据维度。通过分析校友数据库当中的校友数据，识别出最有捐赠潜力和捐赠意愿的人群，按人群的segmentation提出校友捐赠活动策略建议，设计和开发校友分析和运营系统，最终提升校友捐赠率。"
    ]
  },
  {
    icon: "diamond.jpeg",
    company: "其他经历",
    pos: "分析师@农总行 (2021.05-2022.06) · 产品经理实习@平安科技 (2021.12-2022.01) · 数据开发实习@TransferEasy (2018.01-2018.06) · 研究助理@哈佛大学 (2027.08-2017.12)",
    loc: "",
    time: "",
    description: [
      ""
    ]
  },
]

const projectsEN = [
  {
    icon: "global.svg",
    name: "Blog: lifei.tech",
    link: "https://lifei.tech",
    year: 2023,
    description: [
      "Technical blog on AI & ML, data science, full stack development and other subjects. "
    ],
  },
  {
    icon: "beenote.png",
    name: "beenote.app",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:22, fork:4},
    description: [
      "Full-stack CRUD AI application for taking language learning notes, built with Next.js 13 + Tailwind + PocketBase + AWS SES + ChatGPT, deployed on Vercel and fly.io. Users can ask AI for explaining words and grammars, edit notes and save their notes on the server."
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    year: 2022,
    metric: {star:2, fork:1},
    description: [
      "Mobile app for checking weathers developed with React Native.",
    ],
  },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:21, fork:3},
    description: [
    "PyTorch implementation of Noise Contrastive Estimation (NCE).",
  ],
  },
];

const projectsCN = [
  {
    icon: "global.svg",
    name: "个人博客 lifei.tech",
    link: "https://lifei.tech",
    year: 2023,
    description: [
      "专注深度学习、编程等领域的英文原创技术博客，如深入解读Llama源代码、详解GPT系列模型原理。"
    ],
  },
  {
    icon: "beenote.png",
    name: "beenote.app",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:22, fork:4},
    description: [
      "记录外语学习笔记的全栈AI应用，采用tiptap开发文本编辑器，调用OpenAI的API提供听说读写AI助理。技术栈采用 Next.js 13 + TailwindCSS + PocketBase + AWS。"
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    year: 2022,
    metric: {star:2, fork:1},
    description: [
      "用React Native开发的跨平台手机App，用于获知天气信息。",
    ],
  },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:21, fork:3},
    description: [
    "噪音对比估计 (Noise Contrastive Estimation, NCE) 的PyTorch实现。",
  ],
  },
];

const educationEN = [
  {
    icon: "bocconi.png",
    school: "Università Bocconi",
    degree: "Msc. in Data Science",
    loc: "Milan, Italy",
    time: "2018 ~ 2020, 2 yrs",
    description: [
      "GPA: 110/110 cum laude",
      "Research direction: Image generation"
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
    loc: "米兰，意大利",
    time: "2018 ~ 2020, 两年",
    description: [
      "GPA: 110/110 cum laude. 研究方向：图像生成"
    ],
  },
  {
    icon: "sdu.png",
    school: "山东大学 Shandong University",
    degree: "经济学学士，经济与金融国际化实验班",
    loc: "济南, 中国",
    time: "2013 ~ 2017, 四年",
    description: [" "],
  },
];

const footerEN = <div>This resume is built with Vite + React. Go to <a title="cv repository" class="underline" href="https://github.com/lifeitech/cv-react">lifeitech/cv-react</a> for source code and latest updates.</div>

const footerCN = <div>本简历基于 Vite 和 React 生成。 您可点击 <a title="cv repository" class="underline" href="https://github.com/lifeitech/cv-react">lifeitech/cv-react</a> 查看源代码与简历更新。</div>

export const headline = LANG == 'CN' ? headlineCN : headlineEN
export const info = LANG == 'CN' ? infoCN : infoEN
export const projects = LANG == 'CN' ? projectsCN : projectsEN
export const experience = LANG == 'CN' ? experienceCN : experienceEN
export const education = LANG == 'CN' ? educationCN : educationEN

export const projectTitle = LANG == 'CN' ? '开源项目' : 'Open-source Projects'
export const experienceTitle = LANG == 'CN' ? '职业经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Languages'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
export const footer = LANG == 'CN' ? footerCN : footerEN