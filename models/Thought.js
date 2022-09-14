const { Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('DD/MM/YYYY hh:mm:ss a'),
    },
    username: {
        type: String,
        required: true, 
    },
    reactions: [
        reactionSchema
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;