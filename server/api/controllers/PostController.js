'use strict';
var mongoose = require('mongoose'),
Post = require("../models/Post");

exports.list_all_ports = function(req, res){
    Post.find({}, function(err, posts) {
        if(err)
            res.send(err);
        res.json(posts); 
    });
};

exports.read_a_post = function(req, res){
    Post.find({}, function(err, posts) {
        if(err)
            res.send(err);
        res.json(posts); 
    });
};

exports.create_a_post = function(req, res){
    var new_post = new Post(req.body);
    new_post.save(function(err, post) {
        if (err)
            res.send(err);
        res.json(post);    
     });
};

exports.update_a_post = function(req, res){
    Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);    
     });
};

exports.delete_a_post = function(req, res){
    Post.deleteOne({
        _id: req.params.postId
    }, function(err, post) {
        if (err)
            res.send(err);
        res.json({message: 'Post successfully deleted'});    
     });
};