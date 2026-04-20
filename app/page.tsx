"use client";

import HeroCycle from "@/components/hero";
import Reveal from "@/components/reveal";
import Style from "@/components/style";
import { useEffect, useState } from "react";
import { contacts, projects, skills, strengths } from "./data/portfolio";


const TECH_MARQUEE = [
  "Node.js","React.js","Next.js","TypeScript","MongoDB","Redis",
  "Socket.IO","WebRTC","Docker","AWS EC2","Stripe","OpenAI","JWT","Nginx","PM2",
];



// ─── main ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main style={{ fontFamily:"'Inter','Helvetica Neue',Arial,sans-serif", background:"#fff", color:"#0f0f0f", overflowX:"hidden" }}>
      <Style/>

      {/* ── Nav ── */}
      <nav className={`nav${scrolled ? " up" : ""}`}>
  
        <div className="nav-links">
          {["work","about","stack","contact"].map(id => (
            <button key={id} onClick={() => go(id)}>{id}</button>
          ))}
        </div>
      
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="hero">
        {/* bg textures */}
        <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(#0000000a 1px,transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none" }} />
        <div style={{ position:"absolute",top:"-15%",right:"24%",width:520,height:520,background:"radial-gradient(circle,#e8652a0d 0%,transparent 65%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:0,left:"-4%",width:340,height:340,background:"radial-gradient(circle,#6d52c80b 0%,transparent 70%)",pointerEvents:"none" }} />

        <div className="hero-grid">
          {/* ── left column ── */}
          <div>

            {/* greeting — <Hello World /> code tag */}
            <p className="hero-greeting">
              <span className="tag-bracket">&lt;</span>
              <span className="tag-text">Hello World</span>
              <span className="tag-bracket">/&gt;</span>
              <span style={{ color:"#aaa", marginLeft:"10px", fontFamily:"'JetBrains Mono',monospace", fontSize:"18px" }}>
                i am
              </span>
            </p>

            {/* fixed-height block — name types, pauses, erases, role types */}
            <div className="hero-cycle-block">
              <HeroCycle />
            </div>

            <p className="hero-copy">
              Building real-time web applications — from backend architecture
              to polished frontend, shipped to production.
            </p>
            <p className="stack-hint">Node.js · React · TypeScript · MongoDB · Redis · Socket.IO</p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go("work")}>See my work</button>
              <button className="btn btn-secondary" onClick={() => go("contact")}>Get in touch</button>
            </div>

            <div className="stats">
              {[["6+","Projects shipped"],["2+","Years building"],["15+","Integrations"]].map(([n,l]) => (
                <div key={l}><strong>{n}</strong><span>{l}</span></div>
              ))}
            </div>
          </div>

          {/* ── right column — photo (completely independent, never shifts) ── */}
          <div className="photo-col" style={{ animation:"float 7s ease-in-out infinite" }}>
            <div className="photo-frame">
              <img src={"/my-photo.jpg"} alt="Muhammed Fayiz CH" />
              <div className="photo-badge">
               
              </div>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{ position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,opacity:.28 }}>
          <span style={{ fontSize:10,letterSpacing:".12em",textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",color:"#666" }}>scroll</span>
          <div style={{ width:1,height:28,background:"linear-gradient(#666,transparent)" }} />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="mq-wrap">
        <div className="mq-track">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* ── Work ── */}
      <section className="section" id="work">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <div className="section-header">
              <h2>Things I shipped<br /><span>to production.</span></h2>
            </div>
          </Reveal>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i % 2 * 0.08}>
                <article className="proj-card">
                  <div className="proj-thumb" style={{ background: p.accent }}>
                    {p.image
                      ? <img src={p.image} alt={p.name} />
                      : <div style={{ width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#ccc" }}>coming soon</div>
                    }
                    <span className="proj-num">{p.number}</span>
                      <span className="proj-tag" style={{ color: p.accent }}>{p.category}</span>
                  </div>
                  <div className="proj-body">
                    <div className="proj-head">
                      <h3>{p.name}</h3>
                      <p style={{ color: p.accent }}>{p.tagline}</p>
                    </div>
                    <p className="proj-desc">{p.description}</p>
                    <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                    <div className="proj-links">
                      <a href={p.live} className="proj-link-live">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Demo
                      </a>
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-gh">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section alt-bg" id="about">
        <div className="section-inner about-grid">
         <Reveal>
  <p className="eyebrow">About me</p>

  <h2>
    <span className="grad">I started with curiosity — I stayed for the craft.</span>
  </h2>

  <p>
    I&apos;m <strong>Muhammed Fayiz CH</strong>, a self-taught full-stack developer from Kannur, Kerala. 
    With a background in English Literature, I approach code the same way I approach writing — 
    with clarity, structure, and intent.
  </p>

  <p>
    My journey into software wasn’t planned. What began as curiosity turned into a discipline — 
    learning by building real applications, breaking them, and refining them until they worked reliably.
  </p>

  <p>
    I work primarily with the MERN stack, but I don’t limit myself to tools. 
    I focus on building systems that are scalable, secure, and maintainable — 
    thinking beyond code into architecture and real-world usage.
  </p>

  <p>
    Every project I build is <span className="code-accent">production-ready</span>, 
    designed to solve real problems — not just to showcase features.
  </p>

  <div className="about-actions">
    <button className="btn btn-primary" onClick={() => go("contact")}>
      Work with me
    </button>

    <a href="/resume.pdf" download className="btn btn-secondary">
      View Resume
    </a>
  </div>
</Reveal>
          <Reveal delay={0.1}>
            <div className="strength-list">
              {strengths.map(s => (
                <article className="strength-card" key={s.label}>
                  <abbr title={s.label}>{s.abbr}</abbr>
                  <div><h3>{s.label}</h3><p>{s.description}</p></div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stack ── */}
      <section className="section" id="stack">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Tech stack</p>
            <div className="section-header">
              <h2>Tools I reach for<br /><span>on every project.</span></h2>
              <p>Technologies I&apos;ve shipped to production and understand deeply.</p>
            </div>
          </Reveal>
          <div className="skills-grid">
            {Object.entries(skills).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 0.05}>
                <article className="skill-card">
                  <h3>{cat}</h3>
                  <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section alt-bg" id="contact">
        <div className="contact-inner">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2>Let&apos;s build something<br /><span className="grad">that actually works.</span></h2>
            <p className="contact-copy">Open to full-time roles, freelance projects, or a conversation about software. Based in Kannur, Kerala — working remotely.</p>
            <div className="contact-list">
              {contacts.map(([label, val, href]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row">
                  <span className="c-icon">{label==="Email"?"@":label==="LinkedIn"?"in":label==="GitHub"?"GH":label==="LeetCode"?"LC":"☎"}</span>
                  <span><div className="c-label">{label}</div><div className="c-val">{val}</div></span>
                  <span className="c-arr">→</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <button className="footer-brand" onClick={() => go("hero")}>
          <span>fz</span>Muhammed Fayiz CH
        </button>
        <p>MERN Stack Developer</p>
        <p>{new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}