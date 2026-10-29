
import { useEffect, useState } from 'react';

import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  X,
  Braces,
  CloudSun,
  ShoppingBag,
  Globe,
  GitBranch,
  Monitor,
  Zap,
  Github,
  Linkedin,
  Phone,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const skills = [
  ['Java', 'Programming', Braces, 'violet', 82],
  ['Python', 'Programming', Code2, 'blue', 68],
  ['JavaScript', 'Programming', Zap, 'yellow', 78],
  ['React', 'Frontend', Layers3, 'cyan', 76],
  ['HTML & CSS', 'Frontend', Monitor, 'orange', 86],
  ['Node.js', 'Backend', Braces, 'green', 65],
  ['MySQL', 'Database', Database, 'blue', 74],
  ['MongoDB', 'Database', Database, 'green', 66],
  ['Git & GitHub', 'Tools', GitBranch, 'orange', 72],
  ['VS Code', 'Tools', Code2, 'cyan', 84]
];

const projects = [
  {
    id: '01',
    title: 'Weather App',
    type: 'Live data application',
    description:
      'A weather forecasting interface that fetches current weather information from the OpenWeather API and presents it in a clear, user-friendly layout.',
    stack: ['React', 'OpenWeather API', 'CSS'],
    icon: CloudSun,
    art: 'weather',
    status: 'API-based project'
  },
  {
    id: '02',
    title: 'E-commerce Website',
    type: 'Online shopping experience',
    description:
      'A mini e-commerce application centered on product discovery and a shopping cart, with payment integration included in the project scope.',
    stack: ['MERN Stack', 'MongoDB', 'React'],
    icon: ShoppingBag,
    art: 'shop',
    status: 'Full-stack project'
  },
  {
    id: '03',
    title: 'Portfolio Website',
    type: 'Personal brand',
    description:
      'A personal portfolio website to present development skills, project work and professional information in one responsive experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: Globe,
    art: 'portfolio',
    status: 'Web project'
  }
];

const competencies = [
  'Programming languages',
  'Code structure & architecture',
  'Web performance optimization',
  'Front-end & back-end web development',
  'Agile leadership or scrum master',
  'Agile software development',
  'Test driven development',
  'Source control'
];

