/* ------------------------------------------------------------------
   All site content lives here. Edit this file, never the components.
   ------------------------------------------------------------------ */

export const profile = {
  name: "Hiya Arora",
  location: "Gurugram, India",
  // Hero rotation (Ojasv-style typewriter)
  roles: ["Software Developer", "AI/ML Engineer", "Full Stack Developer", "Problem Solver"],
  tagline: "Building intelligent systems where AI meets software engineering.",
  // hero chips - the at-a-glance "what I actually do"
  heroChips: ["Generative AI", "RAG", "LLMs", "AI Agents", "FastAPI", "Python"],
  email: "hiyaarora08@gmail.com",
  phone: "+91 9466326125",
  linkedin: "https://linkedin.com/in/hiya-arora-5a0918288",
  github: "https://github.com/Hiyaarora",
  resumeFile: "/Hiya_Arora_Resume.pdf",
  availability: "Open to AI/ML and backend engineering roles",
};

export const about = {
  greeting: "Hello! I'm Hiya.",
  paragraphs: [
    "I'm a Software Engineer and AI/ML enthusiast who likes learning by building. What started as an interest in software gradually led me to machine learning, deep learning, and now the world of LLMs and agentic AI.",
    "I enjoy taking ideas apart, understanding what happens underneath, and turning what I learn into something that actually works. These days, I'm focused on building practical AI systems and exploring where intelligent models can be taken beyond just generating an answer.",
  ],
  bringTitle: "What I bring to the table:",
  brings: [
    "Curiosity and a habit of learning by doing",
    "Strong problem-solving and analytical thinking",
    "A practical approach to building AI systems",
    "Consistency in learning and improving",
  ],
};

export const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "Maharaja Agrasen Institute of Technology (GGSIPU Affiliated)",
    place: "New Delhi, India",
    period: "2022 – 2026",
    score: "CGPA: 8.05",
  },
  {
    degree: "Class XII",
    school: "Sant Mohan Singh Public School",
    place: "Ambala, India",
    period: "2020 – 2021",
    score: "Percentage: 95%",
  },
];

