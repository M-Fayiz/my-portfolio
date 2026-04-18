"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  tech: string[];
};

const projects: Project[] = [
  { id: 1, number: "01", name: "CodeAspire", category: "E-learning", description: "Live mentoring, real-time chat, AI doubt resolution, secure course purchases, and role-based dashboards.", image: "/codeaspire.png", accent: "#e8652a", tech: ["Node.js", "TypeScript", "React", "MongoDB", "Redis", "WebRTC"] },
  { id: 2, number: "02", name: "Fruitkha", category: "E-commerce", description: "Grocery commerce with tracking, returns, coupons, wallet payments, Razorpay, Google OAuth, and an admin dashboard.", image: "/fruitkha.png", accent: "#2d7a4f", tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay", "PM2"] },
  { id: 3, number: "03", name: "SnapPoll", category: "Real-time polling", description: "Room-based polling and live chat where users share codes, discuss ideas, and watch votes stream instantly.", image: "/snappoll.png", accent: "#7c5cbf", tech: ["Next.js", "Tailwind", "Socket.IO", "Redux", "OAuth"] },
  { id: 4, number: "04", name: "PriorX", category: "Productivity", description: "Task management built around SOLID principles, Repository Pattern, priorities, CRUD, and live socket updates.", image: "/priorix.png", accent: "#1a7fa6", tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"] },
];

const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "MVC", "SOLID", "Repository Pattern"],
  Data: ["MongoDB", "PostgreSQL", "Redis"],
  DevOps: ["AWS EC2", "Nginx", "PM2", "Docker", "Vercel"],
  Integrations: ["Stripe", "Razorpay", "OpenAI API", "Google OAuth", "Nodemailer"],
  Security: ["JWT", "RBAC", "Session Auth"],
};

const strengths = [
  ["API", "Backend Architecture", "Maintainable services, repositories, and role-aware APIs."],
  ["RT", "Real-Time Systems", "Socket.IO and WebRTC for chat, video, notifications, and polling."],
  ["OPS", "Cloud and DevOps", "AWS EC2, Nginx, Docker, PM2, deployment, and upkeep."],
  ["SEC", "Auth and Security", "JWT, RBAC, OAuth, sessions, and secure user flows."],
  ["AI", "AI Integration", "OpenAI-backed features tied to actual user workflows."],
];

const contacts = [
  ["Email", "fayiz1095@gmail.com", "mailto:fayiz1095@gmail.com", "@"],
  ["LinkedIn", "linkedin.com/in/fayiz-ch", "https://linkedin.com/in/fayiz-ch", "in"],
  ["GitHub", "github.com/M-Fayiz", "https://github.com/M-Fayiz", "GH"],
  ["LeetCode", "leetcode.com/u/Fayizmhd", "https://leetcode.com/u/Fayizmhd", "LC"],
  ["Phone", "+91 9562723870", "tel:+919562723870", "ph"],
] satisfies [string, string, string, string][];

