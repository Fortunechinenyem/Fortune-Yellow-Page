import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.message}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
