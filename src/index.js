const express = require('express');
const connect = require('./config/database');

const app = express();
const TweetRepository = require('./repository/tweet-repository');


app.listen(3000, async () => {
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');
    const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail: 'a@b .com'
    });
    console.log(tweet);
});