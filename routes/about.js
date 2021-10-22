const router = require("express").Router();

// About route
router.get("/", (req, res) => {
    //  Imagine this came from a database
    const data = {
        name: "NMunro",
        hobbies: ["Axe throwing", "powerlifting", "video games", "magic: the gathering"]
    }
    res.status(200);
    res.json(data)
    // res.send("Manchester United have won more trophies than any other club in English football, with a record 20 League titles, 12 FA Cups, five League Cups and a record 21 FA Community Shields.\nUnited have also won three European Cups/UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup.\nIn 1998–99, the club became the first in the history of English football to achieve the continental European treble.\nBy winning the UEFA Europa League in 2016–17, they became one of five clubs to have won all three main UEFA club competitions.")
});

module.exports = router;