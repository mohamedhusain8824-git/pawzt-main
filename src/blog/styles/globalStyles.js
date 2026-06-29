/* ─────────────────────────────────────────────
   GLOBAL STYLES (exact, unchanged from original)
───────────────────────────────────────────── */
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; }
  .pawzy-app { min-height: 100vh; }

  /* NAV */
  .nav { display:flex; align-items:center; justify-content:space-between; padding:14px 48px; background:#fff; position:sticky; top:0; z-index:100; border-bottom:1px solid #f0f0f0; box-shadow:0 1px 8px rgba(0,0,0,.04); }
  .nav-logo { display:flex; align-items:center; gap:8px; font-size:20px; font-weight:800; color:#1a1a2e; cursor:pointer; }
  .nav-logo-icon { width:32px; height:32px; background:linear-gradient(135deg,#00c49a,#00a882); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:16px; }
  .nav-links { display:flex; gap:32px; }
  .nav-link { font-size:14px; color:#666; cursor:pointer; padding:4px 0; border-bottom:2px solid transparent; transition:color .2s,border-color .2s; }
  .nav-link:hover,.nav-link.active { color:#00c49a; border-color:#00c49a; }
  .nav-actions { display:flex; align-items:center; gap:16px; }
  .btn-signin { font-size:14px; color:#444; cursor:pointer; font-weight:500; }
  .btn-get-started { background:linear-gradient(135deg,#00c49a,#00a882); color:#fff; border:none; padding:10px 22px; border-radius:24px; font-size:14px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px; transition:transform .2s,box-shadow .2s; }
  .btn-get-started:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(0,196,154,.35); }

  /* HERO */
  .hero { background:linear-gradient(135deg,#f0fdf9 0%,#fdf6ff 40%,#fffbf0 70%,#f0f9ff 100%); padding:80px 48px 60px; text-align:center; position:relative; overflow:hidden; }
  .hero::before { content:''; position:absolute; top:-80px; left:-80px; width:300px; height:300px; background:radial-gradient(circle,rgba(0,196,154,.12),transparent 70%); pointer-events:none; }
  .hero::after { content:''; position:absolute; bottom:-60px; right:-60px; width:250px; height:250px; background:radial-gradient(circle,rgba(167,139,250,.1),transparent 70%); pointer-events:none; }
  .hero-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(0,196,154,.12); color:#00a882; border:1px solid rgba(0,196,154,.25); padding:6px 16px; border-radius:20px; font-size:12px; font-weight:600; margin-bottom:24px; }
  .hero-title { font-size:52px; font-weight:900; color:#1a1a2e; line-height:1.1; margin-bottom:4px; }
  .hero-title-colored { font-size:52px; font-weight:900; line-height:1.1; }
  .hero-title-teal { color:#00c49a; }
  .hero-title-purple { color:#a78bfa; }
  .hero-subtitle { color:#666; font-size:15px; max-width:480px; margin:16px auto 40px; line-height:1.7; }
  .hero-stats { background:#fff; border-radius:16px; display:inline-flex; gap:40px; padding:20px 48px; box-shadow:0 4px 24px rgba(0,0,0,.06); margin-bottom:40px; }
  .stat { text-align:center; }
  .stat-num { font-size:22px; font-weight:800; color:#1a1a2e; }
  .stat-num span { color:#00c49a; }
  .stat-label { font-size:11px; color:#888; font-weight:500; margin-top:2px; }
  .star { color:#f59e0b; }
  .explore-label { font-size:11px; font-weight:700; letter-spacing:2px; color:#aaa; text-transform:uppercase; margin-bottom:32px; }

  /* SERVICE CARDS */
  .services-grid { padding:0 360px 100px; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .service-row2 { padding:0 360px 80px; display:grid; grid-template-columns:repeat(2, calc((100% - 20px)/3)); gap:20px; justify-content:start; }
  .service-card { border-radius:20px; background:#fff; overflow:hidden; cursor:pointer; box-shadow:0 2px 16px rgba(0,0,0,.06); transition:transform .3s,box-shadow .3s; }
  .service-card:hover { transform:translateY(-6px); box-shadow:0 12px 40px rgba(0,0,0,.12); }
  .card-banner { height:120px; display:flex; align-items:center; justify-content:center; font-size:48px; }
  .banner-teal { background:linear-gradient(135deg,#ccfbf1,#a7f3d0); }
  .banner-lavender { background:linear-gradient(135deg,#ede9fe,#ddd6fe); }
  .banner-yellow { background:linear-gradient(135deg,#fef9c3,#fde68a); }
  .banner-pink { background:linear-gradient(135deg,#fce7f3,#fbcfe8); }
  .banner-blue { background:linear-gradient(135deg,#dbeafe,#bfdbfe); }
  .card-body { padding:18px 20px; }
  .card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
  .card-title { font-size:16px; font-weight:700; color:#1a1a2e; }
  .card-rating { display:flex; align-items:center; gap:4px; background:#fffbeb; border:1px solid #fde68a; padding:3px 8px; border-radius:12px; font-size:12px; font-weight:600; color:#92400e; }
  .card-desc { font-size:12px; color:#666; line-height:1.6; margin-bottom:12px; }
  .card-features { display:flex; flex-direction:column; gap:5px; margin-bottom:14px; }
  .feature { display:flex; align-items:center; gap:8px; font-size:12px; color:#444; font-weight:500; }
  .feat-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
  .dot-teal { background:#00c49a; }
  .dot-blue { background:#60a5fa; }
  .dot-orange { background:#fb923c; }
  .dot-pink { background:#f472b6; }
  .card-footer { display:flex; align-items:center; justify-content:space-between; border-top:1px solid #f5f5f5; padding-top:12px; }
  .card-count { font-size:11px; color:#888; }
  .card-count strong { color:#1a1a2e; font-weight:700; }
  .btn-view { font-size:12px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:4px; border:none; background:none; transition:gap .2s; }
  .btn-view:hover { gap:8px; }
  .btn-teal { color:#00c49a; } .btn-purple { color:#8b5cf6; } .btn-yellow { color:#d97706; } .btn-pink { color:#ec4899; } .btn-blue { color:#3b82f6; }

  /* TRUST BAR */
  .trust-bar { background:#f8fffe; padding:32px 48px; display:flex; justify-content:center; gap:80px; border-top:1px solid #e8faf6; }
  .trust-item { display:flex; align-items:center; gap:12px; }
  .trust-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; }
  .trust-icon-teal { background:rgba(0,196,154,.12); } .trust-icon-blue { background:rgba(96,165,250,.12); } .trust-icon-orange { background:rgba(251,146,60,.12); }
  .trust-text strong { display:block; font-size:14px; font-weight:700; color:#1a1a2e; }
  .trust-text span { font-size:12px; color:#888; }

  /* FOOTER */
  .footer { background:#1a1a2e; color:#888; padding:32px 48px; display:flex; justify-content:space-between; align-items:center; }
  .footer-logo { display:flex; align-items:center; gap:8px; color:#fff; font-size:18px; font-weight:800; }
  .footer-links { display:flex; gap:24px; font-size:13px; }
  .footer-link { color:#888; cursor:pointer; transition:color .2s; }
  .footer-link:hover { color:#00c49a; }
  .footer-copy { font-size:12px; }

  /* BACK BUTTON */
  .back-btn { display:flex; align-items:center; gap:6px; color:#00a882; font-size:14px; font-weight:600; cursor:pointer; border:none; background:none; padding:16px 48px; transition:gap .2s; }
  .back-btn:hover { gap:10px; }

  /* SHARED */
  .section { padding:60px 360px; }
  .section-label { font-size:11px; font-weight:700; letter-spacing:2px; color:#00c49a; text-transform:uppercase; text-align:center; margin-bottom:8px; }
  .section-title { font-size:32px; font-weight:800; color:#1a1a2e; text-align:center; margin-bottom:8px; }
  .section-subtitle { font-size:14px; color:#888; text-align:center; margin-bottom:48px; }
  .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feature-card { background:#f9fafb; border-radius:16px; padding:20px; transition:transform .2s,box-shadow .2s; }
  .feature-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.08); }
  .feature-icon { font-size:28px; margin-bottom:12px; }
  .feature-title { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:6px; }
  .feature-desc { font-size:12px; color:#666; line-height:1.6; }
  .pricing-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:900px; margin:0 auto; }
  .pricing-card { background:#fff; border:2px solid #f0f0f0; border-radius:20px; padding:24px; transition:transform .2s,border-color .2s; position:relative; }
  .pricing-card:hover { transform:translateY(-4px); }
  .pricing-card.popular { border-color:#00c49a; }
  .popular-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:#00c49a; color:#fff; padding:4px 16px; border-radius:12px; font-size:11px; font-weight:700; white-space:nowrap; }
  .pricing-name { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:4px; }
  .pricing-desc { font-size:12px; color:#888; margin-bottom:16px; }
  .pricing-price { font-size:32px; font-weight:900; color:#1a1a2e; margin-bottom:4px; }
  .pricing-price span { font-size:13px; color:#888; font-weight:400; }
  .pricing-unit { font-size:11px; color:#aaa; margin-bottom:16px; }
  .pricing-features { display:flex; flex-direction:column; gap:8px; }
  .pricing-feat { display:flex; align-items:center; gap:8px; font-size:12px; color:#444; }
  .testimonials-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .testimonial-card { background:#fff; border:1px solid #f0f0f0; border-radius:16px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,.04); transition:transform .2s; }
  .testimonial-card:hover { transform:translateY(-4px); }
  .test-stars { color:#f59e0b; margin-bottom:10px; font-size:14px; }
  .test-text { font-size:13px; color:#444; line-height:1.7; margin-bottom:16px; font-style:italic; }
  .test-author { display:flex; align-items:center; gap:10px; }
  .test-avatar { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff; font-size:13px; }
  .test-name { font-size:13px; font-weight:700; color:#1a1a2e; }
  .test-info { font-size:11px; color:#888; }
  .test-time { font-size:10px; color:#bbb; margin-top:2px; }

  /* PET SITTING */
  .ps-hero { background:linear-gradient(135deg,#f0fdf9 0%,#e0fef4 100%); padding:60px 360px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  .ps-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(0,196,154,.12); color:#00a882; border:1px solid rgba(0,196,154,.25); padding:5px 14px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:.5px; margin-bottom:16px; text-transform:uppercase; }
  .ps-title { font-size:42px; font-weight:900; color:#1a1a2e; line-height:1.15; margin-bottom:16px; }
  .ps-title-accent { color:#00c49a; }
  .ps-desc { font-size:14px; color:#666; line-height:1.8; margin-bottom:24px; }
  .ps-pills { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:28px; }
  .pill { display:flex; align-items:center; gap:6px; background:#fff; border:1px solid #e5e7eb; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:600; color:#444; }
  .ps-ctas { display:flex; gap:12px; align-items:center; }
  .btn-primary { background:linear-gradient(135deg,#00c49a,#00a882); color:#fff; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:transform .2s,box-shadow .2s; }
  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,196,154,.35); }
  .btn-outline { border:2px solid #00c49a; color:#00c49a; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:background .2s,color .2s; }
  .btn-outline:hover { background:#00c49a; color:#fff; }
  .ps-card { background:#fff; border-radius:20px; padding:24px; box-shadow:0 8px 32px rgba(0,0,0,.08); max-width:380px; margin:0 auto; }
  .ps-card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
  .ps-card-title { font-weight:700; color:#1a1a2e; display:flex; align-items:center; gap:8px; font-size:15px; }
  .ps-card-badge { background:#00c49a; color:#fff; padding:3px 10px; border-radius:10px; font-size:11px; font-weight:700; }
  .ps-mini-stats { display:flex; gap:20px; margin-bottom:20px; }
  .ps-mini-stat strong { display:block; font-size:18px; font-weight:800; color:#1a1a2e; }
  .ps-mini-stat span { font-size:11px; color:#888; }
  .review-item { display:flex; gap:12px; align-items:flex-start; padding:12px 0; border-bottom:1px solid #f5f5f5; }
  .review-avatar { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:#fff; flex-shrink:0; }
  .review-name { font-size:13px; font-weight:600; color:#1a1a2e; }
  .review-stars { color:#f59e0b; font-size:11px; }
  .review-text { font-size:12px; color:#666; margin-top:2px; line-height:1.5; }
  .sitters-grid { display:flex; gap:20px; justify-content:center; flex-wrap:wrap; }
  .sitter-card { background:#fff; border:1px solid #f0f0f0; border-radius:16px; padding:20px; width:200px; text-align:center; box-shadow:0 2px 12px rgba(0,0,0,.05); transition:transform .2s,box-shadow .2s; }
  .sitter-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.1); }
  .sitter-avatar { width:56px; height:56px; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800; color:#fff; }
  .sitter-name { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:2px; }
  .sitter-exp { font-size:11px; color:#888; margin-bottom:8px; }
  .sitter-stats { display:flex; justify-content:center; gap:12px; margin-bottom:12px; }
  .sitter-stat { text-align:center; }
  .sitter-stat strong { display:block; font-size:13px; font-weight:700; color:#1a1a2e; }
  .sitter-stat span { font-size:10px; color:#aaa; }
  .sitter-tags { display:flex; flex-wrap:wrap; justify-content:center; gap:4px; margin-bottom:12px; }
  .sitter-tag { background:#f3f4f6; color:#555; padding:3px 8px; border-radius:8px; font-size:10px; font-weight:500; }
  .sitter-price { font-size:15px; font-weight:800; color:#00c49a; }
  .sitter-price span { font-size:11px; color:#888; font-weight:400; }
  .pricing-tabs { display:flex; justify-content:center; margin-bottom:32px; }
  .pricing-tab { padding:8px 24px; border-radius:20px; font-size:13px; font-weight:600; cursor:pointer; color:#888; border:none; background:transparent; transition:all .2s; }
  .pricing-tab.active { background:#00c49a; color:#fff; }
  .cta-banner { background:linear-gradient(135deg,#00c49a,#00a882); border-radius:20px; padding:40px 48px; margin:0 360px 60px; display:flex; align-items:center; justify-content:space-between; }
  .cta-title { font-size:24px; font-weight:800; color:#fff; margin-bottom:6px; }
  .cta-sub { font-size:14px; color:rgba(255,255,255,.8); }
  .cta-right { display:flex; align-items:center; gap:16px; }
  .cta-count { color:rgba(255,255,255,.8); font-size:13px; }
  .btn-white { background:#fff; color:#00a882; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:transform .2s; }
  .btn-white:hover { transform:scale(1.04); }

  /* PET WALKING */
  .pw-hero { background:linear-gradient(135deg,#f0fdf9 0%,#f0f4ff 50%,#faf0ff 100%); padding:60px 360px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  .pw-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(0,196,154,.12); color:#00a882; border:1px solid rgba(0,196,154,.25); padding:5px 14px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:.5px; margin-bottom:16px; text-transform:uppercase; }
  .pw-title { font-size:42px; font-weight:900; color:#1a1a2e; line-height:1.15; margin-bottom:16px; }
  .pw-title-accent { color:#00c49a; }
  .pw-desc { font-size:14px; color:#666; line-height:1.8; margin-bottom:24px; }
  .pw-card { background:#fff; border-radius:20px; padding:24px; box-shadow:0 8px 32px rgba(0,0,0,.08); }
  .pw-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
  .pw-card-label { display:flex; align-items:center; gap:6px; }
  .pw-card-dot { width:8px; height:8px; border-radius:50%; background:#00c49a; }
  .pw-card-title-txt { font-size:13px; font-weight:700; color:#1a1a2e; }
  .pw-card-sub { font-size:11px; color:#888; }
  .pw-card-live { background:rgba(0,196,154,.1); color:#00a882; padding:3px 10px; border-radius:10px; font-size:11px; font-weight:700; display:flex; align-items:center; gap:4px; }
  .pw-card-live-dot { width:6px; height:6px; border-radius:50%; background:#00c49a; animation:pulse 1.2s infinite; }
  .pw-map-placeholder { background:linear-gradient(135deg,#e8f8f3 0%,#d4f1e7 50%,#e8f0ff 100%); border-radius:14px; height:110px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; position:relative; overflow:hidden; }
  .pw-map-label { font-size:12px; font-weight:600; color:#00a882; z-index:1; }
  .pw-stats-row { display:flex; gap:16px; margin-bottom:16px; }
  .pw-stat-box { flex:1; background:#f8fffe; border-radius:10px; padding:10px 12px; text-align:center; }
  .pw-stat-val { font-size:16px; font-weight:800; color:#1a1a2e; }
  .pw-stat-val span { color:#00c49a; }
  .pw-stat-lbl { font-size:10px; color:#888; margin-top:2px; }
  .pw-review-item { display:flex; gap:10px; align-items:flex-start; padding:10px 0; border-top:1px solid #f5f5f5; }
  .pw-review-avatar { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:#fff; flex-shrink:0; }
  .pw-review-name { font-size:12px; font-weight:600; color:#1a1a2e; }
  .pw-review-stars { color:#f59e0b; font-size:10px; }
  .pw-review-text { font-size:11px; color:#666; margin-top:2px; line-height:1.5; }
  .pw-card-footer { padding-top:10px; border-top:1px solid #eddfdf; display:flex; align-items:center; gap:6px; }
  .pw-gps-dot { width:8px; height:8px; border-radius:50%; background:#00c49a; animation:pulse 1.2s infinite; }
  .pw-gps-txt { font-size:11px; color:#00a882; font-weight:600; }
  .walk-feat-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:12px; }
  .wfi-teal{background:rgba(0,196,154,.1);} .wfi-blue{background:rgba(96,165,250,.1);} .wfi-purple{background:rgba(167,139,250,.1);}
  .wfi-yellow{background:rgba(251,191,36,.1);} .wfi-pink{background:rgba(244,114,182,.1);} .wfi-orange{background:rgba(251,146,60,.1);}
  .walker-card { background:#fff; border:1px solid #f0f0f0; border-radius:16px; padding:20px 24px; display:flex; align-items:center; gap:16px; box-shadow:0 2px 12px rgba(0,0,0,.05); transition:transform .2s,box-shadow .2s; }
  .walker-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.1); }
  .walker-avatar { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:800; color:#fff; flex-shrink:0; }
  .walker-info { flex:1; }
  .walker-name { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:2px; }
  .walker-role { font-size:11px; color:#888; margin-bottom:6px; }
  .walker-rating-row { display:flex; align-items:center; gap:6px; margin-bottom:8px; }
  .walker-stars { color:#f59e0b; font-size:12px; }
  .walker-rating-txt { font-size:12px; font-weight:600; color:#1a1a2e; }
  .walker-reviews { font-size:11px; color:#888; }
  .walker-tags { display:flex; flex-wrap:wrap; gap:4px; }
  .walker-tag { background:#f3f4f6; color:#555; padding:3px 8px; border-radius:8px; font-size:10px; font-weight:500; }
  .walker-price { font-size:18px; font-weight:800; color:#00c49a; white-space:nowrap; }
  .walker-price span { font-size:11px; color:#888; font-weight:400; }
  .walkers-grid { display:flex; flex-direction:column; gap:16px; max-width:860px; margin:0 auto; }
  .walk-pkg-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:12px; }
  .wpi-teal{background:rgba(0,196,154,.1);} .wpi-purple{background:rgba(167,139,250,.1);} .wpi-blue{background:rgba(96,165,250,.1);}
  .walk-cta-banner { background:linear-gradient(135deg,#5ba482 0%,#1241b6ad 100%); border-radius:20px; padding:48px; margin:0 360px 60px; display:flex; align-items:center; justify-content:space-between; position:relative; overflow:hidden; }
  .walk-cta-icon { font-size:40px; margin-bottom:12px; }
  .walk-cta-title { font-size:26px; font-weight:900; color:#fff; margin-bottom:6px; }
  .walk-cta-sub { font-size:14px; color:rgba(255,255,255,.6); }
  .walk-cta-right { display:flex; flex-direction:column; align-items:flex-end; gap:12px; z-index:1; }
  .walk-cta-btns { display:flex; gap:12px; }
  .btn-cta-primary { background:linear-gradient(135deg,#00c49a,#00a882); color:#fff; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:transform .2s; }
  .btn-cta-primary:hover { transform:translateY(-2px); }
  .btn-cta-outline { border:2px solid rgba(255,255,255,.3); color:#fff; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:600; cursor:pointer; transition:border-color .2s; }
  .btn-cta-outline:hover { border-color:#00c49a; }
  .walk-cta-note { font-size:12px; color:rgba(255,255,255,.4); }

  /* VET CONSULTATION */
  .vc-hero { background:linear-gradient(135deg,#fdf8ee 0%,#fef9ec 50%,#fffbf0 100%); padding:60px 360px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  .vc-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(251,191,36,.15); color:#b45309; border:1px solid rgba(251,191,36,.35); padding:5px 14px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:.5px; margin-bottom:16px; text-transform:uppercase; }
  .vc-title { font-size:42px; font-weight:900; color:#1a1a2e; line-height:1.15; margin-bottom:16px; }
  .vc-title-accent { color:#d97706; }
  .vc-desc { font-size:14px; color:#666; line-height:1.8; margin-bottom:24px; }
  .btn-primary-amber { background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:transform .2s,box-shadow .2s; }
  .btn-primary-amber:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(245,158,11,.35); }
  .btn-outline-amber { border:2px solid #f59e0b; color:#d97706; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:background .2s,color .2s; }
  .btn-outline-amber:hover { background:#f59e0b; color:#fff; }
  .vc-card { background:#fff; border-radius:20px; padding:24px; box-shadow:0 8px 32px rgba(0,0,0,.08); }
  .vc-card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
  .vc-card-title { font-weight:700; color:#1a1a2e; display:flex; align-items:center; gap:8px; font-size:15px; }
  .vc-card-badge { background:#f59e0b; color:#fff; padding:3px 10px; border-radius:10px; font-size:11px; font-weight:700; }
  .vc-mini-stats { display:flex; gap:20px; margin-bottom:20px; }
  .vc-mini-stat strong { display:block; font-size:18px; font-weight:800; color:#1a1a2e; }
  .vc-mini-stat span { font-size:11px; color:#888; }
  .vc-card-footer { padding-top:12px; border-top:1px solid #fce7f3; display:flex; align-items:center; gap:6px; font-size:11px; color:#d97706; font-weight:600; }
  .sync-dot { width:8px; height:8px; border-radius:50%; background:#10b981; animation:pulse 1.2s infinite; }
  .vc-section-label { font-size:11px; font-weight:700; letter-spacing:2px; color:#d97706; text-transform:uppercase; text-align:center; margin-bottom:8px; }
  .feat-icon-box { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:12px; }
  .fib-amber{background:rgba(245,158,11,.12);} .fib-teal{background:rgba(0,196,154,.12);} .fib-blue{background:rgba(96,165,250,.12);}
  .fib-purple{background:rgba(167,139,250,.12);} .fib-red{background:rgba(239,68,68,.12);} .fib-green{background:rgba(34,197,94,.12);}
  .vets-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:860px; margin:0 auto; }
  .vet-card { background:#fff; border:1px solid #f0f0f0; border-radius:16px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,.05); transition:transform .2s,box-shadow .2s; }
  .vet-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.1); }
  .vet-avatar { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:800; color:#fff; margin-bottom:10px; }
  .vet-name { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:2px; }
  .vet-degree { font-size:11px; color:#888; margin-bottom:8px; }
  .vet-rating-row { display:flex; align-items:center; gap:6px; margin-bottom:8px; }
  .vet-stars { color:#f59e0b; font-size:12px; }
  .vet-rating-txt { font-size:12px; font-weight:600; color:#1a1a2e; }
  .vet-reviews { font-size:11px; color:#888; }
  .vet-price { font-size:16px; font-weight:800; color:#d97706; margin-bottom:10px; }
  .vet-price span { font-size:11px; color:#888; font-weight:400; }
  .vet-tags { display:flex; flex-wrap:wrap; gap:4px; }
  .vet-tag { background:#fef3c7; color:#92400e; padding:3px 8px; border-radius:8px; font-size:10px; font-weight:600; }
  .vc-popular-badge { position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; padding:4px 16px; border-radius:12px; font-size:11px; font-weight:700; white-space:nowrap; }
  .vc-pricing-card { background:#fff; border:2px solid #f0f0f0; border-radius:20px; padding:24px; transition:transform .2s,border-color .2s; position:relative; }
  .vc-pricing-card:hover { transform:translateY(-4px); border-color:#f59e0b; }
  .vc-pricing-card.popular { border-color:#f59e0b; }
  .pkg-icon-box { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:12px; }
  .pib-amber{background:rgba(245,158,11,.12);} .pib-teal{background:rgba(0,196,154,.12);} .pib-blue{background:rgba(96,165,250,.12);}
  .vc-feat-check { color:#d97706; }
  .vc-cta-banner { background:linear-gradient(135deg,#f59e0b 0%,#d97706 50%,#b45309 100%); border-radius:20px; padding:40px 48px; margin:0 360px 60px; display:flex; align-items:center; justify-content:space-between; position:relative; overflow:hidden; }
  .vc-cta-icon { font-size:40px; margin-bottom:12px; animation:floatAnim 3s ease-in-out infinite; }
  .vc-cta-title { font-size:24px; font-weight:800; color:#fff; margin-bottom:6px; }
  .vc-cta-sub { font-size:14px; color:rgba(255,255,255,.8); }
  .vc-cta-right { display:flex; flex-direction:column; align-items:flex-end; gap:12px; z-index:1; }
  .vc-cta-btns { display:flex; gap:12px; }
  .btn-cta-white { background:#fff; color:#d97706; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:transform .2s; }
  .btn-cta-white:hover { transform:translateY(-2px); }
  .btn-cta-outline-amber { border:2px solid rgba(255,255,255,.4); color:#fff; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:600; cursor:pointer; }
  .btn-cta-outline-amber:hover { border-color:#fff; }
  .vc-cta-note { font-size:12px; color:rgba(255,255,255,.5); }

  /* GROOMING */
  .gr-hero { background:linear-gradient(135deg,#fff0f6 0%,#fce7f3 40%,#fdf2f8 70%,#fff5fb 100%); padding:60px 360px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  .gr-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(236,72,153,.1); color:#be185d; border:1px solid rgba(236,72,153,.25); padding:5px 14px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:.5px; margin-bottom:16px; text-transform:uppercase; }
  .gr-title { font-size:42px; font-weight:900; color:#1a1a2e; line-height:1.15; margin-bottom:16px; }
  .gr-title-accent { color:#ec4899; }
  .gr-desc { font-size:14px; color:#666; line-height:1.8; margin-bottom:24px; }
  .btn-primary-pink { background:linear-gradient(135deg,#ec4899,#be185d); color:#fff; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:transform .2s,box-shadow .2s; }
  .btn-primary-pink:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(236,72,153,.35); }
  .btn-outline-pink { border:2px solid #ec4899; color:#ec4899; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:background .2s,color .2s; }
  .btn-outline-pink:hover { background:#ec4899; color:#fff; }
  .gr-card { background:#fff; border-radius:20px; padding:24px; box-shadow:0 8px 32px rgba(236,72,153,.1); }
  .gr-card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
  .gr-card-title { font-weight:700; color:#1a1a2e; display:flex; align-items:center; gap:8px; font-size:15px; }
  .gr-card-rating { background:#fdf2f8; border:1px solid #fbcfe8; color:#be185d; padding:3px 10px; border-radius:10px; font-size:12px; font-weight:700; }
  .gr-card-sub { font-size:11px; color:#888; margin-bottom:16px; }
  .gr-mini-stats { display:flex; gap:20px; margin-bottom:20px; }
  .gr-mini-stat strong { display:block; font-size:18px; font-weight:800; color:#1a1a2e; }
  .gr-mini-stat span { font-size:11px; color:#888; }
  .gr-card-footer { padding-top:12px; border-top:1px solid #fce7f3; display:flex; align-items:center; gap:6px; font-size:11px; color:#ec4899; font-weight:600; }
  .gr-dot { width:8px; height:8px; border-radius:50%; background:#ec4899; animation:pulse 1.2s infinite; }
  .gr-section-label { font-size:11px; font-weight:700; letter-spacing:2px; color:#ec4899; text-transform:uppercase; text-align:center; margin-bottom:8px; }
  .gr-section-title { font-size:32px; font-weight:800; color:#1a1a2e; text-align:center; margin-bottom:8px; }
  .gr-feature-card { background:#fff; border:1px solid #fce7f3; border-radius:16px; padding:20px; transition:transform .2s,box-shadow .2s; }
  .gr-feature-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(236,72,153,.1); }
  .gr-feat-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:12px; }
  .gfi-pink{background:rgba(236,72,153,.1);} .gfi-rose{background:rgba(244,114,182,.1);} .gfi-purple{background:rgba(167,139,250,.1);}
  .gfi-yellow{background:rgba(251,191,36,.1);} .gfi-teal{background:rgba(0,196,154,.1);} .gfi-orange{background:rgba(251,146,60,.1);}
  .groomers-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:860px; margin:0 auto; }
  .groomer-card { background:#fff; border:1px solid #fce7f3; border-radius:16px; padding:20px 24px; display:flex; align-items:center; gap:16px; box-shadow:0 2px 12px rgba(236,72,153,.06); transition:transform .2s,box-shadow .2s; }
  .groomer-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(236,72,153,.12); }
  .groomer-avatar { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:800; color:#fff; flex-shrink:0; }
  .groomer-info { flex:1; }
  .groomer-name { font-size:14px; font-weight:700; color:#1a1a2e; margin-bottom:2px; }
  .groomer-role { font-size:11px; color:#888; margin-bottom:6px; }
  .groomer-rating-row { display:flex; align-items:center; gap:6px; margin-bottom:8px; }
  .groomer-stars { color:#f59e0b; font-size:12px; }
  .groomer-rating-txt { font-size:12px; font-weight:600; color:#1a1a2e; }
  .groomer-reviews { font-size:11px; color:#888; }
  .groomer-tags { display:flex; flex-wrap:wrap; gap:4px; }
  .groomer-tag { background:#fdf2f8; color:#be185d; padding:3px 8px; border-radius:8px; font-size:10px; font-weight:600; }
  .groomer-price { font-size:18px; font-weight:800; color:#ec4899; white-space:nowrap; }
  .groomer-price span { font-size:11px; color:#888; font-weight:400; }
  .gr-pkg-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:12px; }
  .gpi-pink{background:rgba(236,72,153,.1);} .gpi-rose{background:rgba(244,114,182,.1);} .gpi-purple{background:rgba(167,139,250,.1);}
  .gr-pricing-card { background:#fff; border:2px solid #fce7f3; border-radius:20px; padding:24px; transition:transform .2s,border-color .2s; position:relative; }
  .gr-pricing-card:hover { transform:translateY(-4px); border-color:#ec4899; }
  .gr-pricing-card.popular { border-color:#ec4899; }
  .gr-popular-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg,#ec4899,#be185d); color:#fff; padding:4px 16px; border-radius:12px; font-size:11px; font-weight:700; white-space:nowrap; }
  .gr-feat-check { color:#ec4899; }
  .gr-testimonial-card { background:#fff; border:1px solid #fce7f3; border-radius:16px; padding:20px; box-shadow:0 2px 12px rgba(236,72,153,.04); transition:transform .2s; }
  .gr-testimonial-card:hover { transform:translateY(-4px); }
  .gr-cta-banner { background:linear-gradient(135deg,#ec4899 0%,#be185d 50%,#9d174d 100%); border-radius:20px; padding:40px 48px; margin:0 360px 60px; display:flex; align-items:center; justify-content:space-between; position:relative; overflow:hidden; }
  .gr-cta-icon { font-size:40px; margin-bottom:12px; animation:floatAnim 3s ease-in-out infinite; }
  .gr-cta-title { font-size:24px; font-weight:800; color:#fff; margin-bottom:6px; }
  .gr-cta-sub { font-size:14px; color:rgba(255,255,255,.8); }
  .gr-cta-right { display:flex; flex-direction:column; align-items:flex-end; gap:12px; z-index:1; }
  .gr-cta-btns { display:flex; gap:12px; }
  .btn-cta-white-pink { background:#fff; color:#be185d; border:none; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:700; cursor:pointer; transition:transform .2s; }
  .btn-cta-white-pink:hover { transform:translateY(-2px); }
  .btn-cta-outline-pink { border:2px solid rgba(255,255,255,.4); color:#fff; background:transparent; padding:12px 28px; border-radius:24px; font-size:14px; font-weight:600; cursor:pointer; }
  .btn-cta-outline-pink:hover { border-color:#fff; }
  .gr-cta-note { font-size:12px; color:rgba(255,255,255,.5); }

  /* ══════ LUXURY BOARDING PAGE (from image) ══════ */
  .lbd-hero {
    background: linear-gradient(160deg, #e8f4fd 0%, #d6eaf8 40%, #eaf4fb 70%, #f0f8ff 100%);
    padding: 70px 360px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .lbd-hero::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(59,130,246,.1), transparent 70%);
    pointer-events: none;
  }
  .lbd-checkin-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(59,130,246,.1); color: #1d4ed8;
    border: 1px solid rgba(59,130,246,.25);
    padding: 6px 16px; border-radius: 20px;
    font-size: 11px; font-weight: 700; letter-spacing: .5px;
    margin-bottom: 20px; text-transform: uppercase;
  }
  .lbd-checkin-dot { width: 7px; height: 7px; border-radius: 50%; background: #3b82f6; animation: pulse 1.2s infinite; }
  .lbd-hero-title { font-size: 48px; font-weight: 900; color: #1a1a2e; line-height: 1.1; margin-bottom: 20px; }
  .lbd-hero-title-accent { color: #3b82f6; }
  .lbd-hero-desc { font-size: 14px; color: #555; line-height: 1.85; margin-bottom: 28px; max-width: 440px; }
  .lbd-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
  .lbd-pill { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #dbeafe; padding: 7px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; color: #444; box-shadow: 0 2px 8px rgba(59,130,246,.06); }
  .lbd-hero-btns { display: flex; gap: 14px; align-items: center; }
  .btn-lbd-primary { background: linear-gradient(135deg,#3b82f6,#1d4ed8); color: #fff; border: none; padding: 14px 32px; border-radius: 28px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: transform .2s, box-shadow .2s; }
  .btn-lbd-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(59,130,246,.4); }
  .btn-lbd-outline { border: 2px solid #3b82f6; color: #3b82f6; background: transparent; padding: 14px 32px; border-radius: 28px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all .2s; }
  .btn-lbd-outline:hover { background: #3b82f6; color: #fff; }

  /* Hero right card */
  .lbd-hero-card { background: #fff; border-radius: 24px; padding: 22px; box-shadow: 0 12px 48px rgba(59,130,246,.12); position: relative; max-width: 360px; margin: 0 auto; }
  .lbd-card-topbar { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .lbd-card-icon-box { width: 40px; height: 40px; background: linear-gradient(135deg,#dbeafe,#bfdbfe); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 19px; }
  .lbd-card-info { flex: 1; }
  .lbd-card-label { font-size: 14px; font-weight: 800; color: #1a1a2e; }
  .lbd-card-sub { font-size: 10px; color: #888; margin-top: 2px; }
  .lbd-card-badge { background: linear-gradient(135deg,#f59e0b,#d97706); color: #fff; padding: 4px 10px; border-radius: 10px; font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 4px; }
  .lbd-stat-row { display: flex; gap: 0; margin-bottom: 16px; background: #f0f9ff; border-radius: 12px; overflow: hidden; }
  .lbd-stat-box { flex: 1; padding: 11px 10px; text-align: center; border-right: 1px solid #dbeafe; }
  .lbd-stat-box:last-child { border-right: none; }
  .lbd-stat-val { font-size: 17px; font-weight: 900; color: #1a1a2e; }
  .lbd-stat-val span { color: #3b82f6; }
  .lbd-stat-lbl { font-size: 9px; color: #888; margin-top: 3px; font-weight: 500; }
  .lbd-review-item { display: flex; gap: 10px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #f0f9ff; }
  .lbd-review-item:last-child { border-bottom: none; }
  .lbd-review-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: #fff; flex-shrink: 0; }
  .lbd-review-name { font-size: 12px; font-weight: 700; color: #1a1a2e; }
  .lbd-review-stars { color: #f59e0b; font-size: 9px; margin: 2px 0; }
  .lbd-review-text { font-size: 10px; color: #666; line-height: 1.5; }
  .lbd-card-footer { margin-top: 10px; display: flex; align-items: center; gap: 6px; font-size: 10px; color: #3b82f6; font-weight: 600; padding-top: 10px; border-top: 1px solid #dbeafe; }
  .lbd-footer-dot { width: 7px; height: 7px; border-radius: 50%; background: #10b981; animation: pulse 1.2s infinite; }

  /* Features Section */
  .lbd-features-section { padding: 70px 360px; background: #f8fbff; }
  .lbd-section-label { font-size: 11px; font-weight: 700; letter-spacing: 2.5px; color: #3b82f6; text-transform: uppercase; text-align: center; margin-bottom: 10px; }
  .lbd-section-title { font-size: 34px; font-weight: 900; color: #1a1a2e; text-align: center; margin-bottom: 10px; }
  .lbd-section-accent { color: #3b82f6; }
  .lbd-section-sub { font-size: 14px; color: #888; text-align: center; margin-bottom: 52px; }
  .lbd-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .lbd-feature-card {
    background: #fff;
    border: 1px solid #e0eeff;
    border-radius: 18px;
    padding: 26px;
    transition: transform .25s, box-shadow .25s;
    cursor: default;
  }
  .lbd-feature-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(59,130,246,.1); }
  .lbd-feat-icon-box { width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 16px; }
  .lfi-blue   { background: linear-gradient(135deg, #dbeafe, #bfdbfe); }
  .lfi-indigo { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); }
  .lfi-teal   { background: linear-gradient(135deg, #ccfbf1, #a7f3d0); }
  .lfi-amber  { background: linear-gradient(135deg, #fef9c3, #fde68a); }
  .lfi-sky    { background: linear-gradient(135deg, #e0f2fe, #bae6fd); }
  .lfi-green  { background: linear-gradient(135deg, #dcfce7, #bbf7d0); }
  .lbd-feat-title { font-size: 14px; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
  .lbd-feat-desc { font-size: 12px; color: #666; line-height: 1.7; }

  /* Room Types */
  .lbd-rooms-section { padding: 70px 360px; background: #fff; }
  .lbd-rooms-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: 960px; margin: 0 auto; }
  .lbd-room-card {
    background: #fff;
    border: 2px solid #e0eeff;
    border-radius: 22px;
    padding: 28px;
    position: relative;
    transition: transform .25s, border-color .25s, box-shadow .25s;
  }
  .lbd-room-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(59,130,246,.12); }
  .lbd-room-card.popular { border-color: #3b82f6; }
  .lbd-room-popular-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg,#3b82f6,#1d4ed8); color: #fff; padding: 4px 18px; border-radius: 12px; font-size: 11px; font-weight: 700; white-space: nowrap; }
  .lbd-room-icon { font-size: 36px; margin-bottom: 14px; }
  .lbd-room-name { font-size: 16px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
  .lbd-room-desc { font-size: 12px; color: #888; margin-bottom: 14px; line-height: 1.6; }
  .lbd-room-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
  .lbd-room-tag { background: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 8px; font-size: 10px; font-weight: 600; }
  .lbd-room-price { font-size: 28px; font-weight: 900; color: #3b82f6; }
  .lbd-room-price span { font-size: 13px; color: #888; font-weight: 400; }

  /* Stay Packages */
  .lbd-packages-section { padding: 70px 360px; background: #f8fbff; }
  .lbd-packages-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: 960px; margin: 0 auto; }
  .lbd-pkg-card {
    background: #fff;
    border: 2px solid #e0eeff;
    border-radius: 22px;
    padding: 28px;
    position: relative;
    transition: transform .25s, border-color .25s;
  }
  .lbd-pkg-card:hover { transform: translateY(-5px); }
  .lbd-pkg-card.popular { border-color: #3b82f6; }
  .lbd-pkg-popular-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg,#3b82f6,#1d4ed8); color: #fff; padding: 4px 18px; border-radius: 12px; font-size: 11px; font-weight: 700; white-space: nowrap; }
  .lbd-pkg-icon { font-size: 32px; margin-bottom: 14px; }
  .lbd-pkg-name { font-size: 15px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
  .lbd-pkg-desc { font-size: 12px; color: #888; margin-bottom: 16px; line-height: 1.6; }
  .lbd-pkg-price { font-size: 28px; font-weight: 900; color: #3b82f6; margin-bottom: 4px; }
  .lbd-pkg-price-label { font-size: 11px; color: #aaa; margin-bottom: 16px; }
  .lbd-pkg-features { display: flex; flex-direction: column; gap: 8px; }
  .lbd-pkg-feat { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #444; }
  .lbd-pkg-check { color: #3b82f6; font-weight: 700; }
  .lbd-from { font-size: 13px; color: #888; font-weight: 500; }

  /* Reviews */
  .lbd-reviews-section { padding: 70px 360px; background: #fff; }
  .lbd-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .lbd-review-card {
    background: #fff;
    border: 1px solid #e0eeff;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(59,130,246,.05);
    transition: transform .25s, box-shadow .25s;
  }
  .lbd-review-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(59,130,246,.1); }
  .lbd-rev-stars { color: #f59e0b; font-size: 14px; margin-bottom: 12px; }
  .lbd-rev-text { font-size: 13px; color: #444; line-height: 1.75; margin-bottom: 18px; font-style: italic; }
  .lbd-rev-author { display: flex; align-items: center; gap: 12px; }
  .lbd-rev-avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 14px; }
  .lbd-rev-name { font-size: 13px; font-weight: 700; color: #1a1a2e; }
  .lbd-rev-info { font-size: 11px; color: #888; margin-top: 1px; }
  .lbd-rev-time { font-size: 10px; color: #bbb; margin-top: 2px; }

  /* CTA Banner */
  .lbd-cta-section { padding: 0 360px 72px; }
  .lbd-cta-banner {
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 40%, #0ea5e9 100%);
    border-radius: 28px;
    padding: 52px 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .lbd-cta-banner::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(255,255,255,.1), transparent 70%);
    pointer-events: none;
  }
  .lbd-cta-banner::after {
    content: '';
    position: absolute;
    bottom: -60px; left: -60px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%);
    pointer-events: none;
  }
  .lbd-cta-left { z-index: 1; }
  .lbd-cta-icon-row { display: flex; align-items: center; gap: 14px; margin-bottom: 10px; }
  .lbd-cta-icon { font-size: 44px; animation: floatAnim 3s ease-in-out infinite; }
  .lbd-cta-title { font-size: 28px; font-weight: 900; color: #fff; }
  .lbd-cta-sub { font-size: 15px; color: rgba(255,255,255,.75); margin-top: 6px; }
  .lbd-cta-right { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; z-index: 1; }
  .lbd-cta-btns { display: flex; gap: 14px; }
  .btn-lbd-cta-white { background: #fff; color: #1d4ed8; border: none; padding: 14px 32px; border-radius: 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: transform .2s, box-shadow .2s; }
  .btn-lbd-cta-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.2); }
  .btn-lbd-cta-outline { border: 2px solid rgba(255,255,255,.5); color: #fff; background: transparent; padding: 14px 32px; border-radius: 28px; font-size: 14px; font-weight: 700; cursor: pointer; transition: border-color .2s; }
  .btn-lbd-cta-outline:hover { border-color: #fff; }
  .lbd-cta-note { font-size: 12px; color: rgba(255,255,255,.45); }

  /* KEYFRAMES */
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
`;