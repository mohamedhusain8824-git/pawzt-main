import { Reveal, RevealSlide } from "../components/Reveal";
import BackButton from "../components/BackButton";
import { groomingFeatures, groomers, groomingPackages, groomingTestimonials } from "../data/groomingData";

/* ─────────────────────────────────────────────
   GROOMING PAGE
───────────────────────────────────────────── */
export default function GroomingPage({ onBack }) {
  return (
    <div>
      <BackButton onBack={onBack} color="#be185d" />
      <section className="gr-hero">
        <Reveal>
          <div>
            <div className="gr-badge">✂️ Certified Groomers · 1,200+ Experts</div>
            <h1 className="gr-title">Premium<br /><span className="gr-title-accent">Pet Grooming</span><br />Home or Mobile</h1>
            <p className="gr-desc">Professional certified groomers come to your door with a fully equipped mobile salon — or visit a partner studio near you. Bathing, coat care, nail trimming, ear cleaning, and breed-specific styling with premium pet-safe products.</p>
            <div className="gr-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}><span className="pill">🚐 Mobile Grooming</span><span className="pill">✂️ Breed Styling</span><span className="pill">🌿 Premium Products</span><span className="pill">📸 Before & After</span></div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}><button className="btn-primary-pink">Book Grooming →</button><button className="btn-outline-pink">View Groomers</button></div>
          </div>
        </Reveal>
        <RevealSlide delay={120}>
          <div className="gr-card">
            <div className="gr-card-header"><div className="gr-card-title">✂️ Grooming</div><div className="gr-card-rating">★ 4.8</div></div>
            <div className="gr-card-sub">Starts at ₹499/session</div>
            <div style={{ background: "rgba(236,72,153,.06)", borderRadius: "10px", padding: "4px 10px", fontSize: "11px", color: "#be185d", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ec4899", animation: "pulse 1.2s infinite", display: "inline-block" }}></span>
              7 groomers available today
            </div>
            <div className="gr-mini-stats">
              <div className="gr-mini-stat"><strong>1,200<span style={{ color: "#ec4899" }}>+</span></strong><span>Groomers</span></div>
              <div className="gr-mini-stat"><strong>30K<span style={{ color: "#ec4899" }}>+</span></strong><span>Sessions Done</span></div>
              <div className="gr-mini-stat"><strong>100<span style={{ color: "#ec4899" }}>%</span></strong><span>Pet Safe</span></div>
            </div>
            {[{ name: "Tanya B.", stars: "★★★★★", text: "Mobile van was so well-equipped. Luna looked gorgeous. Before/after photos incredible!", color: "#ec4899", initials: "T" }, { name: "Rahul D.", stars: "★★★★★", text: "My poodle's teddy bear cut was perfect. Pooja knew breed styling inside and out.", color: "#f472b6", initials: "R" }].map((r, i) => (
              <div className="review-item" key={r.name} style={i === 1 ? { borderBottom: "none" } : {}}><div className="review-avatar" style={{ background: r.color }}>{r.initials}</div><div><div className="review-name">{r.name}</div><div className="review-stars">{r.stars}</div><div className="review-text">{r.text}</div></div></div>
            ))}
            <div className="gr-card-footer"><div className="gr-dot"></div><span>📸 Before & after photos included</span></div>
          </div>
        </RevealSlide>
      </section>

      <section className="section" style={{ background: "#fff5fb" }}>
        <Reveal><div className="gr-section-label">— Services</div><h2 className="gr-section-title">Everything in One <span style={{ color: "#ec4899" }}>Grooming Session</span></h2><p className="section-subtitle">Every booking includes these services tailored to your pet's breed and needs.</p></Reveal>
        <div className="features-grid">{groomingFeatures.map((f, i) => <Reveal key={f.title} delay={i * 60}><div className="gr-feature-card"><div className={`gr-feat-icon ${f.iconBg}`}>{f.icon}</div><div className="feature-title">{f.title}</div><p className="feature-desc">{f.desc}</p></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="gr-section-label">— Top Groomers</div><h2 className="gr-section-title">Your Pet's <span style={{ color: "#ec4899" }}>Grooming Artists</span></h2><p className="section-subtitle">Certified groomers in your area — mobile or in-studio.</p></Reveal>
        <div className="groomers-grid">{groomers.map((g, i) => <Reveal key={g.name} delay={i * 80}><div className="groomer-card" style={{ flexDirection: "column", textAlign: "center" }}><div className="groomer-avatar" style={{ background: g.avatarColor, margin: "0 auto 10px" }}>{g.initials}</div><div className="groomer-name">{g.name}</div><div className="groomer-role">{g.role}</div><div className="groomer-rating-row" style={{ justifyContent: "center" }}><span className="groomer-stars">★★★★★</span><span className="groomer-rating-txt">{g.rating}</span><span className="groomer-reviews">({g.reviews})</span></div><div className="groomer-tags" style={{ justifyContent: "center", marginBottom: 12 }}>{g.tags.map(t => <span className="groomer-tag" key={t}>{t}</span>)}</div><div className="groomer-price">{g.price}<span>/session</span></div></div></Reveal>)}</div>
      </section>

      <section className="section" style={{ background: "#fff5fb" }}>
        <Reveal><div className="gr-section-label">— Grooming Packages</div><h2 className="gr-section-title">Choose Your <span style={{ color: "#ec4899" }}>Glow-Up Package</span></h2><p className="section-subtitle">Flexible grooming packages for every coat type and budget.</p></Reveal>
        <div className="pricing-grid">{groomingPackages.map((p, i) => <Reveal key={p.name} delay={i * 80}><div className={`gr-pricing-card ${p.popular ? "popular" : ""}`}>{p.popular && <div className="gr-popular-badge">Top Pick</div>}<div className={`gr-pkg-icon ${p.iconBg}`}>{p.icon}</div><div className="pricing-name">{p.name}</div><div className="pricing-desc">{p.desc}</div><div className="pricing-price" style={{ color: "#ec4899" }}>{p.price}<span style={{ color: "#888", fontSize: 13, fontWeight: 400 }}>{p.unit}</span></div><div className="pricing-features">{p.features.map(f => <div className="pricing-feat" key={f}><span className="gr-feat-check">✓</span> {f}</div>)}</div></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="gr-section-label">— Reviews</div><h2 className="gr-section-title">Freshly Groomed, <span style={{ color: "#ec4899" }}>Totally Glowing</span></h2><p className="section-subtitle">Real transformations from real pet owners.</p></Reveal>
        <div className="testimonials-grid">{groomingTestimonials.map((t, i) => <Reveal key={t.name} delay={i * 80}><div className="gr-testimonial-card"><div className="test-stars">{"★".repeat(t.stars)}</div><p className="test-text">"{t.text}"</p><div className="test-author"><div className="test-avatar" style={{ background: t.color }}>{t.initials}</div><div><div className="test-name">{t.name}</div><div className="test-info">{t.info}</div><div className="test-time">{t.time}</div></div></div></div></Reveal>)}</div>
      </section>

      <Reveal>
        <div className="gr-cta-banner">
          <div style={{ zIndex: 1 }}><div className="gr-cta-icon">✂️</div><div className="gr-cta-title">Book Your Pet's Glow-Up</div><div className="gr-cta-sub">Over 30,000 pets have left our sessions looking and feeling absolutely beautiful. Yours is next.</div></div>
          <div className="gr-cta-right"><div className="gr-cta-btns"><button className="btn-cta-white-pink">Book Grooming Now →</button><button className="btn-cta-outline-pink">Browse All 1,200+ Groomers</button></div><div className="gr-cta-note">No commitment needed · Cancel any time</div></div>
        </div>
      </Reveal>
    </div>
  );
}
