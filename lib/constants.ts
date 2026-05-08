export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Test Automation",
    icon: "⚙️",
    color: "from-sky-400 to-blue-500",
    skills: [
      { name: "Selenium WebDriver", level: 95 },
      { name: "Cypress", level: 90 },
      { name: "Playwright", level: 85 },
      { name: "Appium", level: 80 },
      { name: "TestNG / JUnit", level: 88 },
    ],
  },
  {
    category: "API Testing",
    icon: "🔌",
    color: "from-indigo-400 to-purple-500",
    skills: [
      { name: "Postman", level: 95 },
      { name: "REST Assured", level: 85 },
      { name: "SoapUI", level: 78 },
      { name: "GraphQL Testing", level: 75 },
      { name: "Swagger / OpenAPI", level: 82 },
    ],
  },
  {
    category: "Bug Tracking & Management",
    icon: "🐛",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "JIRA", level: 98 },
      { name: "TestRail", level: 92 },
      { name: "Bugzilla", level: 80 },
      { name: "Azure DevOps", level: 85 },
      { name: "Zephyr Scale", level: 78 },
    ],
  },
  {
    category: "Performance & Security",
    icon: "🔒",
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "JMeter", level: 85 },
      { name: "Gatling", level: 75 },
      { name: "OWASP ZAP", level: 72 },
      { name: "Burp Suite", level: 70 },
      { name: "k6", level: 68 },
    ],
  },
  {
    category: "CI/CD & DevOps",
    icon: "🚀",
    color: "from-pink-400 to-rose-500",
    skills: [
      { name: "Jenkins", level: 88 },
      { name: "GitHub Actions", level: 90 },
      { name: "Docker", level: 82 },
      { name: "Git", level: 95 },
      { name: "CircleCI", level: 75 },
    ],
  },
  {
    category: "Languages & Databases",
    icon: "💻",
    color: "from-yellow-400 to-amber-500",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 82 },
      { name: "Java", level: 78 },
      { name: "SQL", level: 88 },
      { name: "Bash / Shell", level: 72 },
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "TechNova Solutions",
    role: "Senior QA Engineer",
    duration: "Jan 2022 – Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/images/technova-logo.jpg",
    responsibilities: [
      "Led end-to-end QA strategy for a SaaS platform serving 500K+ users, reducing production defects by 42%",
      "Built and maintained a Cypress + TypeScript automation framework covering 1,200+ test cases",
      "Integrated automated test suites into CI/CD pipelines using GitHub Actions, achieving 95% pipeline coverage",
      "Mentored a team of 4 junior QA engineers and conducted weekly knowledge-sharing sessions",
      "Collaborated with product and dev teams in Agile sprints to define acceptance criteria and test plans",
      "Performed API testing with Postman and REST Assured, validating 300+ endpoints",
    ],
  },
  {
    company: "DataStream Inc.",
    role: "QA Engineer",
    duration: "Mar 2020 – Dec 2021",
    location: "Austin, TX",
    type: "Full-time",
    logo: "/images/datastream-logo.jpg",
    responsibilities: [
      "Designed and executed comprehensive test plans for a real-time data analytics platform",
      "Developed Selenium WebDriver automation scripts in Python, reducing regression testing time by 60%",
      "Conducted performance testing using JMeter, identifying bottlenecks that improved load time by 35%",
      "Managed bug lifecycle in JIRA, triaging and tracking 800+ defects across 12 releases",
      "Performed cross-browser and cross-device testing ensuring compatibility across 15+ environments",
    ],
  },
  {
    company: "Agile Labs",
    role: "Junior QA Analyst",
    duration: "Jun 2018 – Feb 2020",
    location: "New York, NY",
    type: "Full-time",
    logo: "/images/agile-labs-logo.jpg",
    responsibilities: [
      "Executed manual test cases for web and mobile applications across multiple product lines",
      "Created detailed bug reports with reproducible steps, screenshots, and severity classifications",
      "Participated in UAT sessions with stakeholders and documented feedback for development teams",
      "Assisted in building the initial test automation framework using Selenium and TestNG",
      "Maintained test documentation in TestRail, ensuring traceability to requirements",
    ],
  },
  {
    company: "StartupXYZ",
    role: "QA Intern",
    duration: "Jan 2018 – May 2018",
    location: "Remote",
    type: "Internship",
    logo: "/images/startupxyz-logo.jpg",
    responsibilities: [
      "Performed exploratory and smoke testing on a mobile e-commerce application",
      "Documented 150+ test cases and contributed to the team's test repository",
      "Learned Agile/Scrum methodologies and participated in daily standups and sprint reviews",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Automation Framework",
    description:
      "Built a comprehensive end-to-end test automation framework for a large-scale e-commerce platform using Cypress and TypeScript with Page Object Model design pattern.",
    tags: ["Cypress", "TypeScript", "POM", "GitHub Actions", "Allure Reports"],
    category: "Test Automation",
    stats: { testCases: 450, coverage: "87%", bugsFound: 63 },
    highlights: [
      "Implemented data-driven testing with 450+ test cases",
      "Integrated with GitHub Actions for nightly regression runs",
      "Generated Allure HTML reports with screenshots on failure",
      "Reduced regression cycle from 3 days to 4 hours",
    ],
    github: "https://github.com",
    demo: null,
    image: "https://cdn.prod.website-files.com/64b7ba4dc9375b7b74b2135e/6878afe3c8335f3654cd7297_01.webp",
  },
  {
    title: "API Testing Suite – FinTech Platform",
    description:
      "Designed a robust API testing suite for a financial services platform covering authentication, transactions, and reporting endpoints with contract testing.",
    tags: ["Postman", "Newman", "REST Assured", "Java", "Pact"],
    category: "API Testing",
    stats: { testCases: 320, coverage: "92%", bugsFound: 41 },
    highlights: [
      "Validated 320+ REST and GraphQL API endpoints",
      "Implemented contract testing with Pact framework",
      "Automated API regression with Newman in CI pipeline",
      "Discovered critical security vulnerability in auth flow",
    ],
    github: "https://github.com",
    demo: null,
    image: "https://qacraft.com/wp-content/uploads/2026/03/Why-Is-Performance-Testing-Critical-for-Healthcare-Applications.png",
  },
  {
    title: "Performance Testing – Healthcare App",
    description:
      "Conducted comprehensive performance and load testing for a healthcare patient portal handling 50K concurrent users, identifying and resolving critical bottlenecks.",
    tags: ["JMeter", "Grafana", "InfluxDB", "k6", "AWS"],
    category: "Performance Testing",
    stats: { testCases: 85, coverage: "N/A", bugsFound: 18 },
    highlights: [
      "Simulated 50,000 concurrent users with realistic load patterns",
      "Identified database query bottleneck causing 8s response times",
      "Reduced average response time from 8s to 1.2s after fixes",
      "Set up real-time monitoring dashboard with Grafana",
    ],
    github: "https://github.com",
    demo: null,
    image: "https://cdn.prod.website-files.com/619e15d781b21202de206fb5/6683a8b9af20c31bfecddecd_Dive-into-Mobile-App-Testing-Automation-A-Comprehensive-Guide.webp",
  },
  {
    title: "Mobile Test Automation – Banking App",
    description:
      "Developed a cross-platform mobile automation framework for iOS and Android banking application using Appium with parallel execution capabilities.",
    tags: ["Appium", "Python", "pytest", "BrowserStack", "Allure"],
    category: "Mobile Testing",
    stats: { testCases: 280, coverage: "79%", bugsFound: 37 },
    highlights: [
      "Automated 280 test cases across iOS and Android platforms",
      "Implemented parallel execution reducing test time by 70%",
      "Integrated with BrowserStack for real device testing",
      "Achieved 79% code coverage on critical user journeys",
    ],
    github: "https://github.com",
    demo: null,
    image: "https://qualysec.com/wp-content/uploads/2025/01/How-is-SaaS-Security-Testing-Done.png",
  },
  {
    title: "Security Testing – SaaS Platform",
    description:
      "Performed comprehensive security testing and vulnerability assessment for a B2B SaaS platform, identifying OWASP Top 10 vulnerabilities and providing remediation guidance.",
    tags: ["OWASP ZAP", "Burp Suite", "SQL Injection", "XSS", "Penetration Testing"],
    category: "Security Testing",
    stats: { testCases: 120, coverage: "N/A", bugsFound: 24 },
    highlights: [
      "Identified 24 security vulnerabilities including 3 critical CVEs",
      "Performed SQL injection, XSS, and CSRF attack simulations",
      "Provided detailed remediation report with priority rankings",
      "Conducted re-testing after fixes to verify resolution",
    ],
    github: null,
    demo: null,
    image: "https://imgopt.infoq.com/fit-in/3000x4000/filters:quality(85)/filters:no_upscale()/articles/pipeline-quality-gates/en/resources/1typical-pipeline-quality-gates-big-1671623492663.jpg",
  },
  {
    title: "CI/CD Quality Gate Pipeline",
    description:
      "Architected a comprehensive quality gate system integrated into the CI/CD pipeline ensuring zero-defect deployments with automated checks at every stage.",
    tags: ["Jenkins", "Docker", "SonarQube", "GitHub Actions", "Slack"],
    category: "DevOps QA",
    stats: { testCases: 600, coverage: "91%", bugsFound: 52 },
    highlights: [
      "Designed multi-stage quality gates blocking deployments on failures",
      "Integrated SonarQube for static code analysis and coverage",
      "Reduced production incidents by 68% over 6 months",
      "Automated Slack notifications for test results and failures",
    ],
    github: "https://github.com",
    demo: null,
    image: "https://istqb.org/wp-content/uploads/2024/10/ISTQB_CT_TAE_v2.0-1024x940-1.png",
  },
];

