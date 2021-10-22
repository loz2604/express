const router = require("express").Router();

router.get("/", (req, res) => {
    const params = {};
    for (const [key, value] of Object.entries(req.query)) {
        if (key[0] !== "_") {
            params[key] = value;
        }
    }
    res.status(200);
    res.json({ params });
});

module.exports = router;