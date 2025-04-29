import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failed");

      setStatus({
        type: "success",
        message: data.message || "Submitted successfully!",
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  };

  return (
    <section className="contact-section container text-dark py-5 d-flex flex-column flex-md-row align-items-start">
      {/* left column */}
      <div className="d-flex flex-column w-75 w-md-50 me-md-4 mb-4 mb-md-0 contact-left">
        <h2 className="mb-4 contact-heading">Contact Details</h2>
        <p className="mb-2 contact-info">
          <i className="fas fa-envelope me-2" />
          FFPathway@gmail.com
        </p>
        <p className="mb-3 contact-info">
          <i className="fas fa-phone me-2" />
          Phone: 714-414-2300
        </p>
        <ul className="d-flex list-unstyled gap-3 contact-socials">
          <li>
            <a href="#" aria-label="facebook">
              <img
                src="/assets/dark-icons/facebook.avif"
                alt="facebook"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <img
                src="/assets/dark-icons/instagram.avif"
                alt="instagram"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="youtube">
              <img
                src="/assets/dark-icons/youtube.avif"
                alt="youtube"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="linkedin">
              <img
                src="/assets/dark-icons/linkedin.avif"
                alt="linkedin"
                width={30}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* right column */}
      <div className="d-flex flex-column w-100 w-md-50 contact-right">
        <form onSubmit={handleSubmit} aria-label="Contact Form">
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="form-control border border-danger rounded-0"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="form-control border border-danger rounded-0"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control border border-dark rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="form-control border border-dark rounded-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="send-btn w-100 py-2">
                Send
              </button>
            </div>
            {status && (
              <div
                className={`col-12 mt-3 text-${
                  status.type === "error" ? "danger" : "success"
                }`}
              >
                {status.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
