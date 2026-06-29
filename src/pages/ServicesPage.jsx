import "./ServicesPage.css";

const services = [
  {
    icon: "🐾",
    title: "Pet Sitting",
    rating: "4.9",
    gradient: "mint",
    accent: "teal",
    description:
      "Trusted pet sitters provide feeding, playtime, companionship, medication support, overnight care, and daily updates while you're away.",
    features: ["Verified Sitters", "Live Updates", "Daily Reports", "Emergency Support"],
    count: "2,400+ sitters near you",
  },
  {
    icon: "🚶",
    title: "Pet Walking",
    rating: "4.8",
    gradient: "purple",
    accent: "purple",
    description:
      "Professional walkers offer GPS-tracked walks, exercise routines, real-time location tracking, and photo check-ins for your peace of mind.",
    features: ["GPS Tracking", "Route History", "Photo Updates", "Fitness Monitoring"],
    count: "1,800+ walkers near you",
  },
  {
    icon: "🏥",
    title: "Vet Consultation",
    rating: "4.9",
    gradient: "yellow",
    accent: "orange",
    description:
      "Connect with licensed veterinarians for health checkups, vaccinations, medical advice, prescriptions, and emergency consultations.",
    features: ["Licensed Vets", "Online Consultations", "Medical Records", "Health Tracking"],
    count: "950+ licensed vets",
  },
  {
    icon: "✂️",
    title: "Grooming",
    rating: "4.8",
    gradient: "pink",
    accent: "pink",
    description:
      "Professional grooming including bathing, coat care, nail trimming, ear cleaning, styling, and hygiene treatments — at home or mobile.",
    features: ["Certified Groomers", "Mobile Grooming", "Premium Products", "Before & After Photos"],
    count: "1,200+ groomers near you",
  },
  {
    icon: "🏨",
    title: "Boarding",
    rating: "4.9",
    gradient: "blue",
    accent: "blue",
    description:
      "Safe and comfortable boarding facilities with 24/7 supervision, feeding schedules, activity monitoring, and daily updates sent to you.",
    features: ["Secure Facilities", "Daily Updates", "Vet Support", "Personalized Care"],
    count: "640+ boarding facilities",
  },
];

function ServicesStats() {
  return (
    <div className="svc-stats-box">
      <div className="svc-stat-item">
        <h3>8K<span>+</span></h3>
        <p>Providers</p>
      </div>
      <div className="svc-stat-line" />
      <div className="svc-stat-item">
        <h3>25K<span>+</span></h3>
        <p>Happy Owners</p>
      </div>
      <div className="svc-stat-line" />
      <div className="svc-stat-item">
        <h3>4.9<span>★</span></h3>
        <p>Rating</p>
      </div>
      <div className="svc-stat-line" />
      <div className="svc-stat-item">
        <h3>5</h3>
        <p>Services</p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="svc-service-card">
      <div className={`svc-service-card-top ${service.gradient}`}>
        <span className="svc-service-icon">{service.icon}</span>
      </div>

      <div className="svc-service-card-body">
        <div className="svc-service-card-title-row">
          <h3>{service.title}</h3>
          <span className={`svc-rating-pill ${service.accent}`}>★ {service.rating}</span>
        </div>

        <p className="svc-service-desc">{service.description}</p>

        <ul className="svc-service-features">
          {service.features.map((item) => (
            <li key={item} className={service.accent}>
              <span>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="svc-service-card-footer">
          <p>{service.count}</p>
          <button className={`svc-details-btn ${service.accent}`}>View Details →</button>
        </div>
      </div>
    </article>
  );
}

function TrustStrip() {
  return (
    <section className="svc-trust-strip">
      <div className="svc-trust-item">
        <div className="svc-trust-icon shield">🛡️</div>
        <div>
          <h4>Background Verified</h4>
          <p>Every provider is checked</p>
        </div>
      </div>

      <div className="svc-trust-review">
        <span>⭐</span>
        <div>
          <h4>4.9★ Average</h4>
          <p>From 60,000+ reviews</p>
        </div>
      </div>

      <div className="svc-trust-item">
        <div className="svc-trust-icon pin">📍</div>
        <div>
          <h4>Live GPS Tracking</h4>
          <p>Real-time on every service</p>
        </div>
      </div>

      <div className="svc-trust-item">
        <div className="svc-trust-icon money">💰</div>
        <div>
          <h4>Secure Payments</h4>
          <p>Protected by Pawzy Guarantee</p>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="svc-page">
      <section className="svc-hero-section">
        <div className="svc-hero-glow" />

        <div className="svc-premium-pill">
          <span /> Premium Pet Care Services
        </div>

        <h1>
          Your Complete <br />
          <span className="hero-gradient-line">
            <span className="pet-care-text">Pet Care</span>{" "}
            <span className="marketplace-text">Marketplace</span>
          </span>
        </h1>

        <p className="svc-hero-text">
          Five world-class services. Thousands of verified providers. One beautifully designed platform — built for pets and the people who love them.
        </p>

        <ServicesStats />

        <div className="svc-explore-label">
          EXPLORE ALL SERVICES
        </div>
      </section>

      <section id="services" className="svc-cards-section">
        <div className="svc-services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <TrustStrip />
    </main>
  );
}
