const express = require('express');
const router = express.Router();
const Logbook = require('../models/Logbook');

router.get('/', async (req, res) => {
    try{
        const posts = await Logbook.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.get('/students/:student_id', async (req, res) => {
    try{
        const posts = await Logbook.aggregate([
            {

                "$lookup":{
    
                   "from":"students",
    
                   "localField":"student_id",
    
                   "foreignField":"student_id",
    
                   "as":"student_info"
    
                }
    
            },
            {
                "$match":{
                    "student_id":req.params.student_id
                }
            },
            {
                "$project":{_id:0,"student_info":1}
            }

        ]);
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.get('/equipments/:equipment_id', async (req, res) => {
    try{
        const posts = await Logbook.aggregate([
            {

                "$lookup":{
    
                   "from":"equipments",
    
                   "localField":"equipment_id",
    
                   "foreignField":"equipment_id",
    
                   "as":"equipment_info"
    
                }
    
            },
            {
                "$match":{
                    "equipment_id":req.params.equipment_id
                }
            },
            {
                "$project":{_id:0,"equipment_info":1}
            }

        ]);
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.get('/dates/:date_id', async (req, res) => {
    try{
        const posts = await Logbook.aggregate([
            {

                "$lookup":{
    
                   "from":"dates",
    
                   "localField":"date_id",
    
                   "foreignField":"date_id",
    
                   "as":"date_info"
    
                }
    
            },
            {
                "$match":{
                    "date_id":req.params.date_id
                }
            },
            {
                "$project":{_id:0,"date_info":1}
            }

        ]);
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.get('/times/:time_id', async (req, res) => {
    try{
        const posts = await Logbook.aggregate([
            {

                "$lookup":{
    
                   "from":"times",
    
                   "localField":"time_id",
    
                   "foreignField":"time_id",
    
                   "as":"time_info"
    
                }
    
            },
            {
                "$match":{
                    "time_id":req.params.time_id
                }
            },
            {
                "$project":{_id:0,"time_info":1}
            }

        ]);
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const post = new Logbook({
        student_id: req.body.student_id,
        equipment_id : req.body.equipment_id,
        date_id : req.body.date_id,
        time_id: req.body.time_id
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
        const post = await Logbook.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err});
    }
});

router.delete('/:postId', async (req,res) => {
    try {
    const removedPost = await Logbook.remove({ _id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatestudentid/:postId', async (req,res) => {
    try {
    const updatedPost = await Logbook.updateOne(
        { _id: req.params.postId },
        { $set: { student_id: req.body.student_id} }   
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updateequipmentid/:postId', async (req,res) => {
    try {
    const updatedPost = await Logbook.updateOne(
        { _id: req.params.postId },
        { $set: { equipment_id: req.body.equipment_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatedateid/:postId', async (req,res) => {
    try {
    const updatedPost = await Logbook.updateOne(
        { _id: req.params.postId },
        { $set: { date_id: req.body.date_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatetimeid/:postId', async (req,res) => {
    try {
    const updatedPost = await Logbook.updateOne(
        { _id: req.params.postId },
        { $set: { time_id: req.body.time_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});



module.exports = router;