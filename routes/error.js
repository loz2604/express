const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(404);
    res.send("Not a pretty sight.<br/>When the web dies screaming loud.<br/>The site is not found.");
});

module.exports = router;