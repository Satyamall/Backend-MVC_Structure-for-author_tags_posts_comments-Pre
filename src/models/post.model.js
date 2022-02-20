

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true
        },
        tags: [
            { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true},
        ]
    },
    { timestamps: true}
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;

