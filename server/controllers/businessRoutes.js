const express = require("express");
const router = express.Router();
const businessController = require("./businessController");

router.get("/", businessController.getAllBusinesses);
router.post("/", businessController.createBusiness);
router.get("/:id", businessController.getBusinessById);
// other routes...

module.exports = router;
