import Router from 'koa-router';
import posts from './posts';

//const Router = require('koa-router');
//const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

export default api;