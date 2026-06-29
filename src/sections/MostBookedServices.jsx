const services = [
  {
    icon: "🐕",
    title: "Dog Walking",
    growth: "+65% Growth",
    bookings: "12,000",
    progress: "75%",
  },
  {
    icon: "✂️",
    title: "Grooming",
    growth: "+48% Growth",
    bookings: "8,500",
    progress: "55%",
  },
  {
    icon: "🏥",
    title: "Vet Consultation",
    growth: "+35% Growth",
    bookings: "6,000",
    progress: "40%",
  },
];

export default function MostBookedServices() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#042F2E]">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#66E7DA] text-sm font-semibold uppercase tracking-wider">
          — PLATFORM ANALYTICS
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Most Booked{" "}
          <span className="text-[#2ED3C5]">
            Services
          </span>
        </h2>

        <p className="mt-5 text-gray-300 text-lg">
          Real-time demand data from our growing platform.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                rounded-[30px]
                border border-cyan-500/20
                bg-white/5
                backdrop-blur-md
                p-8
                shadow-xl
              "
            >
              {/* Icon */}
              <div className="text-4xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Growth Badge */}
              <div className="inline-block mt-4 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                📈 {service.growth}
              </div>

              {/* Number */}
              <h1 className="mt-8 text-6xl font-bold text-[#2ED3C5]">
                {service.bookings}
              </h1>

              <p className="text-gray-400 mt-2">
                Monthly Bookings
              </p>

              {/* Progress Bar */}
              <div className="mt-8 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400"
                  style={{
                    width: service.progress,
                  }}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}