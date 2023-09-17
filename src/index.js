const express = require('express');
const connect = require('./config/database');
const app = express();

const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');

app.listen(3000, async () => {
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');
    const service = new TweetService();
    const tweet = await service.create({
        content: 'I am #excited for #coding in #Javascript'
    });
    console.log(tweet);
});