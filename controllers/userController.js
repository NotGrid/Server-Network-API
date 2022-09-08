const { User, Thoughts } = require('../models');

const userController = {
    allUsers(req, res) {
        User.find().then(dbUsers => {
            res.json(dbUser);
        });
    },
    singleUser(req, res) {
        User.findById(req.params.id).then(dbUsers => {
            res.json(dbUser);
        });
    },
}

module.exports = userController;