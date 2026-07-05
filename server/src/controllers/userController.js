const User = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();

        // REMOVE passwords before sending response
        const safeUsers = users.map(user => {
            const { password, ...rest } = user;
            return rest;
        });

        res.json(safeUsers);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUsers
};