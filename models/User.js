const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // look up how to use mongoose matching validation
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        references: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        references: 'User',
    }],
});

// create a virtual call friendCount that 
// retrieves the length of the user's friends array field on query.