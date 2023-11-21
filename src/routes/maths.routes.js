const router = require("express").Router();

const maths_endpoints = require("../controllers/mathametic");

router.use("/add", maths_endpoints.add);
router.use("/factorial/:number", maths_endpoints.factorial);
router.use("/fibonacci/:count", maths_endpoints.fibonacci);

module.exports = router;
