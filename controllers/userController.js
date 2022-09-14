const { User, Thoughts } = require('../models');

const userController = {
    allUsers(req, res) {
        User.find().then(dbUsers => {
            console.log(dbUsers);
            res.json(dbUsers);
        }).catch(error => {
            console.log(error);
            res.json(error.message);
        })
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
        User.findOneAndUpdate(req.params.id, req.body, {new: true}).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    deleteUser(req, res) {
        User.findOneAndDelete(req.params.id, {new: true}).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    newFriend(req, res) {
        User.findOneAndUpdate(req.params.userId, {$addToSet: {friends: req.params.friendId}}, {new: true}).then(dbUsers => {
            res.json(dbUsers);
        });
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(req.params.userId, {$pull: {friends: req.params.friendId}}, {new: true}).then(dbUsers => {
            res.json(dbUsers);
        });
    },
};

module.exports = userController;