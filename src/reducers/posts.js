import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    RECEIVE_POST,
    ORDER_BY_VOTES,
    ORDER_BY_TIMESTAMP,
} from '../actions';
import {ADD_COMMENT, DELETE_COMMENT, CHANGE_POST_VOTESCORE, OPEN_EDIT, CLOSE_EDIT} from '../actions/index';

const initialState = {
    posts: [],
    loaded: false,
    editPostFormOpen: false
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
                loaded: true,
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
        case CHANGE_POST_VOTESCORE:
            return {
                posts: state.posts.slice().map(post => {
                    if (post.id === action.postId) {
                        if (action.vote === 'upVote') {
                            return {...post, voteScore: post.voteScore + 1};
                        } else {
                            return {...post, voteScore: post.voteScore - 1};
                        }
                    }
                    return post;
                })
            }
        case OPEN_EDIT:
            return {
                ...state,
                editPostFormOpen: true
            }
        case CLOSE_EDIT:
            return {
                ...state,
                editPostFormOpen: false
            }
        default:
            return state;
    }
}

export default post;
