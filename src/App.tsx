import { useEffect, useRef } from 'react';
import { contactLinks, methodology, navItems, quantFocus, researchFocus, teamMembers, teamTracks } from './data/siteData';

const sectionIds = ['research', 'quant', 'pipeline', 'team', 'contact'] as const;

export function App() {
  const teamTrackRef = useRef<HTMLDivElement | null>(null);

  const scrollTeam = (direction: 'left' | 'right') => {
    const track = teamTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.member-card');
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 14;
    const amount = cardWidth + gap;
    track.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-item'));

    const onNavClick = (e: Event) => {
      e.preventDefault();
      const current = e.currentTarget as HTMLAnchorElement;
      const targetId = current.getAttribute('href')?.replace('#', '');
      const target = targetId === 'hero' ? document.querySelector('.hero') : document.getElementById(targetId || '');
      if (!target) return;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top: Math.max(offsetTop, 0), behavior: 'smooth' });
      navLinks.forEach((link) => link.classList.remove('active'));
      current.classList.add('active');
    };

    navLinks.forEach((link) => link.addEventListener('click', onNavClick));

    const onScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const sectionEntries: { id: string; top: number; height: number }[] = [
        { id: 'hero', top: 0, height: window.innerHeight },
        ...sectionIds
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => Boolean(el))
          .map((el) => ({ id: el.id, top: el.offsetTop, height: el.offsetHeight }))
      ];

      sectionEntries.forEach((section) => {
        if (scrollPosition < section.top || scrollPosition >= section.top + section.height) return;
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) link.classList.add('active');
        });
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', onNavClick));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-pill">
          {navItems.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <i className={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <main className="layout-shell">
        <section id="hero" className="hero">
          <div className="hero-copy">
            <h1 className="hero-brand">POLYDEVS</h1>
            <h2 className="hero-subtitle">Designing high-quality natural-language AI systems for next-generation users</h2>
            <p>
              Polydevs develops long-horizon autonomous AI and quantitative intelligence systems with a strong focus on reliability, reasoning quality, and production discipline.
            </p>
            <a href="#contact" className="btn-primary">
              Collaborate with the team
            </a>
          </div>
        </section>

        <section id="research" className="section-card asym left-heavy">
          <div className="section-intro">
            <p className="eyebrow">Primary Focus</p>
            <h2>{researchFocus.title}</h2>
            <p className="section-text">{researchFocus.description}</p>
          </div>
          <ul className="pill-list">
            {researchFocus.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="quant" className="section-card asym right-heavy">
          <ul className="pill-list">
            {quantFocus.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="section-intro">
            <p className="eyebrow">Secondary Focus</p>
            <h2>{quantFocus.title}</h2>
            <p className="section-text">{quantFocus.description}</p>
          </div>
        </section>

        <section id="pipeline" className="section-card asym left-heavy">
          <div className="section-intro">
            <p className="eyebrow">Research Pipeline</p>
            <h2>From research hypotheses to production-grade intelligence</h2>
            <p className="section-text">
              A disciplined operating flow that turns experimental ideas into measurable, deployable systems.
            </p>
          </div>
          <ol className="pipeline-list">
            {methodology.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="team" className="section-card team-section">
          <div className="team-layout">
            <div className="section-intro team-intro">
              <p className="eyebrow">Team Snapshot</p>
              <h2>Structured to scale as research tracks expand</h2>
              <p className="section-text">
                Polydevs is organized as a modular research team where contributors can be added without changing the core operating
                model.
              </p>
              <ul className="pill-list">
                {teamTracks.map((track) => (
                  <li key={track}>{track}</li>
                ))}
              </ul>
            </div>
            <div className="team-slider-wrap">
              <div className="team-slider-controls">
                <button type="button" className="team-nav-btn" aria-label="Previous team members" onClick={() => scrollTeam('left')}>
                  <i className="fas fa-chevron-left" />
                </button>
                <button type="button" className="team-nav-btn" aria-label="Next team members" onClick={() => scrollTeam('right')}>
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
              <div ref={teamTrackRef} className="team-grid" role="region" aria-label="Team members slider">
                {teamMembers.map((member) => (
                  <article key={member.name} className="member-card">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="section-text">{member.bio}</p>
                    <ul className="pill-list compact">
                      {member.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <a className="member-github-btn" href={member.github} target="_blank" rel="noreferrer">
                      <i className="fab fa-github" />
                      <span>GitHub</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-card contact-block asym left-heavy">
          <div className="section-intro">
            <p className="eyebrow">Contact</p>
            <h2>Open to research collaborations and strategic builds</h2>
          </div>
          <div className="contact-list">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <i className={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
