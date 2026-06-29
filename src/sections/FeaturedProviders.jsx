const providers = [
  {
    name: "Sarah Jenkins",
    role: "Certified Dog Walker",
    rating: "4.9",
    exp: "500+ Walks",
    distance: "1.2 mi",
    price: "₹299",
    unit: "/ Walk",
    badge: "🟢 Available Now",
    bg: "from-cyan-100 to-cyan-400",
    avatar: "👩",
  },
  {
    name: "Mike Ross",
    role: "Professional Pet Sitter",
    rating: "4.8",
    exp: "300+ Bookings",
    distance: "0.8 mi",
    price: "₹699",
    unit: "/ Day",
    badge: "🟢 Available Today",
    bg: "from-green-100 to-green-400",
    avatar: "👨",
  },
  {
    name: "Emily Carter",
    role: "Professional Groomer",
    rating: "5.0",
    exp: "700+ Sessions",
    distance: "2.1 mi",
    price: "₹799",
    unit: "/ Session",
    badge: "🟢 Available Tomorrow",
    bg: "from-purple-100 to-purple-300",
    avatar: "👩",
  },
];

export default function FeaturedProviders() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
          — TOP RATED
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Featured{" "}
          <span className="text-[#28C7B7]">
            Providers
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-lg">
          Handpicked, background-checked professionals loved by
          thousands of pet owners.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Top Gradient */}
              <div
                className={`h-36 bg-gradient-to-r ${provider.bg} relative`}
              >
                {/* Badge */}
                <div className="absolute top-5 right-5 bg-green-500 text-white text-xs px-4 py-2 rounded-full">
                  {provider.badge}
                </div>

                {/* Avatar */}
                <div className="absolute bottom-4 left-5 w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center text-2xl shadow-md">
                  {provider.avatar}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-2xl font-semibold text-slate-800">
                  {provider.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {provider.role}
                </p>

                <div className="flex gap-5 text-sm text-gray-500 mt-5">
                  <span>⭐ {provider.rating}</span>
                  <span>🐕 {provider.exp}</span>
                  <span>📍 {provider.distance}</span>
                </div>

                <div className="mt-6">
                  <span className="text-3xl font-bold text-slate-900">
                    {provider.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    {provider.unit}
                  </span>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  <button className="border border-gray-200 py-3 rounded-2xl font-medium hover:bg-gray-50 transition">
                    View Profile
                  </button>

                  <button className="bg-gradient-to-r from-[#28C7B7] to-[#43D17E] text-white py-3 rounded-2xl font-medium shadow-md">
                    Book Now
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}