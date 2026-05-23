import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted form data:", formData);
  }

  return (
    <main className="signup-page">
      <section className="signup-card">
        <h1 className="signup-title">Create an account</h1>
        <p className="signup-subtitle">Fill out the form below to sign up.</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-field">
            <label htmlFor="name" className="signup-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="signup-input"
              required
            />
          </div>

          <div className="signup-field">
            <label htmlFor="email" className="signup-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="signup-input"
              required
            />
          </div>

          <div className="signup-field">
            <label htmlFor="password" className="signup-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="signup-input"
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
