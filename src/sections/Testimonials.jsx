const reviews = [
  {
    name: "Priya Sharma",
    pet: "🐕 Bruno — Golden Retriever, Mumbai",
    review:
      "Pawzy has completely changed how I care for Bruno. Sarah always sends updates during walks and he absolutely loves her. The whole booking experience is seamless and the app is gorgeous!",
    avatar: "P",
    avatarBg: "bg-[#32D1B6]",
    badge: true,
    card: "bg-[#F3FFFD]",
  },
  {
    name: "Rahul Gupta",
    pet: "🐱 Luna — Persian Cat, Delhi",
    review:
      "Dr. Anjali is amazing! Booked a vet consultation in under 2 minutes and got the best advice for my cat's health issue. The pet profile feature keeps all records organized perfectly.",
    avatar: "R",
    avatarBg: "bg-[#B89CFF]",
    badge: false,
    card: "bg-white",
  },
  {
    name: "Ananya Mehta",
    pet: "🐶 Max — Border Collie, Bangalore",
    review:
      "Emily at Pawzy transformed my dog's grooming experience. Max used to hate baths but he now wags his tail when we book on the app. The real-time tracking gives me total peace of mind.",
    avatar: "A",
    avatarBg: "bg-pink-300",
    badge: false,
    card: "bg-white",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-[#32D1B6] text-sm font-semibold uppercase tracking-wider">
          — REVIEWS
        </p>

        <h2 className="mt-4 text-5xl font-bold text-[#111827]">
          Pet Owners{" "}
          <span className="text-[#32D1B6]">
            Love Us
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-lg leading-8">
          Join thousands of happy pet parents across India
          who trust Pawzy every day.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${review.card} rounded-[30px] border border-gray-100 p-8 shadow-sm relative`}
            >
              {/* Top Review Badge */}
              {review.badge && (
                <div className="absolute top-6 right-6 bg-[#DDF8F2] text-[#32D1B6] px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Top Review
                </div>
              )}

              {/* Stars */}
              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              {/* Review Text */}
              <p className="mt-8 text-gray-700 leading-8 italic">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-10">

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${review.avatarBg}`}
                >
                  {review.avatar}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">
                    {review.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {review.pet}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}