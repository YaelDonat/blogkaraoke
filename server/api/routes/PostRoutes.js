'use strict';
module.exports = function (app) {
    let PostController = require('../controllers/PostController');
    //todo list routes
    app.route('/post')
        .get(PostController.list_all_ports)
        .post(PostController.create_a_post);
    app.route('/post/:postId')
        .get(PostController.read_a_post)
        .put(PostController.create_a_post)
        .delete(PostController.delete_a_post);
};