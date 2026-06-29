import Link from "../assets/icons/Link.png";

const footerColumns = [
  {
    title: "SERVICES",
    links: ["Dog Walking", "Pet Sitting", "Grooming", "Veterinary Care", "Boarding", "Training"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Press", "Blog", "Investors"],
  },
  {
    title: "RESOURCES",
    links: ["Help Center", "Community", "Pet Care Tips", "Provider Guide", "API Docs"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy", "Safety"],
  },
];

export default function Footer({ navigate }) {
  const goTo = (event, path) => {
    event.preventDefault();

    if (navigate) {
      navigate(path);
      return;
    }

    window.location.href = path;
  };

  return (
    <footer className="bg-[#1f2c3c] text-[#aab4c3] pt-[74px] pb-10">
      <div className="max-w-[1184px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_repeat(4,1fr)] gap-14 lg:gap-[78px]">
          <div>
            <a
              href="/"
              onClick={(event) => goTo(event, "/")}
              className="inline-flex items-center mb-6"
              aria-label="Go to Pawzy home"
            >
              <img src={Link} alt="Pawzy app logo — trusted pet care booking" className="h-[40px] w-auto block" />
            </a>

            <p className="text-[14px] leading-[1.75] font-medium text-[#aab4c3] mb-6">
              Trusted pet care, on your schedule.
              <br />
              Book verified walkers, sitters, groomers,
              <br />
              trainers, and vets — all in one place.
            </p>

            <div className="flex gap-2.5 mb-6">
              <button className="h-[55px] px-4 rounded-[10px] border border-[#465265] bg-[#334155] text-white flex items-center gap-2.5">
                <span className="text-xl">🍎</span>
                <span className="flex flex-col items-start leading-tight">
                  <small className="text-[8px] text-[#d7dde6] font-semibold">Download on the</small>
                  <b className="text-[14px] font-black">App Store</b>
                </span>
              </button>

              <button className="h-[55px] px-4 rounded-[10px] border border-[#465265] bg-[#334155] text-white flex items-center gap-2.5">
                <span className="text-xl">▶</span>
                <span className="flex flex-col items-start leading-tight">
                  <small className="text-[8px] text-[#d7dde6] font-semibold">Get it on</small>
                  <b className="text-[14px] font-black">Google Play</b>
                </span>
              </button>
            </div>

            <div className="flex gap-2.5 mb-6">
              {['𝕏', 'in', 'f', '📸'].map((item) => (
                <button
                  key={item}
                  className="w-[34px] h-[34px] rounded-[8px] bg-[#334155] text-white grid place-items-center text-[13px] font-extrabold"
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
              <h4 className="text-[#d5dbe5] text-[13px] font-black mb-3">
                Get pet care tips & exclusive offers
              </h4>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[185px] h-[39px] rounded-[9px] border border-[#4b5568] bg-[#334155] px-4 text-white outline-none placeholder:text-[#8d98a8] text-[13px]"
                />
                <button className="h-[39px] px-[17px] rounded-[9px] bg-[#27c7c4] text-white text-[12px] font-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mt-2 mb-7 text-[#818b9b] text-[12px] font-black tracking-[2px]">
                {column.title}
              </h4>

              <ul className="space-y-[17px]">
                {column.links.map((link) => {
                  const footerPaths = {
                    "Dog Walking": "/services/dog-walking",
                    "Pet Sitting": "/services/pet-sitting",
                    "Grooming": "/services/grooming",
                    "Veterinary Care": "/services/veterinary-care",
                    "Boarding": "/services/boarding",
                    "Training": "/services/training",
                    "About Us": "/about-us",
                    "Careers": "/careers",
                    "Press": "/press",
                    "Blog": "/blogs",
                    "Investors": "/investors",
                    "Help Center": "/faq",
                    "Community": "/community",
                    "Pet Care Tips": "/pet-care-tips",
                    "Provider Guide": "/provider-guide",
                    "API Docs": "/api-docs",
                    "Privacy Policy": "/privacy-policy",
                    "Terms of Service": "/terms-of-service",
                    "Cookie Policy": "/cookie-policy",
                    "Refund Policy": "/refund-policy",
                    "Safety": "/safety",
                  };
                  const path = footerPaths[link] || "#";

                  return (
                    <li key={link}>
                      <a
                        href={path}
                        onClick={path === "#" ? undefined : (event) => goTo(event, path)}
                        className="text-[#c1c8d2] text-[14px] font-medium hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[60px] pt-7 border-t border-[#334155] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-[#818b9b] text-[12px] font-medium">
            © 2026 Pawzy Technologies Pvt. Ltd. Made with ❤️ for pets everywhere.
          </p>

          <div className="flex gap-7">
            <a href="/privacy-policy" onClick={(event) => goTo(event, "/privacy-policy")} className="text-[#818b9b] text-[12px] font-medium hover:text-white">Privacy</a>
            <a href="/terms-of-service" onClick={(event) => goTo(event, "/terms-of-service")} className="text-[#818b9b] text-[12px] font-medium hover:text-white">Terms</a>
            <a href="/cookie-policy" onClick={(event) => goTo(event, "/cookie-policy")} className="text-[#818b9b] text-[12px] font-medium hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
