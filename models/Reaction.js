const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //to be completed
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 250,
        },
        username: {
            type: String,
            timestamps: true,
        }
    }
)