import Link from "../assets/icons/Link.png";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "Walkers", path: "/services/dog-walking" },
  { label: "Sitters", path: "/services/pet-sitting" },
  { label: "Grooming", path: "/services/grooming" },
  { label: "Veterinarians", path: "/services/veterinary-care" },
  { label: "Pricing", path: "/services" },
  { label: "Blogs", path: "/blogs" },
  { label: "FAQ", path: "/faq" },
];

export default function Header({ navigate, activePath = "/" }) {
  const goTo = (event, path) => {
    event.preventDefault();

    if (navigate) {
      navigate(path);
      return;
    }

    window.location.href = path;
  };

  return (
    <header className="w-full bg-[#f7f9f8] pt-6 px-6 relative z-50">
      <nav className="max-w-[1920px] mx-auto h-[78px] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.10)] px-10 lg:px-20 flex items-center justify-between">
        <a
          href="/"
          onClick={(event) => goTo(event, "/")}
          className="flex items-center shrink-0"
          aria-label="Go to Pawzy home"
        >
          <img src={Link} alt="Pawzy app logo — trusted pet care booking" className="h-[42px] w-auto block" />
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-[15px] text-[#596174] font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.path}
                onClick={(event) => goTo(event, item.path)}
                className={
                  activePath === item.path
                    ? "text-[#18bfb7]"
                    : "hover:text-[#18bfb7] transition-colors"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8 shrink-0">
          <button className="text-[#111827] text-[15px] font-bold hover:text-[#18bfb7] transition-colors">
            Sign In
          </button>

          <button
            onClick={(event) => goTo(event, "/")}
            className="h-[58px] px-8 rounded-[14px] bg-[#27c7c4] text-white text-[15px] font-extrabold shadow-[0_16px_30px_rgba(39,199,196,0.28)] hover:bg-[#16bfb8] transition-colors"
          >
            Get Started →
          </button>
        </div>
      </nav>
    </header>
  );
}
