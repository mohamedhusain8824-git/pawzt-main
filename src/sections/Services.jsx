const services = [
  {
    icon: "🐕",
    bg: "bg-[#DFF8F3]",
    title: "Dog Walking",
    description:
      "Daily exercise and companionship for your furry friend with real-time GPS tracking.",
    link: "Book a Walk →",
  },
  {
    icon: "🏠",
    bg: "bg-[#FDE7EE]",
    title: "Pet Sitting",
    description:
      "Trusted in-home care while you're away. Verified sitters your pet will love.",
    link: "Find a Sitter →",
  },
  {
    icon: "✂️",
    bg: "bg-[#F0E8FF]",
    title: "Grooming",
    description:
      "Professional pet spa services — baths, haircuts, nail trimming and more.",
    link: "Book Grooming →",
  },
  {
    icon: "🏥",
    bg: "bg-[#DFF8F3]",
    title: "Veterinary Care",
    description:
      "Online and clinic consultations with certified veterinarians near you.",
    link: "Book a Vet →",
  },
  {
    icon: "🐾",
    bg: "bg-[#FFE7D8]",
    title: "Boarding",
    description:
      "Safe, comfortable overnight stays at verified pet-friendly boarding facilities.",
    link: "Find Boarding →",
  },
  {
    icon: "🎾",
    bg: "bg-[#DDF8D8]",
    title: "Training",
    description:
      "Certified pet trainers for obedience, behavior correction, and fun tricks.",
    link: "Book Training →",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
          — Our Services
        </p>

        <h2 className="text-5xl font-bold text-[#111827] mt-4">
          Everything Your Pet{" "}
          <span className="text-[#28C7B7]">
            Needs
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-xl leading-8">
          From daily walks to specialized veterinary care —
          find trusted professionals for every pet service.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center text-2xl`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {service.description}
              </p>

              <button className="mt-8 text-[#28C7B7] font-semibold hover:underline">
                {service.link}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}