export const CERTIFICATIONS = [
  {
    name: "ISTQB Certified Tester – Advanced Level Test Automation Engineer",
    issuer: "ISTQB",
    date: "March 2023",
    credentialId: "ISTQB-TAE-2023-04821",
    badge: "🏆",
    color: "from-sky-400 to-blue-600",
    description: "Advanced certification covering test automation architecture, frameworks, and best practices.",
    verifyUrl: "https://www.istqb.org",
  },
  {
    name: "ISTQB Certified Tester – Foundation Level",
    issuer: "ISTQB",
    date: "June 2019",
    credentialId: "ISTQB-FL-2019-18234",
    badge: "🎓",
    color: "from-indigo-400 to-purple-600",
    description: "Foundation certification in software testing principles, techniques, and processes.",
    verifyUrl: "https://www.istqb.org",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "November 2022",
    credentialId: "AWS-DEV-2022-99123",
    badge: "☁️",
    color: "from-orange-400 to-amber-600",
    description: "Certification validating expertise in developing and testing cloud-based applications on AWS.",
    verifyUrl: "https://aws.amazon.com/certification",
  },
  {
    name: "Certified Agile Tester (CAT)",
    issuer: "iSQI",
    date: "August 2021",
    credentialId: "CAT-2021-56789",
    badge: "⚡",
    color: "from-emerald-400 to-teal-600",
    description: "Certification in Agile testing methodologies, TDD, BDD, and continuous testing practices.",
    verifyUrl: "https://www.isqi.org",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "January 2023",
    credentialId: "POSTMAN-2023-API-77432",
    badge: "🔌",
    color: "from-pink-400 to-rose-600",
    description: "Expert-level certification in API design, testing, and automation using Postman.",
    verifyUrl: "https://www.postman.com/certification",
  },
  {
    name: "Cypress.io Certified Professional",
    issuer: "Cypress.io",
    date: "May 2022",
    credentialId: "CYP-PRO-2022-33210",
    badge: "🌲",
    color: "from-green-400 to-emerald-600",
    description: "Professional certification in end-to-end testing with Cypress framework.",
    verifyUrl: "https://www.cypress.io",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Engineering Manager",
    company: "TechNova Solutions",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/25/Minister_Mitchell_July_20_headshot_DSC6710a.jpg",
    quote:
      "Alex is one of the most thorough and detail-oriented QA engineers I've worked with. Their automation framework reduced our release cycle by 60% and the quality of our product improved dramatically. A true asset to any engineering team.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Senior Software Engineer",
    company: "TechNova Solutions",
    avatar: "https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/legendary-players/james-rodriguez/assets/1330783932802.jpg",
    quote:
      "Working alongside Alex has been a pleasure. They have an incredible ability to find edge cases that no one else thinks of. Their API testing caught a critical security flaw before it reached production — saved us from a potential disaster.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "DataStream Inc.",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Priya_Sharma_%28fictional_character%29.jpg/250px-Priya_Sharma_%28fictional_character%29.jpg",
    quote:
      "Alex bridges the gap between technical QA and product thinking beautifully. They don't just find bugs — they understand the user impact and help prioritize fixes accordingly. Our product quality scores went up 40% during their tenure.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Agile Labs",
    avatar: "https://m.media-amazon.com/images/M/MV5BYWY0ODdiNjQtZmE5My00M2IxLWFlOGQtMDhmNDZiNTEyZDVkXkEyXkFqcGc@._V1_.jpg",
    quote:
      "I've hired many QA engineers over the years, but Alex stands out for their proactive approach to quality. They built our entire testing infrastructure from scratch and mentored the team to maintain high standards. Exceptional professional.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Lead Developer",
    company: "DataStream Inc.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Emma_Thompson_at_the_78th_Locarno_Film_Festival_photocall_01_%28cropped%29.jpg",
    quote:
      "Alex's performance testing work on our healthcare platform was outstanding. They identified bottlenecks we had missed for months and provided clear, actionable recommendations. The system now handles 10x the load without issues.",
    rating: 5,
  },
];

export const STATS = [
  { label: "Years of Experience", value: "6+", icon: "📅" },
  { label: "Bugs Discovered", value: "2,400+", icon: "🐛" },
  { label: "Test Cases Written", value: "8,000+", icon: "📋" },
  { label: "Projects Tested", value: "35+", icon: "🚀" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "alex.johnson@sqaportfolio.dev",
};
