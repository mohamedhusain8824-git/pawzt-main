/* ─────────────────────────────────────────────
   BACK BUTTON (reused across all service pages)
───────────────────────────────────────────── */
export default function BackButton({ onBack, color }) {
  return (
    <button className="back-btn" onClick={onBack} style={color ? { color } : {}}>
      ← Back to Services
    </button>
  );
}
