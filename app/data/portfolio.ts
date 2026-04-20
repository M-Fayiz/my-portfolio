export const navItems = ["work", "about", "stack", "contact"] as const;

export const projects = [
  {
    id: 1,
    number: "01",
    category: "E-Learning Platform",
    name: "CodeAspire",
    tagline: "Where developers level up",
    description:
      "A scalable e-learning platform with live WebRTC mentoring, AI-powered doubt resolution, real-time chat, Redis caching, Stripe payments, and role-based access control.",
    tech: ["Node.js", "TypeScript", "React", "MongoDB", "Redis", "Socket.IO", "WebRTC", "Docker", "AWS EC2"],
    image: "/codeaspire.png",
    accent: "#e8652a",
    github: "https://github.com/M-Fayiz/CodeAspire-an-E-Learning-Platform",
    live: "#",
  },
  {
    id: 2,
    number: "02",
    category: "E-Commerce App",
    name: "Fruitkha",
    tagline: "Fresh groceries, zero friction",
    description:
      "A full-cycle grocery e-commerce app with order tracking, returns, coupons, wallet support, Razorpay payments, Google OAuth, and an admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Razorpay", "Google OAuth", "PM2"],
    image: "/fruitkha.png",
    accent: "#2d7a4f",
    github: "https://github.com/M-Fayiz/FRUITKHA-E-Commerce",
    live: "#",
  },
  {
    id: 3,
    number: "03",
    category: "Real-Time Polling",
    name: "SnapPoll",
    tagline: "Ask. Vote. Watch it happen live.",
    description:
      "A room-based polling and live chat app built with Next.js and Socket.IO. Create a room, share the code, and watch votes stream in real time.",
    tech: ["Next.js", "Tailwind CSS", "Socket.IO", "Redux", "OAuth"],
    image: "/snappoll.png",
    accent: "#6d52c8",
    github: "https://github.com/M-Fayiz/SnapPoll",
    live: "#",
  },
  {
    id: 4,
    number: "04",
    category: "Task Management",
    name: "PriorX",
    tagline: "Stop juggling. Start achieving.",
    description:
      "A real-time task management app built with SOLID principles and a repository pattern. Create, prioritize, and track tasks with live socket-powered updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image: "/priorix.png",
    accent: "#1a7fa6",
    github: "https://github.com/M-Fayiz/Priorx-task-management",
    live: "#",
  },
] as const;

export const strengths = [
  {
    abbr: "API",
    label: "Backend Architecture",
    description: "Maintainable services, repositories, and role-aware APIs built to scale.",
  },
  {
    abbr: "RT",
    label: "Real-Time Systems",
    description: "Socket.IO and WebRTC for live chat, video sessions, notifications, and polling.",
  },
  {
    abbr: "OPS",
    label: "Cloud and DevOps",
    description: "AWS EC2, Nginx, Docker, and PM2 for shipping, deployment, and maintenance.",
  },
  {
    abbr: "SEC",
    label: "Auth and Security",
    description: "JWT, RBAC, OAuth, and session management handled carefully from day one.",
  },
  {
    abbr: "AI",
    label: "AI Integration",
    description: "OpenAI-backed features connected to real user workflows, not toy demos.",
  },
] as const;

export const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "MVC", "SOLID", "Repository Pattern"],
  Databases: ["MongoDB", "PostgreSQL", "Redis"],
  DevOps: ["AWS EC2", "Nginx", "PM2", "Docker", "Vercel", "Render"],
  Integrations: ["Stripe", "Razorpay", "OpenAI API", "Google OAuth", "Cloudinary"],
  Security: ["JWT", "RBAC", "Session Auth"],
};

export const contacts = [
  ["Email", "fayiz1095@gmail.com", "mailto:fayiz1095@gmail.com"],
  ["LinkedIn", "linkedin.com/in/fayiz-ch", "https://linkedin.com/in/fayiz-ch"],
  ["GitHub", "github.com/M-Fayiz", "https://github.com/M-Fayiz"],
  ["LeetCode", "leetcode.com/u/Fayiz_mhd", "https://leetcode.com/u/Fayiz_mhd"],
  ["Phone", "+91 9562723870", "tel:+919562723870"],
] as const;

export const techMarquee = [
  "Node.js",
  "React.js",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "WebRTC",
  "Docker",
  "AWS EC2",
  "Stripe",
  "OpenAI",
  "JWT",
  "Nginx",
  "PM2",
] as const;


export const CYCLE = [
  { text: "Muhammed Fayiz CH",   color: "#4D4D4D" },
  { text: "Full-Stack MERN Developer", color: "#e8652a" },
];