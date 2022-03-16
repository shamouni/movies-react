import TYPES from '../types/post-types';

const initState = {
    posts: [],
    sliders: [], 
    comments: [],
    fetching: false
}

const postReducer = (state = initState, action) => {

    const { type, posts, comments, comment, sliders, error, count, id } = action;

    switch(type) {
        // All Posts
        case TYPES.FETCH_POSTS:
            return {
                ...state,
                fetching: true
            }
        case TYPES.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts, 
                sliders, 
                count, 
                fetching: false,
            }
        case TYPES.FETCH_POSTS_FAILED:
            return {
                ...state,
                error,
                fetching: false,
            }
        // Single Post
        case TYPES.FETCH_SINGLE_POST:
            return {
                ...state,
                fetching: true
            }
        case TYPES.FETCH_SINGLE_POST_SUCCESS:
            const post = posts.find(i => i.id === +id);
            return {
                ...state,
                post,
                comments,
                fetching: false
            }
        case TYPES.FETCH_SINGLE_POST_FAILED:
            return {
                ...state, 
                error,
                fetching: false
            }
        // Add Comment
        case TYPES.ADD_COMMENT:
            return {
                ...state,
                fetching: true
            }
        case TYPES.ADD_COMMENT_SUCCESS:

            // Just simulate api mutation
            comments.push(comment);

            return {
                ...state,
                fetching: false
            }
        case TYPES.ADD_COMMENT_FAILED:
            return {
                ...state, 
                error,
                fetching: false
            }
            case TYPES.FETCH_COMMENTS_SUCCESS:
                return {
                    ...state,
                    comments, 
                    fetching: false
                }
        default: 
            return state;
    }
}

export default postReducer;