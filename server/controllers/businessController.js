const Business = require("../models/Business");

exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBusiness = async (req, res) => {
  const business = new Business(req.body);
  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// other controller methods...
