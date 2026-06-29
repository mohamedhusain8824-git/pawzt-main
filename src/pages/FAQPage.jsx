import React from "react";
import "./FAQPage.css";

const topics = [
  { icon: "🚀", title: "Getting Started", count: 5 },
  { icon: "🐾", title: "Services & Booking", count: 6 },
  { icon: "💳", title: "Payments & Pricing", count: 5 },
  { icon: "🧑‍⚕️", title: "Providers & Trust", count: 5 },
  { icon: "🛡️", title: "Safety & Support", count: 4 },
  { icon: "👤", title: "Account & Profile", count: 4 },
];

const faqSections = [
  {
    icon: "🚀",
    color: "mint",
    title: "Getting Started",
    desc: "New to Pawzy? Start here.",
    count: "5 questions",
    questions: [
      {
        title: "What is Pawzy and how does it work?",
        open: true,
      },
      {
        title: "How do I create a Pawzy account?",
      },
      {
        title: "What types of pets does Pawzy support?",
      },
      {
        title: "Is Pawzy available in my city?",
      },
      {
        title: "What's the difference between Pawzy Basic and Pawzy Plus?",
      },
    ],
  },
  {
    icon: "🐾",
    color: "purple",
    title: "Services & Booking",
    desc: "Everything about booking pet care.",
    count: "6 questions",
    questions: [
      { title: "How do I book a service on Pawzy?" },
      { title: "Can I choose a specific provider every time?" },
      { title: "How far in advance do I need to book?" },
      { title: "Can I schedule recurring or repeat bookings?" },
      { title: "What happens if I need to cancel a booking?" },
      { title: "What services does Pawzy offer?" },
    ],
  },
  {
    icon: "💳",
    color: "yellow",
    title: "Payments & Pricing",
    desc: "Transparent pricing, no hidden fees.",
    count: "5 questions",
    questions: [
      { title: "How much does each service cost?" },
      { title: "What payment methods are accepted?" },
      { title: "When am I charged for a booking?" },
      { title: "How do refunds work?" },
      { title: "Are there any hidden fees or service charges?" },
    ],
  },
  {
    icon: "🧑‍⚕️",
    color: "peach",
    title: "Providers & Trust",
    desc: "How we vet and verify every carer.",
    count: "5 questions",
    questions: [
      { title: "How are Pawzy providers verified?" },
      { title: "Can I read reviews before booking a provider?" },
      { title: "What if my provider cancels last minute?" },
      { title: "Are Pawzy providers insured?" },
      { title: "How do I become a Pawzy provider?" },
    ],
  },
  {
    icon: "🛡️",
    color: "pink",
    title: "Safety & Support",
    desc: "Your pet's safety is our first priority.",
    count: "4 questions",
    questions: [
      { title: "How can I track my pet during a walk or session?" },
      {
        title:
          "What happens if my pet has a medical emergency during a service?",
      },
      { title: "How do I report an issue with a provider or service?" },
      { title: "How do I contact Pawzy customer support?" },
    ],
  },
  {
    icon: "👤",
    color: "green",
    title: "Account & Profile",
    desc: "Managing your Pawzy account.",
    count: "4 questions",
    questions: [
      { title: "How do I add or edit my pet's profile?" },
      { title: "Can I have multiple pets on one account?" },
      { title: "How do I delete my Pawzy account?" },
      { title: "How do I change my password or email address?" },
    ],
  },
];

