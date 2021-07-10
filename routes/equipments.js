const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

//GET BACK ALL THE EQUIPMENT
router.get('/', async (req, res) => {
    try{
        const posts = await Equipment.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Equipment({
        equipment_id : req.body.equipment_id,
        equipment_name: req.body.equipment_name,
        equipment_condition: req.body.equipment_condition
    });

    try{
    const savedPost = await post.save()
    res.json(savedPost);
    }catch (err) {
        res.json({ message : err });
    }
});

//GET A SPECIFIC EQUIPMENT
router.get('/:postId', async (req, res) => {
    try {
        const post = await Equipment.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err});
    }
});

//DELETING A SPECIFIC EQUIPMENT
router.delete('/:postId', async (req,res) => {
    try {
    const removedPost = await Equipment.remove({ _id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({ message : err})
    }
});

//Update a post
router.patch('/updateequipmentid/:postId', async (req,res) => {
    try {
    const updatedPost = await Equipment.updateOne(
        { _id: req.params.postId },
        { $set: { equipment_id: req.body.equipment_id } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updateequipmentname/:postId', async (req,res) => {
    try {
    const updatedPost = await Equipment.updateOne(
        { _id: req.params.postId },
        { $set: { equipment_name: req.body.equipment_name } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

router.patch('/updateequipmentcondition/:postId', async (req,res) => {
    try {
    const updatedPost = await Equipment.updateOne(
        { _id: req.params.postId },
        { $set: { equipment_condition: req.body.equipment_condition } } 
        );
    res.json(updatedPost);
    }catch(err){
        res.json({ message : err})
    }
});

module.exports = router;