import { Reveal, RevealSlide } from "../components/Reveal";
import BackButton from "../components/BackButton";
import { lbdFeatures, lbdRooms, lbdPackages, lbdReviews } from "../data/boardingData";

/* ─────────────────────────────────────────────
   LUXURY BOARDING PAGE
───────────────────────────────────────────── */
export default function BoardingPage({ onBack }) {
  return (
    <div>
      <BackButton onBack={onBack} color="#1d4ed8" />

      {/* ── HERO ── */}
      <section className="lbd-hero">
        <Reveal>
          <div>
            <div className="lbd-checkin-pill">
              <span className="lbd-checkin-dot"></span>
              Premium Facilities · 640+ Boarding Centres
            </div>
            <h1 className="lbd-hero-title">
              Luxury<br />
              <span className="lbd-hero-title-accent">Pet Boarding</span><br />
              Feels Like Home
            </h1>
            <p className="lbd-hero-desc">
              Safe, comfortable, and genuinely loving boarding facilities with private suites, 24/7 supervision, personalised feeding schedules, daily play sessions, and live photo updates — travel freely, completely worry-free.
            </p>
            <div className="lbd-hero-pills">
              <span className="lbd-pill">🛏️ Private Suites</span>
              <span className="lbd-pill">📸 Daily Updates</span>
              <span className="lbd-pill">🏥 On-call Vet</span>
              <span className="lbd-pill">🎾 Activity Sessions</span>
            </div>
            <div className="lbd-hero-btns">
              <button className="btn-lbd-primary">Reserve a Stay →</button>
              <button className="btn-lbd-outline">View Facilities</button>
            </div>
          </div>
        </Reveal>

        <RevealSlide delay={140}>
          <div className="lbd-hero-card">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(59,130,246,.08)", color: "#1d4ed8", border: "1px solid rgba(59,130,246,.2)", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", animation: "pulse 1.2s infinite", display: "inline-block" }}></span>
              28 pets checked in today
            </div>
            <div className="lbd-card-topbar">
              <div className="lbd-card-icon-box">🏠</div>
              <div className="lbd-card-info">
                <div className="lbd-card-label">Pet Boarding</div>
                <div className="lbd-card-sub">Starts at ₹600/night</div>
              </div>
              <div className="lbd-card-badge">★ 4.9</div>
            </div>
            <div className="lbd-stat-row">
              <div className="lbd-stat-box"><div className="lbd-stat-val">640<span>+</span></div><div className="lbd-stat-lbl">Facilities</div></div>
              <div className="lbd-stat-box"><div className="lbd-stat-val">24/7</div><div className="lbd-stat-lbl">Supervision</div></div>
              <div className="lbd-stat-box"><div className="lbd-stat-val">12K<span>+</span></div><div className="lbd-stat-lbl">Stays Done</div></div>
            </div>
            {[
              { name: "Aditya K.", stars: "★★★★★", text: "Bruno got photos twice a day and a video of him playing with a new friend. He was sad to leave!", color: "#3b82f6", initials: "A" },
              { name: "Vijay N.", stars: "★★★★★", text: "Private suite had a real bed, toys, and an outdoor terrace. Better than some hotels I have stayed at!", color: "#6366f1", initials: "V" },
            ].map(r => (
              <div className="lbd-review-item" key={r.name}>
                <div className="lbd-review-avatar" style={{ background: r.color }}>{r.initials}</div>
                <div>
                  <div className="lbd-review-name">{r.name}</div>
                  <div className="lbd-review-stars">{r.stars}</div>
                  <div className="lbd-review-text">{r.text}</div>
                </div>
              </div>
            ))}
            <div className="lbd-card-footer">
              <span className="lbd-footer-dot"></span>
              On-call vet available
            </div>
          </div>
        </RevealSlide>
      </section>

      {/* ── FACILITY FEATURES ── */}
      <section className="lbd-features-section">
        <Reveal>
          <div className="lbd-section-label">— Facility Features</div>
          <h2 className="lbd-section-title">A Stay They'll <span className="lbd-section-accent">Look Forward To</span></h2>
          <p className="lbd-section-sub">Every boarding stay includes these standard features at no extra charge.</p>
        </Reveal>
        <div className="lbd-features-grid">
          {lbdFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="lbd-feature-card">
                <div className={`lbd-feat-icon-box ${f.iconBg}`}>{f.icon}</div>
                <div className="lbd-feat-title">{f.title}</div>
                <p className="lbd-feat-desc">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ROOM TYPES ── */}
      <section className="lbd-rooms-section">
        <Reveal>
          <div className="lbd-section-label">— Room Types</div>
          <h2 className="lbd-section-title">Choose the Perfect <span className="lbd-section-accent">Suite</span></h2>
          <p className="lbd-section-sub">From cosy standard rooms to VIP penthouse suites — there's a perfect space for every pet.</p>
        </Reveal>
        <div className="lbd-rooms-grid">
          {lbdRooms.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <div className={`lbd-room-card ${r.popular ? "popular" : ""}`}>
                {r.popular && <div className="lbd-room-popular-badge">Most Popular</div>}
                <div className="lbd-room-icon">{r.icon}</div>
                <div className="lbd-room-name">{r.name}</div>
                <div className="lbd-room-desc">{r.desc}</div>
                <div className="lbd-room-tags">{r.tags.map(t => <span className="lbd-room-tag" key={t}>{t}</span>)}</div>
                <div className="lbd-room-price">{r.price}<span>/night</span></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STAY PACKAGES ── */}
      <section className="lbd-packages-section">
        <Reveal>
          <div className="lbd-section-label">— Stay Packages</div>
          <h2 className="lbd-section-title">Packages <span className="lbd-section-accent">Built for Trips</span></h2>
          <p className="lbd-section-sub">Whether it's a long weekend or an extended placement — we have the right package.</p>
        </Reveal>
        <div className="lbd-packages-grid">
          {lbdPackages.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className={`lbd-pkg-card ${p.popular ? "popular" : ""}`}>
                {p.popular && <div className="lbd-pkg-popular-badge">Most Booked</div>}
                <div className="lbd-pkg-icon">{p.icon}</div>
                <div className="lbd-pkg-name">{p.name}</div>
                <div className="lbd-pkg-desc">{p.desc}</div>
                <div className="lbd-pkg-price">
                  <span className="lbd-from">From </span>{p.priceFrom}
                </div>
                <div className="lbd-pkg-price-label">{p.unit}</div>
                <div className="lbd-pkg-features">
                  {p.features.map(f => (
                    <div className="lbd-pkg-feat" key={f}>
                      <span className="lbd-pkg-check">✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="lbd-reviews-section">
        <Reveal>
          <div className="lbd-section-label">— Reviews</div>
          <h2 className="lbd-section-title">Pets Who've <span className="lbd-section-accent">Stayed & Loved It</span></h2>
          <p className="lbd-section-sub">Real experiences from real pet owners who travel with total peace of mind.</p>
        </Reveal>
        <div className="lbd-reviews-grid">
          {lbdReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div className="lbd-review-card">
                <div className="lbd-rev-stars">{"★".repeat(r.stars)}</div>
                <p className="lbd-rev-text">"{r.text}"</p>
                <div className="lbd-rev-author">
                  <div className="lbd-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                  <div>
                    <div className="lbd-rev-name">{r.name}</div>
                    <div className="lbd-rev-info">{r.info}</div>
                    <div className="lbd-rev-time">{r.time}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="lbd-cta-section">
        <Reveal>
          <div className="lbd-cta-banner">
            <div className="lbd-cta-left">
              <div className="lbd-cta-icon-row">
                <div className="lbd-cta-icon">🏠</div>
              </div>
              <div className="lbd-cta-title">Reserve Your Pet's Stay</div>
              <div className="lbd-cta-sub">Join 12,000+ pet owners who've trusted Pawzy Boarding. Travel freely — your pet is in the best hands.</div>
            </div>
            <div className="lbd-cta-right">
              <div className="lbd-cta-btns">
                <button className="btn-lbd-cta-white">Book a Stay Now →</button>
                <button className="btn-lbd-cta-outline">Browse All 640+ Facilities</button>
              </div>
              <div className="lbd-cta-note">No commitment needed · Cancel any time</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
