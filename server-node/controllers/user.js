"use strict";

const User = require('../models/user'); 

const userController = {
    list: async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json({
                error: false,
                data: users
            });
        } catch (err) {
            res.status(500).send({ error: true, message: 'Error fetching users' });
        }
    },

    read: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if (!user) {
                return res.status(404).send({ error: true, message: 'User not found' });
            }
            res.status(200).json({
                error: false,
                data: user
            });
        } catch (err) {
            res.status(500).send({ error: true, message: 'Error fetching user' });
        }
    }
};

module.exports = userController;
