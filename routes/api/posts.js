const express = require("express");
const router = express.Router();

// @route  GET /api/posts/test
// @desc   Test posts Route
// @access Public
router.get("/test", (req, res) => {
  res.json({
    message: "Posts Works"
  });
});

module.exports = router;
