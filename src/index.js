const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');


app.listen(3000, async () => {
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'With hooks'});
    // const tweet = await tweetRepo.getAll(2,4)
    // consolte.log(tweet);
    // const comment = await Comment.create({content: 'New Tweet'});
    // tweet?.comment?.push(comment);
    // const result = await tweet?.save();
    console.log(tweet);
});