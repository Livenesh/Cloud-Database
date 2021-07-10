const express = require('express');
const router = express.Router();
const Student = require('../models/Student');


//GETTING ALL THE STUDENTS INFO
router.get('/', async (req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }catch(err){
        res.json({ message: err});
    }
});

//POSTING A STUDENT INFO
router.post('/', async (req, res) => {
    const post = new Student({
        student_id: req.body.student_id,
        student_name: req.body.student_name,
        phone_number: req.body.phone_number
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
        }catch (err) {
            res.json({ message : err });
        }
});

//FINDING A SPECIFIC STUDENT
router.get('/:postId', async (req, res) => {
    try {
        const post = await Student.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err});
    }
});

//DELETING A STUDENT
router.delete('/:postId', async (req,res) => {
    try {
    const removedPost = await Student.remove({ _id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({ message : err})
    }
});

//UPDATING A STUDENT INFO
router.patch('/updatestudentid/:postId', async (req,res) => {
    try {
    const updatedPost = await Student.updateOne(
        { _id: req.params.postId },
        { $set: { student_id: req.body.student_id} }   
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatestudentname/:postId', async (req,res) => {
    try {
    const updatedPost = await Student.updateOne(
        { _id: req.params.postId },
        { $set: { student_name: req.body.student_name} }   
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updatestudentphonenum/:postId', async (req,res) => {
    try {
    const updatedPost = await Student.updateOne(
        { _id: req.params.postId },
        { $set: { phone_number : req.body.phone_number } }  
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});


module.exports = router;