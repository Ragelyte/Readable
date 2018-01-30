import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    RECEIVE_POST,
    ORDER_BY_VOTES,
    ORDER_BY_TIMESTAMP
} from '../actions';
import {ADD_COMMENT, DELETE_COMMENT} from '../actions/index';

const initialState = {
    posts: []
};

function post(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            const post = action.post;
            return {
                posts: [...state.posts, ...[post]]
            };
        case EDIT_POST:
            console.log(action, state);
            return {
                ...state,
                posts: state.posts.slice().map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            title: action.title,
                            body: action.body
                        };
                    }
                    return post;
                })
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.slice().filter(e => e.id !== action.postId)
            };
        case RECEIVE_POST:
            return {
                ...state,
                posts: action.posts
            };
        case ORDER_BY_VOTES:
            return {
                ...state,
                posts: state.posts.slice().sort((a, b) => {
                    return b.voteScore - a.voteScore;
                })
            };
        case ORDER_BY_TIMESTAMP:
            return {
                posts: state.posts.slice().sort((a, b) => {
                    return b.timestamp - a.timestamp;
                })
            };
        case DELETE_COMMENT:
            return {
                ...state,
                posts: state.posts.slice().map(post => {
                    if (post.id === action.postId) {
                        return {...post, commentCount: post.commentCount - 1};
                    }
                    return post;
                })
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.slice().map(post => {
                    if (post.id === action.comment.parentId) {
                        return {...post, commentCount: post.commentCount + 1};
                    }
                    return post;
                })
            };
        default:
            return state;
    }
}

export default post;
