const router = require("express").Router();
const { addUser, getUser, editUser, getUsers, deleteUser } = require("../utils/user");

//  /users     READ
router.get("/", (req, res) => res.status(200).json(getUsers()));

//  /users     CREATE
router.post("/", (req, res) => {
    addUser(req.body);
    res.status(201).json({ body: req.body });
});

//  /users/1        READ
router.get("/:id", (req, res) => res.status(200).json(getUser(req.params.id)));

//  /users/1       UPDATE
router.put("/:id", (req, res) => {
    const user = { id: req.params.id, ...req.body };
    editUser(user, req.params.id);
    res.status(201).json({ user });
});

//  /users/1       DELETE
router.delete("/:id", (req, res) => {
    // Next line means add all users to users that dont match the user to be deleted
    deleteUser(req.params.id);
    res.status(200).json({ "msg": `Deleted User: ${req.params.id}` });
});

// /users/1/orders
router.get("/:id/orders", (req, res) => {
    try {
        res.status(200).json(getUser(req.params.id).orders);
    }
    catch (error) {
        res.status(404).json({ msg: `user: ${req.params.id} not found` });
    }
});

//  /users/1/orders/13
router.get("/:id/orders/:orderId", (req, res) => {
    try {
        const findOrder = (order) => order.id == req.params.orderId;
        //  Find the correct user, then find the correct order
        res.status(200).json(getUser(req.params.id).orders.find(findOrder));
    } catch (error) {
        res.status(404).json({ msg: `user: ${req.params.id} not found, or ${req.params.orderId} not found` });
    }
});

module.exports = router;