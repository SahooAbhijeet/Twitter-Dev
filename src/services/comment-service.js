import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async createComment(modelId, modelType, userId, content) {
        console.log(modelId, modelType, userId);
        if(modelType == 'Tweet') {          //api/v1/likes/toggle?id=modelId&type=Comment
            var commentable = await this.tweetRepository.get(modelId);
        }
        else if (modelType == 'Comment') {
            var commentable = await this.CommentRepository.get(modelId);
        } else {
            throw new Error('unknown model type');
        }

        const comment = await this.CommentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });

        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}
 export default CommentService;

