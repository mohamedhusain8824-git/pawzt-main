import { Reveal } from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export default function HomePage({ onNavigate }) {
  return (
    <div>
      <section className="hero">
        <Reveal><div className="hero-badge">✦ Premium Pet Care Services</div></Reveal>
        <Reveal delay={80}><div className="hero-title">Your Complete</div></Reveal>
        <Reveal delay={140}>
          <div className="hero-title-colored">
            <span className="hero-title-teal">Pet Care </span>
            <span className="hero-title-purple">Marketplace</span>
          </div>
        </Reveal>
        <Reveal delay={200}><p className="hero-subtitle">Five world-class services. Thousands of verified providers. One beautifully designed platform — built for pets and the people who love them.</p></Reveal>
        <Reveal delay={260}>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">8K<span>+</span></div><div className="stat-label">Providers</div></div>
            <div className="stat"><div className="stat-num">25K<span>+</span></div><div className="stat-label">Happy Owners</div></div>
            <div className="stat"><div className="stat-num">4.9 <span className="star">★</span></div><div className="stat-label">Rating</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Services</div></div>
          </div>
        </Reveal>
        <Reveal delay={320}><div className="explore-label">EXPLORE ALL SERVICES</div></Reveal>
      </section>

      <div className="services-grid">
        {services.slice(0, 3).map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <ServiceCard service={s} onNavigate={onNavigate} />
          </Reveal>
        ))}
      </div>
      <div className="service-row2">
        {services.slice(3).map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <ServiceCard service={s} onNavigate={onNavigate} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="trust-bar">
          <div className="trust-item"><div className="trust-icon trust-icon-teal">🛡️</div><div className="trust-text"><strong>Background Verified</strong><span>Every provider is checked</span></div></div>
          <div className="trust-item"><div className="trust-icon trust-icon-blue">📍</div><div className="trust-text"><strong>Live GPS Tracking</strong><span>Real-time on every service</span></div></div>
          <div className="trust-item"><div className="trust-icon trust-icon-orange">🔒</div><div className="trust-text"><strong>Secure Payments</strong><span>Protected by Pawzy Guarantee</span></div></div>
        </div>
      </Reveal>
    </div>
  );
}