/* icon: key into the ICONS map in Sections.tsx */
export const skills: { group: string; icon: string; items: string[] }[] = [
  {
    group: "AI / ML",
    icon: "brain",
    items: [
      "Machine Learning", "Deep Learning", "NLP", "Transformers", "LLMs",
      "Generative AI", "AI Agents", "Multi-Agent Systems", "RAG",
      "Prompt Engineering", "Embeddings", "LangChain", "TensorFlow", "Keras",
      "Scikit-learn", "NumPy", "Pandas", "Neural Networks", "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    group: "Backend",
    icon: "server",
    items: [
      "FastAPI", "REST APIs", "API Integration", "Python Backend Development",
      "SQLAlchemy", "Pydantic", "JWT Authentication", "OAuth",
    ],
  },
  {
    group: "Frontend",
    icon: "layout",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Streamlit"],
  },
  {
    group: "Languages",
    icon: "code",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    group: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "DBMS", "Vector Databases", "ChromaDB"],
  },
  {
    group: "Tools & Cloud",
    icon: "tools",
    items: [
      "Git", "GitHub", "Docker", "AWS", "Jupyter Notebook", "VS Code",
      "Tavily", "BeautifulSoup", "pytest", "Playwright", "Jenkins", "Jira",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Salescode.ai",
    place: "Gurugram, India",
    period: "Sept 2025 - Present",
    current: true,
    achievements: [
      "Backend & API Workflows: Worked with Python, SQL, REST APIs, and application integrations across a multi-application platform, resolving 100+ production issues per release.",
      "Automation & CI/CD: Engineered Python automation and Jenkins-scheduled CI workflows, raising automation coverage from 30% to 90% across client deployments with 500+ automated checks.",
      "SCAI Agent Workflows: Evaluated AI agent workflows handling 1000+ daily voice interactions for FMCG clients including Coca-Cola, ITC, and P&G, focusing on accuracy and reliability.",
      "RAG Infrastructure: Worked on RAG pipelines using embedding models and PGVector for context-aware, low-latency AI responses.",
    ],
    tech: ["Python", "SQL", "REST APIs", "Jenkins", "CI/CD", "RAG", "PGVector", "Embeddings"],
  },
  {
    role: "Research Intern",
    company: "DRDO (SAG)",
    place: "New Delhi, India",
    period: "June 2024 - Aug 2024",
    current: false,
    achievements: [
      "AI/ML Research: Studied Artificial Neural Networks (ANNs) for multi-class image classification, implementing digit recognition on the MNIST dataset with preprocessing and normalization.",
      "Deep Learning Research: Worked on Convolutional Neural Networks (CNNs) for image classification, studying convolution, pooling, batch-based training, and model evaluation.",
      "Model Optimization: Analyzed overfitting and generalization using training/validation performance, exploring dropout and batch normalization.",
    ],
    tech: ["Python", "ANNs", "CNNs", "TensorFlow", "Keras", "MNIST", "Model Evaluation"],
  },
];

export const openSource = [
  {
    project: "Promptfoo",
    blurb: "LLM evaluation, red-teaming and vulnerability scanning framework used by OpenAI and Anthropic.",
    contribution: "Fixed a refusal-detection edge case so inverse is respected when model output is missing, with regression tests.",
    pr: "https://github.com/promptfoo/promptfoo/pull/9818",
    prLabel: "promptfoo#9818",
    lang: "TypeScript",
    status: "Merged",
    year: "2026",
  },
  {
    project: "Opik - Comet ML",
    blurb: "LLM evaluation and observability platform for tracing RAG systems and agentic workflows.",
    contribution: "Restored configurable ChrF metric settings by forwarding char_order and ignore_whitespace to NLTK, validated with regression tests.",
    pr: "https://github.com/comet-ml/opik/pull/7230",
    prLabel: "opik#7230",
    lang: "Python",
    status: "Merged",
    year: "2026",
  },
  {
    project: "Arize Phoenix",
    blurb: "AI observability and evaluation platform for tracing LLM applications.",
    contribution: "Fixed silent data loss by preserving empty JSON object attributes in span attribute loading, with added test coverage.",
    pr: "https://github.com/Arize-ai/phoenix/pull/13847",
    prLabel: "phoenix#13847",
    lang: "Python",
    status: "Merged",
    year: "2026",
  },
];

export type Project = {
  name: string;
  category: string;
  year: string;
  status: string;
  hook: string;
  description: string;
  features: string[];
  tech: string[];
  code: string;
  live?: string;
  liveNote?: string;
};

export const projects: Project[] = [
  {
    name: "Atlas AI",
    category: "AI/ML",
    year: "2026",
    status: "Actively maintained",
    hook: "Ask questions about your documents and get grounded answers with citations using a custom RAG pipeline.",
    description:
      "A RAG-powered AI knowledge platform that lets users upload documents, ask questions in natural language, and receive grounded answers with citations back to the relevant source pages.",
    features: [
      "Hand-built RAG pipeline with explicit retrieval and generation stages",
      "Hybrid retrieval using BM25 and dense vectors with fusion and reranking",
      "Supports PDF, DOCX, PPTX, XLSX, CSV, HTML, Markdown, and plain text documents",
      "Source-grounded answers with citations back to the relevant document pages",
      "JWT authentication with rotating refresh tokens and per-user data isolation",
      "Streaming responses, conversation history, and document lifecycle management",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "ChromaDB", "Gemini", "React", "TypeScript", "Tailwind CSS", "Docker", "AWS"],
    code: "https://github.com/Hiyaarora/Atlas-ai",
    live: "https://13-206-126-184.sslip.io/",
  },
  {
    name: "Multi-Agent Research Assistant",
    category: "AI/ML",
    year: "2026",
    status: "Complete",
    hook: "Give it a topic and let specialized agents search, read, write, and review the research for you.",
    description:
      "A LangChain-based research assistant that turns a research topic into a structured report. It uses specialized agents to search the web and read relevant sources, then combines the gathered information into a report and reviews it with a dedicated critic.",
    features: [
      "Four-stage research pipeline: Search Agent, Reader Agent, Writer Chain, and Critic Chain",
      "Agents use external tools to search for and extract relevant web content",
      "Web search with Tavily and webpage extraction using Requests and BeautifulSoup",
      "Automated report generation with key findings, conclusions, and source URLs",
      "Dedicated critic chain that scores the report and highlights strengths and areas for improvement",
    ],
    tech: ["Python", "LangChain", "Groq", "Tavily", "BeautifulSoup", "Requests", "Streamlit", "LLMs", "Prompt Engineering", "AI Agents"],
    code: "https://github.com/Hiyaarora/multi-agent-research-assistant",
    live: "https://multi-agent-research-assistant-ai-ai.streamlit.app/",
  },
  {
    name: "Jira Assistant AI",
    category: "Developer Tools",
    year: "2026",
    status: "Complete",
    hook: "Turn everyday project notes into structured Jira tasks, manage issues, and generate useful project reports with AI.",
    description:
      "An AI-powered productivity tool for engineering and product teams that helps turn unstructured project notes into structured Jira work. Plain notes become properly formed Jira tasks and bugs, existing issues can be managed from the same place, and bug rollups for an epic export as a local Excel file.",
    features: [
      "Turns unstructured project notes into structured Jira tasks and bugs",
      "Intelligent model fallback across multiple LLM providers",
      "Exports bug rollups per epic as an Excel file for project reporting",
      "Guided first-run setup with credential validation",
      "Credentials stored locally with owner-only file permissions",
    ],
    tech: ["Python", "Jira REST API", "Anthropic", "OpenRouter", "openpyxl"],
    code: "https://github.com/Hiyaarora/Jira-Assisant-AI",
  },
  {
    name: "ColdReach",
    category: "AI/ML",
    year: "2026",
    status: "Complete",
    hook: "Create personalized recruiter emails from your job search data, with every message reviewed before it goes out.",
    description:
      "A command-line tool that writes and sends personalized job-application emails to recruiters - one tailored email per company, reviewed by you before it goes out. It reads a spreadsheet of recruiter contacts, drafts a genuinely personalized email for each company using an LLM, and lets you review every message before sending from your own Gmail, with your resume attached automatically.",
    features: [
      "An LLM writes a unique opening line per company",
      "Nothing sends automatically - you approve, edit, or skip each email",
      "Gmail API with OAuth for secure delivery from your own account",
      "Resume attached to every email",
      "Delivery tracking and duplicate prevention",
    ],
    tech: ["Python", "Groq", "Gmail API", "OAuth", "pytest"],
    code: "https://github.com/Hiyaarora/coldreach",
  },
  {
    name: "Job Application Tracker",
    category: "AI/ML",
    year: "2026",
    status: "Complete",
    hook: "Keep your job search organized by connecting applications, emails, and tracking data in one place.",
    description:
      "A terminal AI assistant that tracks job applications in a Google Sheet and auto-updates statuses from Gmail. It discovers applications automatically from your inbox with no manual entry, moves them through the pipeline as emails arrive, and drafts recruiter replies that are only sent once you approve them.",
    features: [
      "Discovers applications automatically from Gmail",
      "Auto-updates status from Applied through Interview to Offer or Rejected",
      "Drafts recruiter replies, sent only after your approval",
      "Weekly metrics and a daily skill task to keep momentum",
      "Runs daily on its own via a scheduled job",
    ],
    tech: ["Python", "Gemini", "Gmail API", "Google Sheets API", "OAuth"],
    code: "https://github.com/Hiyaarora/job-application-tracker",
  },
  {
    name: "Customer Churn Prediction",
    category: "Machine Learning",
    year: "2026",
    status: "Complete",
    hook: "A feed-forward neural network that predicts which bank customers leave.",
    description:
      "A binary classification project that predicts whether a bank customer will churn, using a fully connected feed-forward neural network built with TensorFlow/Keras. The complete workflow - loading the raw CSV, preparing it for a neural network, training, and evaluating - lives in a single reproducible notebook.",
    features: [
      "Three-layer ANN built and trained with TensorFlow/Keras",
      "Full preprocessing: dropping identifiers, one-hot encoding, train/test split, standardisation",
      "Outputs a churn probability, thresholded at 0.5 for the class label",
      "End-to-end reproducible notebook from raw CSV to evaluation",
    ],
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    code: "https://github.com/Hiyaarora/Churn-Prediction-Model",
  },
  {
    name: "Portfolio",
    category: "Frontend",
    year: "2026",
    status: "Actively maintained",
    hook: "This site — a single-page portfolio built from scratch, with no UI library.",
    description:
      "The site you are looking at. A single-page portfolio built with React, TypeScript, and Tailwind CSS v4, designed and written from scratch rather than assembled from a template or component library. All content lives in one typed data file, and the entire colour scheme is driven by CSS custom properties, so changing a single token re-skins the whole site.",
    features: [
      "Hand-built components with no UI kit or template",
      "Design tokens in CSS custom properties, so one variable re-skins the site",
      "All content centralised in a single typed data file, separate from the components",
      "Scroll-reveal animations and a typewriter role rotation, both disabled under prefers-reduced-motion",
      "Accessible project modals with focus handling, Escape to close, and scroll locking",
      "Responsive from mobile to desktop, with a collapsible mobile navigation",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS", "HTML", "Git", "Vercel"],
    code: "https://github.com/Hiyaarora/Portfolio",
    live: "https://portfolio-hiya12.vercel.app/",
  },
  {
    name: "AI Expense Tracker",
    category: "Full Stack",
    year: "2026",
    status: "Complete",
    hook: "Describe a purchase in plain language and let AI organize it into your expense records.",
    description:
      "A full-stack personal finance application that lets you track expenses and manage records through natural conversation. Instead of filling out forms, you describe a purchase in plain language and the AI extracts the title, amount, and category as structured data. You can also ask questions about your spending and the assistant answers directly from your records, adding, editing, or deleting entries on request.",
    features: [
      "Natural-language expense entry with structured data extraction",
      "Conversational assistant that decides which database operations to run",
      "Tool use and function calling over your own records",
      "Provider-agnostic LLM architecture",
      "Bank-statement import",
    ],
    tech: ["Python", "FastAPI", "Groq", "Llama", "Streamlit"],
    code: "https://github.com/Hiyaarora/ai-expense-tracker",
  },
];

export const navItems = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Skills", href: "#skills" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "Projects", href: "#projects" },
  { num: "05", label: "Open Source", href: "#open-source" },
  { num: "06", label: "Contact", href: "#contact" },
];
