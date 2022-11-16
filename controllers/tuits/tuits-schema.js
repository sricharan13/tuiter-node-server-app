import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    title: String,
    time: String,
    username: String,
    image: String,
    handle: String,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number
}, {collection: 'tuits'});

export default schema;