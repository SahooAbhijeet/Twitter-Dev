
import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await LikeService.toggleLike(req.params.modelId, req.params.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Sucessfully toggle like'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Sometyhing went wrong'
        });
    }
}