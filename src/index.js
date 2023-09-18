import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';
import apiRoutes from "./routes/index.js";

import { UserRepository, TweetRepository, CrudRepository } from "./repository/index.js";
import LikeService from './services/like-service.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);


app.listen(3000, async () => {
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');


    const userRepo = new UserRepository();
    console.log(userRepo)
    const tweetRepo = new TweetRepository();
    const tweets  = await tweetRepo.getAll(0, 10);
    
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets,'Tweet',users[0].id); 
    
});     