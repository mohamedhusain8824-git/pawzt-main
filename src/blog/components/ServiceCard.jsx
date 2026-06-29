/* ─────────────────────────────────────────────
   SERVICE CARD (used on Home Page grid)
───────────────────────────────────────────── */
export default function ServiceCard({ service: s, onNavigate }) {
  return (
    <div className="service-card" onClick={() => onNavigate(s.id)} style={{ height: "100%" }}>
      <div className={`card-banner ${s.banner}`}>{s.emoji}</div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-title">{s.title}</div>
          <div className="card-rating">★ {s.rating}</div>
        </div>
        <p className="card-desc">{s.desc}</p>
        <div className="card-features">
          {s.features.map((f) => (
            <div className="feature" key={f.label}>
              <div className={`feat-dot ${f.color}`}></div>
              {f.label}
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-count">
            <strong>{s.count}</strong> {s.countLabel}
          </div>
          <button className={`btn-view ${s.btnClass}`}>View Details →</button>
        </div>
      </div>
    </div>
  );
}
