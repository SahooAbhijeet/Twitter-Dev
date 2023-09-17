import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';
import apiRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

import TweetService from './services/tweet-service.js';

app.listen(3000, async () => {
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');
    let service = new TweetService();
    let tweet = await service.create({
        content: 'Done with #refactor?'
    });
    console.log(tweet);
});