const features = [
  {
    icon: "🛡️",
    title: "Verified Professionals",
    description:
      "Every provider passes strict background checks, credential verification, and community reviews before joining.",
    bg: "bg-[#DDF8F2]",
  },
  {
    icon: "📅",
    title: "Easy Scheduling",
    description:
      "Flexible booking with real-time availability. Cancel or reschedule with zero hassle.",
    bg: "bg-[#DDF8F2]",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description:
      "Encrypted, protected transactions with full refund policy. Pay only when you're happy.",
    bg: "bg-[#EEE8FD]",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    description:
      "GPS-powered live tracking for walks and visits. Watch your pet's journey with live updates.",
    bg: "bg-[#FFF5CC]",
  },
  {
    icon: "💬",
    title: "Instant Support",
    description:
      "24/7 in-app chat and emergency support. Our team is always there when you need us most.",
    bg: "bg-[#FFE7D8]",
  },
  {
    icon: "📋",
    title: "Pet Health Records",
    description:
      "Centralized pet profiles with vaccinations, medical history, and appointment records.",
    bg: "bg-[#FFE6EF]",
  },
];

export default function WhyPawzy() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
          — WHY PAWZY
        </p>

        <h2 className="mt-4 text-5xl font-bold text-[#111827]">
          Why Pet Owners{" "}
          <span className="text-[#28C7B7]">
            Love Pawzy
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-xl leading-8">
          Built for pet parents who want the best care with
          total peace of mind.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-500 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}