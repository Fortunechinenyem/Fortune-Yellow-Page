import React, { useState } from "react";

const CreateYellowpageForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    category: "",
    description: "",
    address: "",
    website: "",
    socialMediaLinks: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({ ...prevState, logo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Create a Yellowpage for Your Business
      </h2>
      <p className="mb-6">
        Fill out the form below to list your business on Fortune
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.businessName}
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.contactPerson}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="category"
          placeholder="Business Category"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.category}
        />
        <input
          type="text"
          name="description"
          placeholder="Description of Services"
          className="p-2 border rounded-md"
          onChange={handleChange}
          value={formData.description}
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Address"
        className="w-full p-2 border rounded-md mb-4"
        onChange={handleChange}
        value={formData.address}
      />
      <input
        type="url"
        name="website"
        placeholder="Website (optional)"
        className="w-full p-2 border rounded-md mb-4"
        onChange={handleChange}
        value={formData.website}
      />
      <input
        type="text"
        name="socialMediaLinks"
        placeholder="Social Media Links (optional)"
        className="w-full p-2 border rounded-md mb-4"
        onChange={handleChange}
        value={formData.socialMediaLinks}
      />
      <div className="mb-4">
        <label className="block mb-2">Upload Business Logo/Image</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit" className="mx-auto button">
        Submit Your Business
      </button>
    </form>
  );
};

export default CreateYellowpageForm;
