import { Reveal, RevealSlide } from "../components/Reveal";
import BackButton from "../components/BackButton";
import { walkFeatures, walkers, walkPackages, walkTestimonials } from "../data/petWalkingData";

/* ─────────────────────────────────────────────
   PET WALKING PAGE
───────────────────────────────────────────── */
export default function PetWalkingPage({ onBack }) {
  return (
    <div>
      <BackButton onBack={onBack} />
      <section className="pw-hero">
        <Reveal>
          <div>
            <div className="pw-badge">🐾 GPS-Tracked · 1,800+ Walkers</div>
            <h1 className="pw-title">Professional<br /><span className="pw-title-accent">Pet Walking</span><br />with Live GPS</h1>
            <p className="pw-desc">Certified professional walkers take your dog on safe, stimulating routes with real-time GPS tracking, photo check-ins, and post-walk fitness reports — every single day.</p>
            <div className="pw-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}><span className="pill">📍 Live GPS Map</span><span className="pill">📸 Walk Photos</span><span className="pill">📊 Fitness Stats</span><span className="pill">👥 Group or Solo</span></div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}><button className="btn-primary">Book a Walker →</button><button className="btn-outline">View All Walkers</button></div>
          </div>
        </Reveal>
        <RevealSlide delay={120}>
          <div className="pw-card">
            <div className="pw-card-top">
              <div><div className="pw-card-label"><div className="pw-card-dot"></div><div className="pw-card-title-txt">Pet Walking</div></div><div className="pw-card-sub">Starts at ₹199/walk</div></div>
              <div className="pw-card-live"><div className="pw-card-live-dot"></div>13 walks in progress now</div>
            </div>
            <div className="pw-map-placeholder">
              <svg width="260" height="90" viewBox="0 0 260 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", opacity: .4 }}>
                <path d="M20 70 Q60 20 100 50 Q140 80 180 30 Q210 10 240 40" stroke="#00c49a" strokeWidth="3" fill="none" strokeDasharray="6 3" strokeLinecap="round" />
                <circle cx="20" cy="70" r="5" fill="#00c49a" /><circle cx="240" cy="40" r="5" fill="#00a882" />
              </svg>
              <span className="pw-map-label">🗺️ Live GPS Route</span>
            </div>
            <div className="pw-stats-row">
              <div className="pw-stat-box"><div className="pw-stat-val">1,800<span>+</span></div><div className="pw-stat-lbl">Walkers</div></div>
              <div className="pw-stat-box"><div className="pw-stat-val">50K<span>+</span></div><div className="pw-stat-lbl">Walks Done</div></div>
              <div className="pw-stat-box"><div className="pw-stat-val" style={{ color: "#00c49a" }}>GPS</div><div className="pw-stat-lbl">Live Tracked</div></div>
            </div>
            <div className="pw-review-item"><div className="pw-review-avatar" style={{ background: "#00c49a" }}>K</div><div><div className="pw-review-name">Kiran P.</div><div className="pw-review-stars">★★★★★</div><div className="pw-review-text">Watched Max's entire walk live on the map. 4km covered!</div></div></div>
            <div className="pw-card-footer"><div className="pw-gps-dot"></div><div className="pw-gps-txt">🛰️ Live GPS tracking on</div></div>
          </div>
        </RevealSlide>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="section-label">— Walk Features</div><h2 className="section-title">Every Walk, <span style={{ color: "#00c49a" }}>Perfectly Tracked</span></h2><p className="section-subtitle">Professional walking services go far beyond a simple stroll</p></Reveal>
        <div className="features-grid">{walkFeatures.map((f, i) => <Reveal key={f.title} delay={i * 60}><div className="feature-card"><div className={`walk-feat-icon ${f.iconBg}`}>{f.icon}</div><div className="feature-title">{f.title}</div><p className="feature-desc">{f.desc}</p></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="section-label">— Top Walkers</div><h2 className="section-title">Your Dog's <span style={{ color: "#00c49a" }}>Favourite Walkers</span></h2><p className="section-subtitle">Handpicked walkers in your area with verified backgrounds.</p></Reveal>
        <div className="walkers-grid">{walkers.map((w, i) => <Reveal key={w.name} delay={i * 80}><div className="walker-card"><div className="walker-avatar" style={{ background: w.avatarColor }}>{w.initials}</div><div className="walker-info"><div className="walker-name">{w.name}</div><div className="walker-role">{w.role}</div><div className="walker-rating-row"><span className="walker-stars">★★★★★</span><span className="walker-rating-txt">{w.rating}</span><span className="walker-reviews">({w.reviews})</span></div><div className="walker-tags">{w.tags.map(t => <span className="walker-tag" key={t}>{t}</span>)}</div></div><div className="walker-price">{w.price}<span>/walk</span></div></div></Reveal>)}</div>
      </section>

      <section className="section" style={{ background: "#fafafa" }}>
        <Reveal><div className="section-label">— Walk Packages</div><h2 className="section-title">Packages That <span style={{ color: "#00c49a" }}>Fit Your Life</span></h2><p className="section-subtitle">Flexible walk options designed around your schedule and your dog's needs.</p></Reveal>
        <div className="pricing-grid">{walkPackages.map((p, i) => <Reveal key={p.name} delay={i * 80}><div className={`pricing-card ${p.popular ? "popular" : ""}`}>{p.popular && <div className="popular-badge">Best Value</div>}<div className={`walk-pkg-icon ${p.iconBg}`}>{p.icon}</div><div className="pricing-name">{p.name}</div><div className="pricing-desc">{p.desc}</div><div className="pricing-price">{p.price}<span>{p.unit}</span></div><div className="pricing-features">{p.features.map(f => <div className="pricing-feat" key={f}><span style={{ color: "#00c49a" }}>✓</span> {f}</div>)}</div></div></Reveal>)}</div>
      </section>

      <section className="section">
        <Reveal><div className="section-label">— Reviews</div><h2 className="section-title">Happy Dogs, <span style={{ color: "#00c49a" }}>Happy Owners</span></h2><p className="section-subtitle">Real experiences from real pet owners.</p></Reveal>
        <div className="testimonials-grid">{walkTestimonials.map((t, i) => <Reveal key={t.name} delay={i * 80}><div className="testimonial-card"><div className="test-stars">{"★".repeat(t.stars)}</div><p className="test-text">"{t.text}"</p><div className="test-author"><div className="test-avatar" style={{ background: t.color }}>{t.initials}</div><div><div className="test-name">{t.name}</div><div className="test-info">{t.info}</div><div className="test-time">{t.time}</div></div></div></div></Reveal>)}</div>
      </section>

      <Reveal>
        <div className="walk-cta-banner">
          <div style={{ zIndex: 1 }}><div className="walk-cta-icon">🐕</div><div className="walk-cta-title">Start Your Dog's Walking Journey</div><div className="walk-cta-sub">Book a GPS-tracked walk today and see your dog's fitness improve week by week.</div></div>
          <div className="walk-cta-right"><div className="walk-cta-btns"><button className="btn-cta-primary">Find a Walker Now →</button><button className="btn-cta-outline">Browse All 1,800+ Walkers</button></div><div className="walk-cta-note">No commitment needed · Cancel any time</div></div>
        </div>
      </Reveal>
    </div>
  );
}