// HEADER COMPONENT
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-symbol">&lt;/&gt;</span>
        NAVEEN
        <span className="brand-dot">.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {[
          ['Home', '#home'],
          ['About', '#about'],
          ['Skills', '#skills'],
          ['Projects', '#projects'],
          ['Contact', '#contact']
        ].map(([name, href]) => (
          <a
            key={name}
            href={href}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Hire me <ArrowUpRight size={15} />
      </a>
    </header>
  );
}

// HERO COMPONENT
function Hero() {
  return (
    <section className="hero page-width" id="home">
      <div className="hero-copy reveal">
        <div className="availability">
          <span className="pulse" />
          OPEN TO OPPORTUNITIES
        </div>

        <p className="eyebrow">HELLO, I'M NAVEEN M</p>

        <h1>
          I build for the web.
          <br />
          <span className="gradient">
            Ideas into interfaces.
          </span>
        </h1>

        <p className="hero-description">
          I'm a web developer with a foundation in programming
          and responsive web development. I enjoy building useful
          digital experiences and learning through real-world projects.
        </p>

        <div className="hero-buttons">
          <a className="button primary" href="#projects">
            View my work <ArrowUpRight size={16} />
          </a>

          <a className="button secondary" href="#contact">
            <Mail size={15} /> Contact me
          </a>
        </div>

        <div className="tech-row">
          <span>TECHNOLOGIES I WORK WITH</span>

          <div className="tech-badges">
            <b className="html">HTML</b>
            <b className="js">JS</b>
            <b className="react">⚛</b>
            <b className="node">Node</b>
            <b className="db">DB</b>
            <b className="git">Git</b>
          </div>
        </div>
      </div>

      <div className="hero-art reveal">
        <div className="halo halo-one" />
        <div className="halo halo-two" />

        <div className="profile-orb">
          <div className="orb-grid" />

          <div className="developer-avatar">
            <div className="avatar-hair" />

            <div className="avatar-face">
              <span className="eye left" />
              <span className="eye right" />
              <span className="nose" />
              <span className="mouth" />
            </div>

            <div className="avatar-neck" />
            <div className="avatar-shirt" />
            <div className="shirt-collar" />
          </div>

          <div className="orb-caption">
            <span className="caption-icon">
              <Code2 size={16} />
            </span>

            <div>
              <strong>Web Developer</strong>
              <small>Build · Learn · Improve</small>
            </div>
          </div>
        </div>

        <div className="floating-code">
          <div className="code-title">
            <span />
            <span />
            <span />
            <small>app.jsx</small>
          </div>

          <pre>
            <i>const</i> developer = {'{'}
            {'\n'}
            {'  '}name: <b>'Naveen'</b>,
            {'\n'}
            {'  '}focus: <b>'Web development'</b>,
            {'\n'}
            {'  '}mindset: <em>'Keep learning'</em>
            {'\n'}
            {'}'}
          </pre>
        </div>

        <div className="float-tag">
          <Sparkles size={14} />
          Turning ideas into web experiences
        </div>
      </div>

      <a className="scroll-hint" href="#about">
        <span>
          <ArrowDown size={13} />
        </span>
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

// ABOUT COMPONENT
function About() {
  return (
    <section className="section page-width" id="about">
      <div className="section-title reveal">
        <p className="eyebrow">GET TO KNOW ME</p>

        <h2>
          Curious by nature.
          <br />
          <span className="dim">Developer by choice.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p className="lead">
            Enthusiastic and detail-oriented developer with
            a focus on responsive web applications.
          </p>

          <p>
            I have a foundation in programming and web development,
            and I’m eager to apply what I know to practical problems.
            I value readable code, thoughtful interfaces, teamwork
            and continuous improvement.
          </p>

          <p>
            My goal is to keep building, strengthen my development
            skills and contribute to products that people find
            genuinely useful.
          </p>

          <a href="#contact" className="inline-link">
            Let's connect <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="fact-grid reveal">
          {[
            [GraduationCap, '2022–2026', 'B.Tech IT'],
            [Code2, 'Web', 'Development focus'],
            [Layers3, 'Full Stack', 'Frontend + backend'],
            [Zap, 'Growth mindset', 'Learn by building']
          ].map(([Icon, title, subtitle]) => (
            <div className="fact-card" key={title}>
              <Icon />
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="competency-box reveal">
        <div className="competency-heading">
          <span className="eyebrow">CORE COMPETENCIES</span>
          <span className="line" />
        </div>

        <div className="competency-list">
          {competencies.map((item) => (
            <span key={item}>
              <Check size={14} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// SKILLS COMPONENT
function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="page-width">
        <div className="section-title centered reveal">
          <p className="eyebrow">MY TOOLKIT</p>

          <h2>
            Skills I bring{' '}
            <span className="gradient">to the table.</span>
          </h2>

          <p className="section-subtitle">
            A growing toolkit for creating responsive,
            useful web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(
            ([name, group, Icon, color, level]) => (
              <article
                className="skill-card reveal"
                key={name}
              >
                <div className={`skill-icon ${color}`}>
                  <Icon size={19} />
                </div>

                <div className="skill-body">
                  <div className="skill-label">
                    <strong>{name}</strong>
                    <span>{group}</span>
                  </div>

                  <div className="progress">
                    <span
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <p className="skills-footnote">
          Progress bars are visual indicators, not formal
          assessment scores.
        </p>
      </div>
    </section>
  );
}

// PROJECTS COMPONENT
function Projects() {
  return (
    <section className="section page-width" id="projects">
      <div className="section-title reveal">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>
          Projects built to{' '}
          <span className="gradient">learn by doing.</span>
        </h2>

        <p className="section-subtitle">
          A snapshot of projects listed in my resume.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(
          ({
            id,
            title,
            type,
            description,
            stack,
            icon: Icon,
            art,
            status
          }) => (
            <article
              className="project-card reveal"
              key={id}
            >
              <div className={`project-visual ${art}`}>
                <div className="mock-window">
                  <div className="mock-top">
                    <span />
                    <span />
                    <span />

                    <small>
                      {art === 'weather'
                        ? 'weather.app'
                        : art === 'shop'
                          ? 'storefront'
                          : 'portfolio.dev'}
                    </small>
                  </div>

                  {art === 'weather' ? (
                    <div className="weather-mock">
                      <Icon size={42} />
                      <strong>28°</strong>
                      <span>Partly cloudy</span>

                      <div className="weather-bars">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  ) : art === 'shop' ? (
                    <div className="shop-mock">
                      <div className="shop-nav" />

                      <div className="product-row">
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="shop-lines">
                        <b />
                        <b />
                      </div>
                    </div>
                  ) : (
                    <div className="portfolio-mock">
                      <div />
                      <div />
                      <div />
                      <span />
                    </div>
                  )}
                </div>

                <span className="visual-label">
                  {id} / {type.toUpperCase()}
                </span>
              </div>

              <div className="project-info">
                <div className="project-type">
                  {type}
                  <span>{id}</span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tags">
                  {stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span className="project-state">
                    <i />
                    {status}
                  </span>

                  <a
                    href="#contact"
                    aria-label={`Ask about ${title}`}
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

// EDUCATION COMPONENT
function Education() {
  return (
    <section className="section page-width education-section">
      <div className="education-panel reveal">
        <div className="education-intro">
          <p className="eyebrow">EDUCATION</p>

          <h2>
            Building a strong
            <br />
            <span className="dim">
              technical foundation.
            </span>
          </h2>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={23} />
          </div>

          <div>
            <span className="education-date">
              2022 — 2026
            </span>

            <h3>Bachelor of Technology</h3>

            <p>Information Technology</p>

            <strong>The Kavery Engineering College</strong>
          </div>

          <span className="education-mark">B.TECH</span>
        </div>
      </div>
    </section>
  );
}

// CONTACT COMPONENT
function Contact() {
  return (
    <section
      className="section page-width contact-section"
      id="contact"
    >
      <div className="contact-panel reveal">
        <div className="contact-copy">
          <p className="eyebrow">LET'S WORK TOGETHER</p>

          <h2>
            Have an idea?
            <br />
            <span className="gradient">Let's talk.</span>
          </h2>

          <p>
            I’m interested in opportunities where I can contribute,
            learn from a team and keep growing as a web developer.
          </p>

          <a
            className="button primary"
            href="mailto:knpnaveen681@gmail.com?subject=Web%20Developer%20Opportunity"
          >
            Email me <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:knpnaveen681@gmail.com">
            <span className="contact-icon">
              <Mail size={17} />
            </span>

            <span>
              <small>EMAIL</small>
              <strong>knpnaveen681@gmail.com</strong>
            </span>

            <ArrowUpRight size={15} />
          </a>

          <div className="contact-link-static">
            <span className="contact-icon">
              <Phone size={17} />
            </span>

            <span>
              <small>PHONE</small>
              <strong>9043268320</strong>
            </span>
          </div>

          <div className="contact-link-static">
            <span className="contact-icon">
              <MapPin size={17} />
            </span>

            <span>
              <small>LOCATION</small>
              <strong>
                Keelmampattu, Cuddalore, Tamil Nadu
              </strong>
            </span>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Github size={17} />
            </span>

            <span>
              <small>GITHUB</small>
              <strong>Add your GitHub profile</strong>
            </span>

            <ExternalLink size={14} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Linkedin size={17} />
            </span>

            <span>
              <small>LINKEDIN</small>
              <strong>Add your LinkedIn profile</strong>
            </span>

            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="footer page-width">
      <a className="brand" href="#home">
        <span className="brand-symbol">&lt;/&gt;</span>
        NAVEEN
        <span className="brand-dot">.</span>
      </a>

      <p>
        Made with curiosity and a commitment to keep improving.
      </p>

      <a className="back-top" href="#home">
        BACK TO TOP <ArrowUpRight size={13} />
      </a>

      <small>
        © {new Date().getFullYear()} Naveen M. All rights reserved.
      </small>
    </footer>
  );
}

// MAIN APP COMPONENT
export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
