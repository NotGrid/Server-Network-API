const { Thoughts, User } = require('../models');

const thoughtController = {
    allThoughts(req, res) {
        Thoughts.find().then(dbThoughts => {
            console.log(dbThoughts);
            res.json(dbThoughts);
        }).catch(error => {
            console.log(error);
            res.json(error.message);
        })
    },
    singleThought(req, res) {
        Thoughts.findById(req.params.id).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    newThoughts({params, body}, res) {
        console.log(params, body);
        Thoughts.create(body).then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId}, {$push: {thoughts: _id}}, 
                {new: true}
            );
        }).then(dbThoughts => {
            console.log(dbThoughts);
            if(!dbThoughts) {
                res.status(404).json({message: 'no user with this id'});
                return;
            }
            res.json(dbThoughts);
        }).catch(error => {
            res.json(error);
        })
    },
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(req.params.id, req.body, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteThought(req, res) {
        Thoughts.findOneAndDelete(req.params.id, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    newReaction(req, res) {
        Thoughts.create(req.params.thoughtId, {$addToSet: {reactions: req.body}}, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(req.params.thoughtId, {$pull: {reactions: req.params.reactionId}}, {new: true}).then(dbThoughts => {
            res.json(dbThoughts);
        });
    },
     
};

module.exports = thoughtController;