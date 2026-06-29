export default function HowItWorks() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#28C7B7] text-sm font-semibold uppercase tracking-wider">
          — HOW IT WORKS
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Book Instantly in{" "}
          <span className="text-[#28C7B7]">
            3 Steps
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg leading-8 max-w-lg">
          Getting the right care for your pet has never been this simple.
          Fast, secure, and reliable.
        </p>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-[#B9EEE8]"></div>

          <div className="grid md:grid-cols-3 relative z-10">

            {/* Step 1 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#28C7B7] rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-800">
                Choose Service
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                Select from 6+ pet care categories
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#28C7B7] rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-800">
                Select Date
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                Pick a date from live availability
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#28C7B7] rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-800">
                Pick Time Slot
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                Choose your preferred time
              </p>
            </div>

          </div>
        </div>

        {/* Appointment Card */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-[30px] shadow-lg border border-gray-100 p-8">

          {/* Top */}
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">
              📅 Book Appointment
            </h3>

            <p className="text-sm text-gray-400">
              Step 2 of 3
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button className="bg-[#28C7B7] text-white px-5 py-3 rounded-full text-sm">
              🐕 Dog Walking
            </button>

            <button className="bg-gray-100 px-5 py-3 rounded-full text-sm">
              ✂️ Grooming
            </button>

            <button className="bg-gray-100 px-5 py-3 rounded-full text-sm">
              🏥 Vet Consult
            </button>

            <button className="bg-gray-100 px-5 py-3 rounded-full text-sm">
              🏠 Pet Sitting
            </button>

            <button className="bg-gray-100 px-5 py-3 rounded-full text-sm">
              🐾 Boarding
            </button>

          </div>

          {/* Dates */}
          <h4 className="mt-8 font-semibold text-slate-800">
            Select Date
          </h4>

          <div className="grid grid-cols-5 gap-4 mt-4">

            <div className="bg-[#28C7B7] text-white rounded-2xl p-5 text-center">
              <p className="text-xs">TODAY</p>
              <h3 className="text-3xl font-bold mt-2">02</h3>
              <p className="text-xs mt-2">4 slots</p>
            </div>

            <div className="border rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-500">TUE</p>
              <h3 className="text-3xl font-bold mt-2">03</h3>
              <p className="text-xs text-gray-400 mt-2">6 slots</p>
            </div>

            <div className="border rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-500">WED</p>
              <h3 className="text-3xl font-bold mt-2">04</h3>
              <p className="text-xs text-gray-400 mt-2">3 slots</p>
            </div>

            <div className="border rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-500">THU</p>
              <h3 className="text-3xl font-bold mt-2">05</h3>
              <p className="text-xs text-gray-400 mt-2">5 slots</p>
            </div>

            <div className="border rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-500">SAT</p>
              <h3 className="text-3xl font-bold mt-2">07</h3>
              <p className="text-xs text-gray-400 mt-2">8 slots</p>
            </div>

          </div>

          {/* Time Slots */}
          <h4 className="mt-8 font-semibold text-slate-800">
            Available Time Slots
          </h4>

          <div className="grid grid-cols-4 gap-4 mt-4">

            <button className="border-2 border-[#28C7B7] rounded-2xl py-5">
              <h5 className="font-semibold text-[#28C7B7]">
                9:00 AM
              </h5>
              <p className="text-sm text-[#28C7B7]">
                Available
              </p>
            </button>

            <button className="border rounded-2xl py-5">
              <h5 className="font-semibold">
                11:00 AM
              </h5>
              <p className="text-sm text-[#28C7B7]">
                Available
              </p>
            </button>

            <button className="border rounded-2xl py-5">
              <h5 className="font-semibold">
                2:00 PM
              </h5>
              <p className="text-sm text-[#28C7B7]">
                2 left
              </p>
            </button>

            <button className="border rounded-2xl py-5">
              <h5 className="font-semibold">
                5:00 PM
              </h5>
              <p className="text-sm text-[#28C7B7]">
                Available
              </p>
            </button>

          </div>

          {/* Button */}
          <button className="w-full mt-8 py-5 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-[#28C7B7] to-[#43D17E] shadow-lg">
            Book Appointment →
          </button>

        </div>

      </div>
    </section>
  );
}