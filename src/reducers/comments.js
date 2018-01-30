import {
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    RECEIVE_COMMENT
} from '../actions/index';

const initialState = {
    comments: []
};

function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const comment = action.comment;
            return {
                comments: [...state.comments, ...[comment]]
            };

        case EDIT_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id === action.commentId) {
                        return {
                            ...comment,
                            body: action.body
                        };
                    }
                    return comment;
                })
            };
        case DELETE_COMMENT:
            return {
                comments: state.comments.filter(e => e.id !== action.commentId)
            };
        case RECEIVE_COMMENT:
            return {
                ...state,
                comments: action.comments
            };
        default:
            return state;
    }
}

export default comments;
