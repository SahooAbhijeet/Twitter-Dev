import { LikeRepository, TweetRepository } from "../repository/index";

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        if(modelType == 'Tweet') {          //api/v1/likes/toggle?id=modelId&type=Tweet
            var likeable = await this.tweetRepository.get(modelId).populate('likes');
        }
        else if (modelType == 'Comment') {
            //TODO
        }
        else {
            throw new Error ('unknown model type');
        }
        const exist = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if(exist) {
            likeable.likes.pull(exist.id)
            await likeable.save();
            await exist.remove();
            var isRemoved = true;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;