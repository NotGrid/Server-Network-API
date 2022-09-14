const { Thought } = require('../models/Thought');
const User = require('../models/User');

const thoughtController = {
    allThoughts(req, res) {
        Thought.find().then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    singleThought(req, res) {
        Thought.findById(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    newThoughts(req, res) {
        Thought.create(req.body).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    newReaction(req, res) {
        Thought.create(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteReaction(req, res) {
        Thought.findOneAndDelete(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
     
};

module.exports = thoughtController;