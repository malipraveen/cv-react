const LANG = 'CN'  // or EN

const headlineEN = "Msc in Data Science from Bocconi, former analyst at Agricultural Bank of China. Domain knowledge in deep learning, web development, finance and more. Eager to build AI applications.";

const headlineCN = "数据科学硕士，农行总行两年全职工作经验，拥有深度学习、前端开发、经济金融等多个领域的知识，善于从数据中发现问题。求职方向：数据科学、AI落地应用。";

const infoEN = {
  contact: [
    {
      icon: <i className="ri-global-line"></i>,
      name: "Blog - lifei.tech",
      url: "https://lifei.tech",
    },
    {
      icon: <i className="ri-github-fill"></i>,
      name: "GitHub - lifeitech",
      url: "https://github.com/lifeitech",
    },
    {
      icon: <i className="ri-linkedin-box-fill"></i>,
      name: "LinkedIn - lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    {
      icon: <i className="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i className="ri-phone-line"></i>,
      name: "+86 18515453772",
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
      icon: <i className="ri-global-line"></i>,
      name: "个人博客：lifei.tech",
      url: "https://lifei.tech",
    },
    {
      icon: <i className="ri-github-fill"></i>,
      name: "GitHub：lifeitech",
      url: "https://github.com/lifeitech",
    },
    {
      icon: <i className="ri-linkedin-box-fill"></i>,
      name: "领英：lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    {
      icon: <i className="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i className="ri-phone-line"></i>,
      name: "+86 18515453772",
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

const projectsEN = [
  {
    icon: "beenote.png",
    name: "BeeNote",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:15, fork:4},
    description: [
      "BeeNote is a full-stack CRUD AI application for taking language learning notes, built with Next.js 13 + Tailwind + PocketBase + AWS SES + ChatGPT, deployed on Vercel and fly.io. Users can ask AI for explaining words and grammars, edit notes and save their notes on the server.",
      // <span>Try it now at <a className="underline" href="https://beenote.app" target="_blank">https://beenote.app</a>.</span>
    ],
  },
  // {
  //   icon: "pixel-weather.png",
  //   name: "Pixel Weather",
  //   link: "https://github.com/lifeitech/pixel-weather",
  //   year: 2022,
  //   metric: {star:1, fork:1},
  //   description: [
  //     "Pixel Weather is a mobile app built with React Native and Expo. It can ask the user's geographic location, fetch weather data from an API for that location, and display weather data with a concise UI. Different cities and also the theme can be saved on local devices.",
  //   ],
  // },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:18, fork:3},
    description: [
    "Noise Contrastive Estimation (NCE) is a method for estimating energy models in deep learning, by training a model to distinguish between data and noise through logistic regression.", 
  ],
  },
];

const projectsCN = [
  {
    icon: "beenote.png",
    name: "BeeNote",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:15, fork:4},
    description: [
      "BeeNote 是一个用来记录外语学习笔记的全栈web应用。用户注册登录后，可以创建笔记本，保存字母、单词、语法等笔记。技术栈采用 Next.js 13 + TailwindCSS + PocketBase + AWS。本应用使用stream的方式接入了OpenAI的API，用户可利用ChatGPT极大提升外语学习的效率。",
      "已获得来自30多个国家用户的访问，用户数量正不断增长。"
    ],
  },
  // {
  //   icon: "pixel-weather.png",
  //   name: "Pixel Weather",
  //   link: "https://github.com/lifeitech/pixel-weather",
  //   year: 2022,
  //   metric: {star:1, fork:1},
  //   description: [
  //     "Pixel Weather 是一个用 React Native 和 Expo 构建的跨平台手机应用。应用会在用户征得同意后获取用户的地理位置，从OpenWeather API获取该位置现在和未来的天气数据，并通过简洁明了的图表将数据展示给用户。用户亦可以将城市、主题色等设置保存在手机本地。",
  //   ],
  // },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:18, fork:3},
    description: [
    "Noise Contrastive Estimation (NCE) 是深度学习领域用来估计energy model参数的一个方法，其思想广泛用于word2vec、CLIP等众多模型。此方法将训练数据贴上正标签，将噪音贴上负标签，通过logistic regression进行数据和噪音的对比学习，从而将无监督学习问题转化为有监督学习问题。",
  ],
  },
];

const experienceEN = [
  {
    icon: "pingan.jpeg",
    company: "Ping An Technology",
    pos: "Product Manager Intern",
    loc: "Shenzhen, China",
    time: "2021, 2 mos",
    description: [
      "We offer our clients machine translation service for translating Chinese financial reports into English. We have a platform that lets outsourced workers manually verify and correct model outputs. By observing user data, I discovered that quite often workers resort to external services like Google Translate for their job. I proposed a way to detect such behavior."
    ]
  },
  {
    icon: "transfereasy.png",
    company: "TransferEasy",
    pos: "Data Intern",
    loc: "Beijing, China",
    time: "2018, 6 mos",
    description: [
      "Utilizing the Python Scrapy library, I scraped massive government officials, crimes and enterprises data from the Internet, for building an anti-money laundering database product. I also developed a named entity recognition (NER) program for extracting Chinese names from scraped data.",
    ]
  },
  {
    icon: "harvard.png",
    company: "Harvard University",
    pos: "Research Assistant",
    loc: "Boston, USA",
    time: "2017, 4 mos",
    description: [
      "Worked in a team to digitalize economic data from 2,000+ Chinese county gazetteers at Harvard Yenching Library. Used OCR software to convert tables on papers into spreadsheets, and performed data cleaning, merge, and analysis with Python."
    ]
  },
]

const experienceCN = [
  {
    icon: "pingan.jpeg",
    company: "平安科技 Ping An Technology",
    pos: "产品经理实习",
    loc: "深圳, 中国",
    time: "2021, 2个月",
    description: [
      "平安资管需要将国内上市公司财务报告等大量金融专业文档翻译成英文供国际投资者参考。我负责供数据标注人员使用的机器翻译校对平台产品，通过观察数据，成功发现了用户直接使用百度翻译等工具作弊的行为，并提出了解决方案。"
    ]
  },
  {
    icon: "transfereasy.png",
    company: "银通易汇 TransferEasy",
    pos: "数据实习生",
    loc: "北京, 中国",
    time: "2018, 6个月",
    description: [
      "TransferEasy是一个从事跨境汇款业务的互联网创业公司。我使用Scrapy框架，从互联网爬取了数万条官员履历、犯罪、企业行政处罚等数据，用于构建反洗钱数据库。另外，基于已获取的数据，训练了一个识别中文人名的模型，以替代公司之前使用的付费API。"
    ]
  },
  {
    icon: "harvard.png",
    company: "哈佛大学 Harvard University",
    pos: "研究助理",
    loc: "波士顿，美国",
    time: "2017, 4个月",
    description: [
      "将哈佛大学燕京图书馆馆藏两千多本中国县志中的经济数据电子化。使用OCR软件将纸张上的图表转换成电子表格，使用Python进行数据清洗、整合。"
    ]
  },
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
      "Research: Generative Learning"
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
      "GPA: 110/110 cum laude",
      "研究方向：生成学习"
    ],
  },
  {
    icon: "sdu.png",
    school: "山东大学 Shandong University",
    degree: "学士，经济与金融",
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

export const projectTitle = LANG == 'CN' ? '相关项目' : 'Projects'
export const experienceTitle = LANG == 'CN' ? '相关经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Languages'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
export const footer = LANG == 'CN' ? footerCN : footerEN