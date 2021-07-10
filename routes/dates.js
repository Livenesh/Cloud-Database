const express = require('express');
const router = express.Router();
const Date = require('../models/Date');

router.get('/', async (req, res) => {
    try{
        const posts = await Date.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const post = new Date({
        date_id : req.body.date_id,
        date_receive: req.body.date_receive,
        date_return : req.body.date_return
    });

    try{ 
    const savedPost = await post.save()
    res.json(savedPost);
    }catch (err) {
        res.json({ message : err });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Date.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err});
    }
});

router.delete('/:postId', async (req,res) => {
    try {
    const removedPost = await Date.remove({ _id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatedateid/:postId', async (req,res) => {
    try {
    const updatedPost = await Date.updateOne(
        { _id: req.params.postId },
        { $set: { date_id: req.body.date_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatedatereceive/:postId', async (req,res) => {
    try {
    const updatedPost = await Date.updateOne(
        { _id: req.params.postId },
        { $set: { date_receive: req.body.date_receive } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatedatereturn/:postId', async (req,res) => {
    try {
    const updatedPost = await Date.updateOne(
        { _id: req.params.postId },
        { $set: { date_return: req.body.date_return } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});


module.exports = router;