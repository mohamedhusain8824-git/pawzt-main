export default function Statistics() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 text-center">

          {/* Item 1 */}
          <div className="border-r border-gray-200">
            <h2 className="text-5xl font-bold text-slate-900">
              25,000<span className="text-[#28C7B7]">+</span>
            </h2>

            <p className="mt-3 text-gray-500 text-sm">
              Happy Pet Owners
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-r border-gray-200">
            <h2 className="text-5xl font-bold text-slate-900">
              8,500<span className="text-[#28C7B7]">+</span>
            </h2>

            <p className="mt-3 text-gray-500 text-sm">
              Verified Providers
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-r border-gray-200">
            <h2 className="text-5xl font-bold text-slate-900">
              50,000<span className="text-[#28C7B7]">+</span>
            </h2>

            <p className="mt-3 text-gray-500 text-sm">
              Bookings Completed
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h2 className="text-5xl font-bold text-slate-900">
              4.9<span className="text-[#28C7B7]">★</span>
            </h2>

            <p className="mt-3 text-gray-500 text-sm">
              Average Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}