const bookings = [
  {
    icon: "✂️",
    title: "Grooming Session",
    time: "Tomorrow • 11:00 AM",
    status: "✅ Confirmed",
    provider: "Emily Carter — Professional Groomer",
    progress: 85,
    color: "bg-[#32D1B6]",
    statusBg: "bg-green-100 text-green-600",
    avatar: "E",
    avatarBg: "bg-[#DDF8F2]",
  },
  {
    icon: "🐕",
    title: "Dog Walking",
    time: "Today • 5:00 PM",
    status: "👤 Provider Assigned",
    provider: "Sarah Jenkins — Dog Walker",
    progress: 55,
    color: "bg-[#32D1B6]",
    statusBg: "bg-cyan-100 text-cyan-600",
    avatar: "S",
    avatarBg: "bg-[#DDF8F2]",
  },
  {
    icon: "🏥",
    title: "Vet Consultation",
    time: "Saturday • 10:00 AM",
    status: "📅 Scheduled",
    provider: "Dr. Anjali Mehta — Veterinarian",
    progress: 30,
    color: "bg-[#B992FF]",
    statusBg: "bg-purple-100 text-purple-600",
    avatar: "D",
    avatarBg: "bg-purple-100",
  },
];

export default function UpcomingBookings() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
          — BOOKING WORKFLOW
        </p>

        <h2 className="mt-4 text-5xl font-bold text-[#111827]">
          Your Upcoming{" "}
          <span className="text-[#28C7B7]">
            Bookings
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-xl leading-8">
          Track, manage, and reschedule all your pet care
          appointments in one place.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-xl">
                  {booking.icon}
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {booking.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {booking.time}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-6 ${booking.statusBg}`}
              >
                {booking.status}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${booking.color} rounded-full`}
                    style={{ width: `${booking.progress}%` }}
                  />
                </div>

                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>Progress</span>
                  <span className="font-semibold">
                    {booking.progress}%
                  </span>
                </div>
              </div>

              {/* Provider */}
              <div className="flex items-center gap-3 mt-6">

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold ${booking.avatarBg}`}
                >
                  {booking.avatar}
                </div>

                <p className="text-sm font-medium text-slate-700">
                  {booking.provider}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}