export default function JoinAsProvider() {
  const roles = [
    "🐕 Dog Walker",
    "✂️ Groomer",
    "🏠 Pet Sitter",
    "🎾 Trainer",
    "🏥 Veterinarian",
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-r from-[#DFFAF6] via-[#39D6D3] to-[#2CCFD1]">

      {/* Left Paw */}
      <div className="absolute top-10 left-0 opacity-10 text-[140px] rotate-[-20deg]">
        🐾
      </div>

      {/* Right Paw */}
      <div className="absolute bottom-8 right-0 opacity-10 text-[140px] rotate-[20deg]">
        🐾
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Small Heading */}
        <p className="uppercase tracking-widest text-[#7DE9DD] text-sm font-semibold">
          — JOIN AS PROVIDER
        </p>

        {/* Main Heading */}
        <h2 className="mt-6 text-6xl font-bold text-[#111827] leading-tight">
          Love Animals?
          <br />
          Earn With Pawzy 🐾
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto leading-8">
          Join as a Walker, Groomer, Sitter, Trainer,
          or Veterinarian. Set your own schedule.
          Grow your income.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <button className="px-10 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#2ED3C5] to-[#43D17E] shadow-lg">
            Become a Provider →
          </button>

          <button className="px-10 py-4 rounded-2xl bg-white text-gray-800 font-semibold shadow-md">
            Learn More
          </button>

        </div>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {roles.map((role, index) => (
            <div
              key={index}
              className="
                bg-white/90
                backdrop-blur-sm
                px-5
                py-3
                rounded-full
                shadow-sm
                text-sm
                font-medium
                text-gray-700
              "
            >
              {role}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}