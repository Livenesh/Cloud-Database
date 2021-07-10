const express = require('express');
const router = express.Router();
const Time = require('../models/Time');

router.get('/', async (req, res) => {
    try{
        const posts = await Time.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const post = new Time({
        time_id : req.body.time_id,
        time_receive: req.body.time_receive,
        time_return: req.body.time_return
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
        const post = await Time.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err});
    }
});

router.delete('/:postId', async (req,res) => {
    try {
    const removedPost = await Time.remove({ _id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatetimeid/:postId', async (req,res) => {
    try {
    const updatedPost = await Time.updateOne(
        { _id: req.params.postId },
        { $set: { time_id: req.body.time_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatetimereceive/:postId', async (req,res) => {
    try {
    const updatedPost = await Time.updateOne(
        { _id: req.params.postId },
        { $set: { time_receive: req.body.time_receive } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatetimereturn/:postId', async (req,res) => {
    try {
    const updatedPost = await Time.updateOne(
        { _id: req.params.postId },
        { $set: { time_return: req.body.time_return } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

module.exports = router;