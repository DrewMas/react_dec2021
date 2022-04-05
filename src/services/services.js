const users = `https://jsonplaceholder.typicode.com/users`;
const posts = `https://jsonplaceholder.typicode.com/posts`;
const comments = `https://jsonplaceholder.typicode.com/comments`;

const getUsers = () => {
    return fetch(users).then(value => value.json());
}

const getPosts = () => {
    return fetch(posts).then(value => value.json());
}

const getComments = () => {
    return fetch(comments).then(value => value.json());
}


export {getUsers, getPosts, getComments};