function TerminalBadge() {
  const lines = ["$ node server.js", "> Listening on :5000", "> Redis connected", "> MongoDB connected", "> Socket.IO ready"];
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (shown >= lines.length) return;
    const timeout = window.setTimeout(() => setShown((value) => value + 1), 650);
    return () => window.clearTimeout(timeout);
  }, [shown, lines.length]);

  return (
    <div className="terminal">
      <div className="terminal-dots"><span /><span /><span /></div>
      {lines.slice(0, shown).map((line) => <p key={line} className={line.startsWith("$") ? "command" : ""}>{line}</p>)}
      {shown < lines.length ? <span className="cursor">_</span> : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <Image src={project.image} alt={`${project.name} screenshot`} fill sizes="(max-width: 900px) 100vw, 50vw" />
        <span className="project-number">{project.number}</span>
        <span className="project-category" style={{ color: project.accent }}>{project.category}</span>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="chips">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <nav className={scrolled ? "site-nav scrolled" : "site-nav"}>
        <button className="brand" onClick={() => scrollTo("hero")} aria-label="Scroll to home"><span>fz</span>Fayiz</button>
        <div className="nav-links">{["work", "about", "stack", "contact"].map((id) => <button key={id} onClick={() => scrollTo(id)}>{id}</button>)}</div>
        <button className="btn primary compact" onClick={() => scrollTo("contact")}>Hire me -&gt;</button>
      </nav>

      <section id="hero" className="hero-section">
        <div className="hero-grid">
          <div>
            <p className="status-pill"><span />Available for new projects</p>
            <h1>Full-stack<br /><span>MERN Developer</span><br />from Kerala.</h1>
            <p className="hero-copy">I design and ship real-time web applications from backend architecture to polished frontend. Self-taught, production-focused, and always chasing clean code.</p>
            <p className="stack-line">Node.js / React / TypeScript / MongoDB / Redis</p>
            <div className="hero-actions"><button className="btn primary" onClick={() => scrollTo("work")}>See my work</button><button className="btn secondary" onClick={() => scrollTo("contact")}>Get in touch</button></div>
            <div className="stats">{[["6+", "Projects shipped"], ["2+", "Years building"], ["15+", "Tech integrations"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </div>
          <div className="profile-column">
            <div className="profile-ring"><div className="profile-photo"><Image src="/my-photo.jpg" alt="Muhammed Fayiz CH" fill sizes="240px" priority unoptimized /></div><div className="open-badge"><span />Open to work</div></div>
            <TerminalBadge />
          </div>
        </div>
      </section>

      <div className="marquee-wrap"><div className="marquee-track">{["Node.js", "React.js", "Next.js", "TypeScript", "MongoDB", "Redis", "Socket.IO", "WebRTC", "Docker", "AWS EC2", "Express.js", "Stripe", "OpenAI", "JWT", "Nginx", "PM2", "Node.js", "React.js", "Next.js", "TypeScript", "MongoDB", "Redis", "Socket.IO", "WebRTC", "Docker", "AWS EC2", "Express.js", "Stripe", "OpenAI", "JWT", "Nginx", "PM2"].map((tech, index) => <span key={`${tech}-${index}`}>{tech}</span>)}</div></div>

      <section id="work" className="section"><div className="section-inner"><p className="eyebrow">Selected work</p><div className="section-heading"><h2>Things I shipped<br /><span>to production.</span></h2><p>Each project is deployed, not just a demo. Real features, real infrastructure, real constraints.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>

      <section id="about" className="section about-section"><div className="section-inner about-grid"><div><p className="eyebrow">About me</p><h2>Code is the<br /><span>craft I chose.</span></h2><p>I&apos;m <strong>Muhammed Fayiz CH</strong>, a self-taught full-stack developer from Kannur, Kerala. My background is in English Literature, which fits better than it sounds: good code, like good writing, is clarity of thought.</p><p>I got into software by building things, breaking them, and rebuilding them better. Today I specialize in the MERN stack, but I think beyond frameworks.</p><p>Every project I ship is <span className="code-accent">production-ready</span>, not just portfolio-ready. I deploy, maintain, and iterate.</p></div><div className="strength-list">{strengths.map(([short, label, desc]) => <article key={label} className="strength-card"><span>{short}</span><div><h3>{label}</h3><p>{desc}</p></div></article>)}</div></div></section>

      <section id="stack" className="section"><div className="section-inner"><p className="eyebrow">Tech stack</p><div className="section-heading"><h2>Tools I reach for<br /><span>on every project.</span></h2><p>Not a list of buzzwords. These are technologies I&apos;ve shipped to production and understand deeply.</p></div><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <article key={category} className="skill-card"><h3>{category}</h3><div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section id="contact" className="section contact-section"><div className="contact-inner"><p className="eyebrow">Get in touch</p><h2>Let&apos;s build something<br /><span>that actually works.</span></h2><p className="contact-copy">Open to full-time roles, freelance projects, or just a conversation about software. Based in Kannur, Kerala and working remotely.</p><div className="contact-list">{contacts.map(([label, value, href, icon]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row"><span className="contact-icon">{icon}</span><span><span className="contact-label">{label}</span><span className="contact-value">{value}</span></span><span className="contact-arrow">-&gt;</span></a>)}</div><a href="mailto:fayiz1095@gmail.com" className="btn primary contact-button">Send me a message -&gt;</a></div></section>

      <footer className="footer"><button className="brand" onClick={() => scrollTo("hero")}><span>fz</span>Muhammed Fayiz CH</button><p>Kannur, Kerala / MERN Stack Developer</p><p>{new Date().getFullYear()}</p></footer>
    </main>
  );
}
