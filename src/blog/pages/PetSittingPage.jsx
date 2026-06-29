import { Reveal, RevealSlide } from "../components/Reveal";
import BackButton from "../components/BackButton";
import { sitters, psFeatures, psPricingPlans, psTestimonials } from "../data/petSittingData";

/* ─────────────────────────────────────────────
   PET SITTING PAGE
───────────────────────────────────────────── */
export default function PetSittingPage({ onBack }) {
  return (
    <div>
      <BackButton onBack={onBack} />
      <section className="ps-hero">
        <Reveal>
          <div>
            <div className="ps-badge">🐾 Pet Sitting · Service Detail</div>
            <h1 className="ps-title">Premium<br /><span className="ps-title-accent">Pet Sitting</span><br />at Your Home</h1>
            <p className="ps-desc">Your pet stays comfortable in their familiar space with a background-verified sitter who sends real-time photos, detailed daily reports, and keeps them on their usual routine — so you can travel with complete peace of mind.</p>
            <div className="ps-pills">
              <span className="pill">🛡️ Background Verified</span><span className="pill">📸 Live Updates</span><span className="pill">📍 In-Home Care</span><span className="pill">🆘 24/7 Support</span>
            </div>
            <div className="ps-ctas"><button className="btn-primary">Book a Sitter →</button><button className="btn-outline">View All Sitters</button></div>
          </div>
        </Reveal>
        <RevealSlide delay={120}>
          <div className="ps-card">
            <div className="ps-card-header"><div className="ps-card-title">🐾 Pet Sitting</div><div className="ps-card-badge">Active</div></div>
            <div className="ps-mini-stats">
              <div className="ps-mini-stat"><strong>2,400<span style={{ color: "#00c49a" }}>+</span></strong><span>Sitters</span></div>
              <div className="ps-mini-stat"><strong>98<span style={{ color: "#00c49a" }}>%</span></strong><span>Satisfaction</span></div>
              <div className="ps-mini-stat"><strong>95<span style={{ color: "#00c49a" }}>+</span></strong><span>Near You</span></div>
            </div>
            {[{ name: "Kavya R.", stars: "★★★★★", text: "She sent updates every hour! Our dog loved her.", color: "#00c49a", initials: "KR" }, { name: "Deepak S.", stars: "★★★★★", text: "Super reliable, our cats were so calm when we got back.", color: "#8b5cf6", initials: "DS" }].map(r => (
              <div className="review-item" key={r.name}><div className="review-avatar" style={{ background: r.color }}>{r.initials}</div><div><div className="review-name">{r.name}</div><div className="review-stars">{r.stars}</div><div className="review-text">{r.text}</div></div></div>
            ))}
          </div>
        </RevealSlide>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="section-label">What's Included</div><h2 className="section-title">Everything Your Pet Deserves</h2><p className="section-subtitle">Every booking includes these standard features at no extra charge.</p></Reveal>
        <div className="features-grid">{psFeatures.map((f, i) => <Reveal key={f.title} delay={i * 60}><div className="feature-card"><div className="feature-icon">{f.icon}</div><div className="feature-title">{f.title}</div><p className="feature-desc">{f.desc}</p></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="section-label">Top Rated</div><h2 className="section-title">Meet Your Pawzy Sitters</h2><p className="section-subtitle">Handpicked sitters in your area with verified backgrounds.</p></Reveal>
        <div className="sitters-grid">{sitters.map((s, i) => <Reveal key={s.name} delay={i * 80}><div className="sitter-card"><div className="sitter-avatar" style={{ background: s.avatarColor }}>{s.initials}</div><div className="sitter-name">{s.name}</div><div className="sitter-exp">{s.exp}</div><div className="sitter-stats"><div className="sitter-stat"><strong>{s.walks}</strong><span>Sessions</span></div><div className="sitter-stat"><strong>{s.rating}</strong><span>Rating</span></div><div className="sitter-stat"><strong>{s.reviews}</strong><span>Reviews</span></div></div><div className="sitter-tags">{s.tags.map(t => <span className="sitter-tag" key={t}>{t}</span>)}</div><div className="sitter-price">{s.price}<span>/visit</span></div></div></Reveal>)}</div>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="section-label">Pricing</div><h2 className="section-title">Simple, Transparent Pricing</h2><p className="section-subtitle">No hidden fees. Pay only for what you book.</p></Reveal>
        <div className="pricing-grid">{psPricingPlans.map((p, i) => <Reveal key={p.name} delay={i * 80}><div className={`pricing-card ${p.popular ? "popular" : ""}`}>{p.popular && <div className="popular-badge">Most Popular</div>}<div className="pricing-name">{p.name}</div><div className="pricing-desc">{p.desc}</div><div className="pricing-price">{p.price}<span>/{p.unit.split(" ")[1]}</span></div><div className="pricing-unit">{p.unit}</div><div className="pricing-features">{p.features.map(f => <div className="pricing-feat" key={f}><span style={{ color: "#00c49a" }}>✓</span> {f}</div>)}</div></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="section-label">Reviews</div><h2 className="section-title">Owners Who Trust Pawzy</h2><p className="section-subtitle">Real experiences from real pet owners.</p></Reveal>
        <div className="testimonials-grid">{psTestimonials.map((t, i) => <Reveal key={t.name} delay={i * 80}><div className="testimonial-card"><div className="test-stars">{"★".repeat(t.stars)}</div><p className="test-text">"{t.text}"</p><div className="test-author"><div className="test-avatar" style={{ background: t.color }}>{t.initials}</div><div><div className="test-name">{t.name}</div><div className="test-info">{t.info}</div></div></div></div></Reveal>)}</div>
      </section>

      <Reveal><div className="cta-banner"><div><div className="cta-title">Ready to Book a Sitter?</div><div className="cta-sub">Join 25,000+ pet owners who already trust Pawzy for daily care.</div></div><div className="cta-right"><span className="cta-count">Browse All 2,400+ Sitters</span><button className="btn-white">Book a Sitter →</button></div></div></Reveal>
    </div>
  );
}