function Logo() {
  return (
    <div className="logo">
      <span className="logo-box">
        <FaPaw />
      </span>

      <span className="logo-word">
        <span className="logo-dark">Paw</span>
        <span className="logo-teal">zy</span>
      </span>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pawzy-page">
      <section className="hero-section">
        <div className="hero-circle hero-circle-left"></div>
        <div className="hero-circle hero-circle-right"></div>

        <div className="support-badge">
          <span></span>
          Support Center
        </div>

        <h1>
          Got questions?
          <br />
          We've got
          <br />
          <span>answers.</span>
        </h1>

        <p className="hero-text">
          Find everything you need to know about Pawzy — from
          <br />
          booking your first service to managing your pet's profile and
          <br />
          everything in between.
        </p>

        <div className="search-card">
          <span className="faq-search-icon">🔍</span>
          <input placeholder="Search questions... e.g. 'how to cancel a booking'" />
          <button>Search</button>
        </div>

        <div className="popular-row">
          <strong>Popular:</strong>
          <span>How to cancel</span>
          <span>Payment methods</span>
          <span>Provider verification</span>
          <span>Refund policy</span>
          <span>Pet emergency</span>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-inner">
          <div className="stat-item">
            <h3>
              120<span>+</span>
            </h3>
            <p>Questions answered</p>
          </div>

          <div className="stat-line"></div>

          <div className="stat-item">
            <h3>
              &lt;2<span>min</span>
            </h3>
            <p>Avg. response time</p>
          </div>

          <div className="stat-line"></div>

          <div className="stat-item">
            <h3>
              4.9<span>★</span>
            </h3>
            <p>Support satisfaction</p>
          </div>

          <div className="stat-line"></div>

          <div className="stat-item">
            <h3>
              24<span>/7</span>
            </h3>
            <p>Live chat support</p>
          </div>
        </div>
      </section>

      <main className="faq-area">
        <div className="faq-layout">
          <aside className="faq-sidebar">
            <div className="topics-card">
              <div className="topics-title">
                <span></span>
                BROWSE TOPICS
              </div>

              {topics.map((topic, index) => (
                <div
                  className={`topic-item ${
                    index === topics.length - 1 ? "topic-active" : ""
                  }`}
                  key={topic.title}
                >
                  <div className="topic-left">
                    <span className="topic-emoji">{topic.icon}</span>
                    <p>{topic.title}</p>
                  </div>

                  <b>{topic.count}</b>
                </div>
              ))}
            </div>

            <div className="help-card">
              <div className="chat-bubble">💬</div>

              <h3>Still need help?</h3>

              <p>
                Our support team is available 24/7 and typically responds in
                under 2 minutes.
              </p>

              <button>Start live chat →</button>
            </div>
          </aside>

          <section className="faq-content">
            {faqSections.map((section) => (
              <div className="faq-block" key={section.title}>
                <div className="faq-heading">
                  <div className={`faq-icon ${section.color}`}>
                    {section.icon}
                  </div>

                  <div className="faq-title-wrap">
                    <h2>{section.title}</h2>
                    <p>{section.desc}</p>
                  </div>

                  <span className="question-pill">{section.count}</span>
                </div>

                <div className="heading-line"></div>

                <div className="question-list">
                  {section.questions.map((question, index) => (
                    <div
                      className={`question-card ${
                        question.open ? "question-open" : ""
                      }`}
                      key={question.title}
                    >
                      <div className="question-top">
                        <span className="question-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h4>{question.title}</h4>

                        <button className="plus-btn">
                          {question.open ? "×" : "+"}
                        </button>
                      </div>

                      {question.open && (
                        <div className="answer-box">
                          <p>
                            Pawzy is an on-demand pet care marketplace that
                            connects pet owners with verified,
                            background-checked providers — including dog
                            walkers, pet sitters, groomers, trainers, and
                            veterinarians.
                          </p>

                          <p>
                            It works in three simple steps: <b>Search</b> for
                            the service you need and browse available providers
                            in your area. <b>Book</b> a time slot that works
                            for you and your pet. <b>Relax</b> — your provider
                            handles the rest, with real-time GPS updates and
                            photo check-ins throughout.
                          </p>

                          <div className="answer-tags">
                            <span>🐾 For pet owners</span>
                            <span>💼 For providers</span>
                          </div>

                          <a href="#">Watch a 2-minute overview video →</a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <section className="support-section">
        <div className="support-bg-circle support-main-circle"></div>
        <div className="support-bg-circle support-bottom-circle"></div>

        <div className="support-content">
          <div className="team-badge">💬 Our team is always here</div>

          <h2>Still have questions?</h2>

          <p>
            Can't find what you're looking for? Our support team is
            <br />
            available around the clock and loves helping pet parents.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-emoji chat-icon">💬</div>

              <h3>Live Chat</h3>

              <p>
                Chat with a real human in under 2 minutes. Available 24 hours a
                day, 7 days a week, including holidays.
              </p>

              <button>Start chatting →</button>
            </div>

            <div className="contact-card">
              <div className="contact-emoji email-icon">📧</div>

              <h3>Email Support</h3>

              <p>
                Send us a detailed message and we'll respond within 4 hours with
                a thorough, personalised answer.
              </p>

              <button>Send an email →</button>
            </div>

            <div className="contact-card">
              <div className="contact-emoji phone-icon">📞</div>

              <h3>Call Us</h3>

              <p>
                Talk to our team directly. Toll-free support line available
                Monday to Saturday, 9 AM to 9 PM IST.
              </p>

              <button>1800-XXX-XXXX →</button>
            </div>
          </div>

          <div className="online-text">
            <span></span>
            Live chat is online right now — average wait time 1 min 42 sec
          </div>
        </div>
      </section>

    </div>
  );
}

