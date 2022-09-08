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
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email'],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        references: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        references: 'User',
    }],
    toJSON: {
        virtuals: true,
    },
    id: false,
});

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });

  const User = model('user', userSchema);

  module.exports = User;