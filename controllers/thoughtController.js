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
        Thought.findOneAndUpdate(req.params.id, req.body, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete(req.params.id, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    newReaction(req, res) {
        Thought.create(req.params.thoughtId, {$addToSet: {reactions: req.body}}, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(req.params.thoughtId, {$pull: {reactions: req.params.reactionId}}, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
     
};

module.exports = thoughtController;