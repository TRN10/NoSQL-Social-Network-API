const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 250,
        },
        username: {
            type: String,
            required: true,
        },

    },
    { timestamps: true },
);

const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;