const { User, Thoughts } = require('../models/User');

const userController = {
    allUsers(req, res) {
        User.find().then(dbUsers => {
            res.json(dbUsers);
        });
    },
    singleUser(req, res) {
        User.findById(req.params.id).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    newUser(req, res) {
        User.create(req.body).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(req.params.id).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    deleteUser(req, res) {
        User.findOneAndDelete(req.params.id).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    newFriend(req, res) {
        User.create(req.params.id).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    deleteFriend(req, res) {
        User.findOneAndDelete(req.params.id).then(dbUsers => {
            res.json(dbUsers);
        });
    },
};

module.exports = userController;