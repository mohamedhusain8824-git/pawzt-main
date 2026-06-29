export default function Hero() {
  return (
    <section className="bg-[#F5FBFA] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Video */}
        <h1 className="text-center text-5xl font-medium mb-14">
          Video
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DDF8F2] text-[#28C7B7] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#28C7B7]"></span>
              #1 Pet Care Platform in India
            </div>

            <h1 className="mt-8 text-[58px] leading-[65px] font-bold text-slate-900">
              Trusted Pet Care,
              <br />
              <span className="text-[#28C7B7]">
                On Your Schedule
              </span>
            </h1>

            <p className="mt-7 text-gray-500 text-lg leading-8 max-w-lg">
              Book verified pet walkers, sitters, groomers,
              trainers, and veterinarians with real-time
              availability and flexible scheduling.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#28C7B7] text-white px-8 py-4 rounded-2xl shadow-lg">
                🐾 Book a Service
              </button>

              <button className="bg-white border border-gray-200 px-8 py-4 rounded-2xl shadow-sm">
                Become a Provider →
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10">

              <div className="flex -space-x-2">
                {["S", "M", "R", "A", "+"].map((item, index) => (
                  <div
                    key={index}
                    className="w-9 h-9 rounded-full bg-[#C8F5EF] border-2 border-white flex items-center justify-center text-[#28C7B7] text-xs font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Trusted by <b>25,000+</b> happy pet owners
              </p>

              <p className="text-sm text-gray-500">
                ⭐⭐⭐⭐⭐ <b>4.9</b> avg rating
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-6">

              <h3 className="font-bold text-slate-800 mb-5">
                📅 My Bookings Dashboard
              </h3>

              <div className="flex gap-3 mb-6">
                <button className="bg-[#28C7B7] text-white px-4 py-2 rounded-xl text-sm">
                  All
                </button>

                <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
                  Upcoming
                </button>

                <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
                  Completed
                </button>

                <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
                  Cancelled
                </button>
              </div>

              {/* Cards */}

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-[#DDF8F2] rounded-2xl p-5">
                  <h4 className="font-semibold">
                    🐕 Dog Walking
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Today • 5:00 PM
                  </p>

                  <p className="text-[#28C7B7] font-bold mt-4">
                    ₹299
                  </p>
                </div>

                <div className="bg-[#FCE6EE] rounded-2xl p-5">
                  <h4 className="font-semibold">
                    ✂️ Grooming
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Tomorrow • 11:00 AM
                  </p>

                  <p className="text-[#28C7B7] font-bold mt-4">
                    ₹799
                  </p>
                </div>

                <div className="bg-[#ECE8FD] rounded-2xl p-5">
                  <h4 className="font-semibold">
                    🏥 Vet Consultation
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Saturday • 10:00 AM
                  </p>

                  <p className="text-[#28C7B7] font-bold mt-4">
                    ₹800
                  </p>
                </div>

                <div className="bg-[#FFF8DB] rounded-2xl p-5">
                  <h4 className="font-semibold">
                    🏠 Pet Sitting
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Today • Ongoing
                  </p>

                  <p className="text-[#28C7B7] font-bold mt-4">
                    ₹699
                  </p>
                </div>

              </div>

              {/* Available Slots */}

              <div className="mt-6 bg-[#F7F8F9] rounded-3xl p-5">

                <div className="flex justify-between items-center mb-5">
                  <h4 className="font-semibold text-slate-800">
                    Available Slots
                  </h4>

                  <button className="text-[#28C7B7] text-sm font-medium">
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-5">

                  <div className="bg-[#28C7B7] text-white rounded-2xl py-4 text-center">
                    <p className="text-xs">Tue</p>
                    <h3 className="text-2xl font-bold">
                      03
                    </h3>
                  </div>

                  <div className="bg-white border rounded-2xl py-4 text-center">
                    <p className="text-xs text-gray-500">
                      Wed
                    </p>
                    <h3 className="text-2xl font-bold">
                      04
                    </h3>
                  </div>

                  <div className="bg-white border rounded-2xl py-4 text-center">
                    <p className="text-xs text-gray-500">
                      Thu
                    </p>
                    <h3 className="text-2xl font-bold">
                      05
                    </h3>
                  </div>

                  <div className="bg-white border rounded-2xl py-4 text-center">
                    <p className="text-xs text-gray-500">
                      Sat
                    </p>
                    <h3 className="text-2xl font-bold">
                      07
                    </h3>
                  </div>

                </div>

                <div className="grid grid-cols-4 gap-3">

                  <button className="bg-white border rounded-xl py-3 text-sm">
                    09:00 AM
                  </button>

                  <button className="bg-white border rounded-xl py-3 text-sm">
                    11:00 AM
                  </button>

                  <button className="bg-[#DDF8F2] text-[#28C7B7] rounded-xl py-3 text-sm font-medium">
                    02:00 PM
                  </button>

                  <button className="bg-white border rounded-xl py-3 text-sm">
                    05:00 PM
                  </button>

                </div>

              </div>

            </div>

            {/* Status Card */}

            <div className="absolute -top-5 right-0 bg-white rounded-2xl shadow-xl p-4">
              <p className="text-green-500 text-2xl">
                ✅
              </p>

              <p className="text-xs text-gray-400 mt-2">
                BOOKING STATUS
              </p>

              <h4 className="font-bold text-green-500">
                Confirmed
              </h4>
            </div>

            {/* Review Card */}

            <div className="absolute bottom-10 -left-10 bg-white rounded-3xl shadow-xl p-5 w-44">

              <p className="text-yellow-400 text-xl">
                ⭐
              </p>

              <p className="text-xs text-gray-400 mt-2">
                LIVE REVIEW
              </p>

              <h3 className="font-bold text-2xl">
                4.9 / 5.0
              </h3>

              <p className="text-xs text-gray-400">
                500+ verified reviews
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}