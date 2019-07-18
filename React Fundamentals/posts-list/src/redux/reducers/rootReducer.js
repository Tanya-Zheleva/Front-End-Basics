import SUBMIT_FORM from '../actions/actionTypes/SUBMIT_FORM';
import DELETE_POST from '../actions/actionTypes/DELETE_POST';

const initialState = {
    postTitle: '',
    postContent: '',
    posts: [],
};

export function rootReducer(state = initialState, action) {
    if (action.type === SUBMIT_FORM) {
        const { postTitle, postContent } = action.payload;
        let post = {};
        post[postTitle] = postContent;


        return Object.assign({}, state, {
            postTitle: action.payload.postTitle,
            postContent: action.payload.postContent,
            posts: state.posts.concat(post)
        });
    } else if (action.type === DELETE_POST) {
        console.log(action.payload);
        
        return state;
    }

    return state;
}