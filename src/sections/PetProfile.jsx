const features = [
  {
    icon: "💉",
    title: "Vaccination History",
    text: "Track all vaccines with due dates and reminders",
    bg: "bg-[#DDF8F2]",
  },
  {
    icon: "📋",
    title: "Medical Records",
    text: "Complete health history accessible anytime",
    bg: "bg-[#DDF8F2]",
  },
  {
    icon: "📅",
    title: "Upcoming Appointments",
    text: "Never miss a vet visit or grooming session",
    bg: "bg-[#EEE8FD]",
  },
  {
    icon: "❤️",
    title: "Favourite Providers",
    text: "Save and re-book your most trusted caregivers",
    bg: "bg-[#FFF5CC]",
  },
  {
    icon: "📊",
    title: "Health Timeline",
    text: "Visual progress and wellness milestones",
    bg: "bg-[#FFE6EF]",
  },
];

export default function PetProfile() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
              — PET PROFILES
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#111827] leading-tight">
              Your Pet's{" "}
              <span className="text-[#28C7B7]">
                Complete World
              </span>
            </h2>

            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-lg">
              A beautiful digital profile for every pet —
              health records, appointments, and favorite
              providers in one place.
            </p>

            <div className="mt-12 space-y-8">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center text-xl`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-6">

            {/* Header */}
            <div className="flex justify-between items-center">

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#28C7B7] to-[#7BE7D8] flex items-center justify-center text-3xl">
                  🐶
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-800">
                    Max 🐾
                  </h3>

                  <p className="text-gray-500">
                    Dog • Border Collie • 3 years
                  </p>
                </div>
              </div>

              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                Healthy ✓
              </div>

            </div>

            {/* Tabs */}
            <div className="flex gap-3 mt-8">

              <button className="bg-[#28C7B7] text-white px-5 py-3 rounded-xl">
                About
              </button>

              <button className="bg-gray-100 px-5 py-3 rounded-xl">
                Health
              </button>

              <button className="bg-gray-100 px-5 py-3 rounded-xl">
                Bookings
              </button>

              <button className="bg-gray-100 px-5 py-3 rounded-xl">
                Providers
              </button>

            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-[#F7F9F8] rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  GENDER
                </p>
                <h4 className="font-semibold mt-2">
                  Male 🐾
                </h4>
              </div>

              <div className="bg-[#F7F9F8] rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  WEIGHT
                </p>
                <h4 className="font-semibold mt-2">
                  22.2 kg
                </h4>
              </div>

              <div className="bg-[#F7F9F8] rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  BIRTHDAY
                </p>
                <h4 className="font-semibold mt-2">
                  3 Nov 2019
                </h4>
              </div>

              <div className="bg-[#F7F9F8] rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  ADOPTION DAY
                </p>
                <h4 className="font-semibold mt-2">
                  6 Jan 2020
                </h4>
              </div>

            </div>

            {/* Timeline */}
            <div className="mt-8">

              <h4 className="font-semibold text-slate-800 mb-5">
                🗓️ Health Timeline
              </h4>

              <div className="space-y-4">

                <div className="flex justify-between border-b pb-3">
                  <span>🟢 Rabies Vaccination</span>
                  <span className="text-green-500">
                    ✓ Done
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>🔵 Annual Check-up</span>
                  <span className="text-gray-500">
                    Jun 15, 2026
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>🟡 Deworming</span>
                  <span className="text-gray-500">
                    Due Jun 20
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>🟢 Grooming Scheduled</span>
                  <span className="text-gray-500">
                    Tomorrow
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}