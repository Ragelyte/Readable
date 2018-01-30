import {  push } from 'react-router-redux'
import * as API from "../api/API";

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_COMMENT = 'FETCH_COMMENT'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POST = 'RECEIVE_POSTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ORDER_BY_VOTES = 'ORDER_BY_VOTES'
export const ORDER_BY_TIMESTAMP = 'ORDER_BY_TIMESTAMP'

export const addPost = (post) => dispatch => (
    API
        .addPost(post)
        .then((postSaved) => {

            dispatch({
                type: ADD_POST,
                post: postSaved
            })
        })
)

export const editPost = (postId, title, body) => dispatch => (
    API
        .editPost(postId, title, body)
        .then(() => {

            dispatch({
                type: EDIT_POST,
                postId,
                title,
                body
            })
        })
)

export const addComment = (comment) => dispatch => (
    API
        .addComment(comment)
        .then((commentSaved) => {

            dispatch({
                type: ADD_COMMENT,
                comment: commentSaved
            })
        })
)

export const editComment = (commentId, body) => dispatch => (
    API
        .editComment(commentId, body)
        .then(() => {

            dispatch({
                type: EDIT_COMMENT,
                body,
                commentId
            })
        })
)

export const deletePost = (postId) => dispatch => (
    API
        .deletePost(postId)
        .then(() => {

            dispatch({
                type: DELETE_POST,
                postId
            })

            dispatch(push('/'))
        })
)

export const deleteComment = (postId, commentId) => dispatch => (
    API
        .deleteComment(commentId)
        .then(() => {

            dispatch({
                type: DELETE_COMMENT,
                postId,
                commentId
            })
        })
)

export const fetchCategories = () => dispatch => (
    API
        .fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
);

export const fetchPost = () => dispatch => (
    API
        .fetchPost()
        .then(posts => dispatch(receivePost(posts)))
);


export const fetchComment = (id) => dispatch => (
   API
       .fetchComment(id)
       .then(comments => dispatch(receiveComment(comments)))
)


export function receiveCategories (categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories
    }
}

export function receivePost (posts) {
    return {
        type: RECEIVE_POST,
        posts: posts
    }
}

export function receiveComment (comments) {
    return {
        type: RECEIVE_COMMENT,
        comments: comments
   }
}

export function orderByVotes () {
    return {
        type: ORDER_BY_VOTES,
    }
}

export function orderByTimestamp () {
    return {
        type: ORDER_BY_TIMESTAMP
    }
}
