import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const features = [
  {
    icon: "⌁",
    title: "Build in public",
    text: "Turn ideas into polished projects with weekly build sessions and peer feedback."
  },
  {
    icon: "◈",
    title: "Learn together",
    text: "Practical workshops cover frontend, backend, UI/UX, cloud, and emerging tools."
  },
  {
    icon: "↗",
    title: "Ship faster",
    text: "Find collaborators, share resources, and get your next project from draft to demo."
  }
];

const testimonials = [
  {
    quote: "Nexus gave me the confidence to turn a class project into something I could actually deploy.",
    name: "Aarav",
    role: "Frontend Builder"
  },
  {
    quote: "The best part is the feedback loop. You build something, show it, and leave with concrete improvements.",
    name: "Mira",
    role: "Product Designer"
  },
  {
    quote: "I joined for the workshops and stayed because I found people who wanted to build ambitious things.",
    name: "Kabir",
    role: "Full-stack Developer"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark">N</span>
          <span>NEXUS</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "features", "community"].map((item) => (
            <button key={item} onClick={() => goTo(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button className="nav-cta" onClick={() => goTo("join")}>Join the community</button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">STUDENT TECH COMMUNITY · 2026</p>
            <h1>Build ideas that <span>move.</span></h1>
            <p className="hero-text">
              Nexus is a community for students who want to learn by building,
              collaborate with ambitious peers, and ship projects that matter.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => goTo("join")}>Start building <span>→</span></button>
              <button className="secondary-btn" onClick={() => goTo("features")}>Explore what we do</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-label="Community members">
                <span>AK</span><span>MR</span><span>VK</span><span>+</span>
              </div>
              <div><strong>1,200+</strong><small>builders learning together</small></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract technology dashboard">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card glass">
              <div className="window-bar"><i></i><i></i><i></i><span>nexus-build.js</span></div>
              <pre><code>{`const idea = "something useful";

const team = await nexus.find({
  skills: ["design", "code"],
  mindset: "curious"
});

await team.build(idea);
await team.ship();`}</code></pre>
              <div className="code-status"><span></span> build completed in 2.8s</div>
            </div>
            <div className="floating-card glass">
              <span className="mini-icon">✦</span>
              <div><strong>Next workshop</strong><small>Modern React patterns · 6 PM</small></div>
            </div>
          </div>
        </section>

        <section id="about" className="section intro">
          <div>
            <p className="eyebrow">WHY NEXUS</p>
            <h2>A place to turn curiosity into <span>craft.</span></h2>
          </div>
          <p className="section-lead">
            From first commit to final demo, we make the messy middle easier:
            useful feedback, practical sessions, and people who are excited to build.
          </p>
        </section>

        <section id="features" className="section feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title} style={{ "--delay": `${index * 80}ms` }}>
              <div className="feature-icon">{feature.icon}</div>
              <p className="card-number">0{index + 1}</p>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </section>

        <section id="community" className="section community-panel">
          <div className="community-copy">
            <p className="eyebrow">THE COMMUNITY</p>
            <h2>Small teams.<br /><span>Big momentum.</span></h2>
            <p>
              Meet people across disciplines, find project partners, and get
              the kind of feedback that makes your second version much better than your first.
            </p>
            <div className="stats">
              <div><strong>48</strong><span>active projects</span></div>
              <div><strong>32</strong><span>workshops / year</span></div>
              <div><strong>96%</strong><span>project completion</span></div>
            </div>
          </div>

          <div className="testimonial-card glass">
            <span className="quote-mark">“</span>
            <p>{testimonials[activeTestimonial].quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonials[activeTestimonial].name[0]}</div>
              <div><strong>{testimonials[activeTestimonial].name}</strong><small>{testimonials[activeTestimonial].role}</small></div>
            </div>
            <div className="dots" aria-label="Testimonial selector">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  className={index === activeTestimonial ? "active" : ""}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="section join-card">
          <div>
            <p className="eyebrow">READY TO BUILD?</p>
            <h2>Your next <span>project</span> starts here.</h2>
          </div>
          <button className="primary-btn" onClick={() => alert("Thanks! Connect this CTA to your real recruitment/community form before deployment.")}>
            Join Nexus <span>→</span>
          </button>
        </section>
      </main>

      <footer className="footer">
        <div>
          <button className="brand footer-brand" onClick={() => goTo("home")}><span className="brand-mark">N</span><span>NEXUS</span></button>
          <p>Build. Learn. Ship. Together.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("features")}>Features</button>
          <button onClick={() => goTo("community")}>Community</button>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <small>© 2026 Nexus Community. Built for the web.</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
