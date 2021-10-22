
// Our fake database
let users = [{
    id: 1,
    name: "larry",
    orders: [{ id: 6, item: "cheese" }, { id: 23, item: "shoes" }]
}, {
    id: 2,
    name: "curly",
    orders: [{ id: 13, item: "sweets" }, { id: 4, item: "pop" }]
}, {
    id: 3,
    name: "moe",
    orders: [{ id: 9, item: "game" }, { id: 2, item: "soap" }, { id: 17, item: "peppers" }]
}];

const addUser = (user) => users.push(user);
const editUser = (user, id) => {
    users = users.filter(user => user.id != id);
    users.push(user);
};
const getUsers = () => users;
const getUser = (id) => users.find(user => user.id == id);
const deleteUser = (id) => users = users.filter(user => user.id != id);

module.exports = {
    addUser, editUser, getUser, deleteUser, getUsers
};