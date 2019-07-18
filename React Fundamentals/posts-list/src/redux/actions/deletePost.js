import DELETE_POST from './actionTypes/DELETE_POST';

const deletePost = (payload) => {
    return {
        type: DELETE_POST,
        payload
    };
}

export default deletePost;