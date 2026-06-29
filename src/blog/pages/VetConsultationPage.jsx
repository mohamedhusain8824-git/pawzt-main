import { Reveal, RevealSlide } from "../components/Reveal";
import BackButton from "../components/BackButton";
import { vcFeatures, vets, vcPlans, vcTestimonials } from "../data/vetConsultationData";

/* ─────────────────────────────────────────────
   VET CONSULTATION PAGE
───────────────────────────────────────────── */
export default function VetConsultationPage({ onBack }) {
  return (
    <div>
      <BackButton onBack={onBack} />
      <section className="vc-hero">
        <Reveal>
          <div>
            <div className="vc-badge">🏥 Licensed Vets · 950+ Specialists</div>
            <h1 className="vc-title">Expert<br /><span className="vc-title-accent">Vet Consultation</span><br />Online & In-Clinic</h1>
            <p className="vc-desc">Connect with licensed veterinarians in minutes for video consultations, health checkups, vaccinations, prescriptions, and chronic condition management. Your pet's complete health record, always at your fingertips.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}><span className="pill">🩺 Licensed Vets</span><span className="pill">📹 Video Consults</span><span className="pill">💊 Prescriptions</span><span className="pill">📋 Health Records</span></div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}><button className="btn-primary-amber">Book a Vet →</button><button className="btn-outline-amber">View Specialists</button></div>
          </div>
        </Reveal>
        <RevealSlide delay={120}>
          <div className="vc-card">
            <div className="vc-card-header"><div className="vc-card-title">🏥 Vet Consultation</div><div className="vc-card-badge">4.9 ★</div></div>
            <div style={{ fontSize: "11px", color: "#888", marginBottom: "14px" }}>Starts at ₹399/session</div>
            <div className="vc-mini-stats">
              <div className="vc-mini-stat"><strong>950<span style={{ color: "#d97706" }}>+</span></strong><span>Licensed Vets</span></div>
              <div className="vc-mini-stat"><strong>&lt;10<span style={{ color: "#d97706" }}>m</span></strong><span>Avg Wait</span></div>
              <div className="vc-mini-stat"><strong>40<span style={{ color: "#d97706" }}>+</span></strong><span>Specialisations</span></div>
            </div>
            {[{ name: "Lakshmi T.", stars: "★★★★★", text: "Dr. Nair diagnosed an early ear infection in 5 minutes. Medication worked in 3 days!", color: "#d97706", initials: "L" }, { name: "Sanjay M.", stars: "★★★★★", text: "Prescription sent directly to the pharmacy. I did not need to drive anywhere at all!", color: "#8b5cf6", initials: "S" }].map((r, i) => (
              <div className="review-item" key={r.name} style={i === 1 ? { borderBottom: "none" } : {}}><div className="review-avatar" style={{ background: r.color }}>{r.initials}</div><div><div className="review-name">{r.name}</div><div className="review-stars">{r.stars}</div><div className="review-text">{r.text}</div></div></div>
            ))}
            <div className="vc-card-footer"><div className="sync-dot"></div><span>🔄 Health records synced</span></div>
          </div>
        </RevealSlide>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="vc-section-label">— Health Features</div><h2 className="section-title">Complete Pet <span style={{ color: "#d97706" }}>Health Platform</span></h2><p className="section-subtitle">Everything your pet needs — from a quick query to specialist referrals.</p></Reveal>
        <div className="features-grid">{vcFeatures.map((f, i) => <Reveal key={f.title} delay={i * 60}><div className="feature-card"><div className={`feat-icon-box ${f.iconBg}`}>{f.icon}</div><div className="feature-title">{f.title}</div><p className="feature-desc">{f.desc}</p></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="vc-section-label">— Our Vets</div><h2 className="section-title">Meet Your <span style={{ color: "#d97706" }}>Pawzy Vets</span></h2><p className="section-subtitle">Board-certified specialists across all major veterinary fields.</p></Reveal>
        <div className="vets-grid">{vets.map((v, i) => <Reveal key={v.name} delay={i * 80}><div className="vet-card"><div className="vet-avatar" style={{ background: v.avatarColor }}>{v.initials}</div><div className="vet-name">{v.name}</div><div className="vet-degree">{v.degree}</div><div className="vet-rating-row"><span className="vet-stars">★★★★★</span><span className="vet-rating-txt">{v.rating}</span><span className="vet-reviews">({v.reviews} reviews)</span></div><div className="vet-price">{v.price}<span>/session</span></div><div className="vet-tags">{v.tags.map(t => <span className="vet-tag" key={t}>{t}</span>)}</div></div></Reveal>)}</div>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="vc-section-label">— Consultation Plans</div><h2 className="section-title">Health Plans for <span style={{ color: "#d97706" }}>Every Pet</span></h2><p className="section-subtitle">Flexible consultation options to suit every need and budget.</p></Reveal>
        <div className="pricing-grid">{vcPlans.map((p, i) => <Reveal key={p.name} delay={i * 80}><div className={`vc-pricing-card ${p.popular ? "popular" : ""}`}>{p.popular && <div className="vc-popular-badge">Recommended</div>}<div className={`pkg-icon-box ${p.iconBg}`}>{p.icon}</div><div className="pricing-name">{p.name}</div><div className="pricing-desc">{p.desc}</div><div className="pricing-price">{p.price}<span>{p.unit}</span></div><div className="pricing-features">{p.features.map(f => <div className="pricing-feat" key={f}><span className="vc-feat-check">✓</span> {f}</div>)}</div></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="vc-section-label">— Reviews</div><h2 className="section-title">Owners Who <span style={{ color: "#d97706" }}>Trust Pawzy Vets</span></h2><p className="section-subtitle">Real outcomes from real pet owners.</p></Reveal>
        <div className="testimonials-grid">{vcTestimonials.map((t, i) => <Reveal key={t.name} delay={i * 80}><div className="testimonial-card"><div className="test-stars">{"★".repeat(t.stars)}</div><p className="test-text">"{t.text}"</p><div className="test-author"><div className="test-avatar" style={{ background: t.color }}>{t.initials}</div><div><div className="test-name">{t.name}</div><div className="test-info">{t.info}</div><div className="test-time">{t.time}</div></div></div></div></Reveal>)}</div>
      </section>

      <Reveal>
        <div className="vc-cta-banner">
          <div style={{ zIndex: 1 }}><div className="vc-cta-icon">🏥</div><div className="vc-cta-title">Book a Vet Consultation Today</div><div className="vc-cta-sub">Connect with a licensed vet in under 10 minutes. Your pet's health comes first.</div></div>
          <div className="vc-cta-right"><div className="vc-cta-btns"><button className="btn-cta-white">Book a Vet Now →</button><button className="btn-cta-outline-amber">Browse All Specialists</button></div><div className="vc-cta-note">No commitment needed · Cancel any time</div></div>
        </div>
      </Reveal>
    </div>
  );
}
