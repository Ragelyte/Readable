const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8);

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token
};

export const fetchCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories);

export const fetchPost = () =>
    fetch(`${api}/posts`, {headers}).then(res => res.json());

export const fetchComment = id =>
    fetch(`${api}/posts/${id}/comments`, {headers}).then(res => res.json());

export const deleteComment = id =>
    fetch(`${api}/comments/${id}`, {headers, method: 'delete'}).then(res =>
        res.json()
    );

export const addComment = comment => {
    return fetch(`${api}/comments`, {
        headers,
        method: 'POST',
        body: JSON.stringify(comment)
    }).then(res => res.json());
};

export const editComment = (id, body) => {
    return fetch(`${api}/comments/${id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify({body})
    }).then(res => res.json());
};

export const deletePost = id =>
    fetch(`${api}/posts/${id}`, {headers, method: 'delete'}).then(res =>
        res.json()
    );

export const editPost = (id, title, body) => {
    return fetch(`${api}/posts/${id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify({title, body})
    }).then(res => res.json());
};

export const addPost = post => {
    return fetch(`${api}/posts`, {
        headers,
        method: 'POST',
        body: JSON.stringify(post)
    }).then(res => res.json());
};

export const changePostVotescore = (id, vote) => {
    return fetch(`${api}/posts/${id}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({option: vote})
    }).then(res => res.json());
};


export const changeCommentVotescore = (id, vote) => {
    return fetch(`${api}/comments/${id}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({option: vote})
    }).then(res => res.json());
};