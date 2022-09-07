const { Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        // need to set default to current timestamp
        // use getter to format the timestamp
    },
    username: {
        type: String,
        required: true, 
    },
    reactions: [
        // nested documents created with the reactionSchema
    ]
})