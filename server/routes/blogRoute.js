const express = require('express');

const router = express.Router();

const Blog = require('../database/model/BlogSchema');

router.post('/add',async (req,res)=>{
    console.log('adding');
    try{
        // console.log(req.body);
        const blog = await Blog.create(req.body)
        blog.populate('author')
        blog.save()
        // console.log(blog);
        res.status(200).json(blog._doc)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

router.put('/update',async (req,res)=>{
    console.log('updating');
    try{
        console.log(req.body);
        const blog = await Blog.findOne({_id: req.body._id})
        blog.title = req.body.title
        blog.content = req.body.content
        blog.subtitle = req.body.subtitle
        blog.genre = req.body.genre
        blog.image = req.body.image
        blog.imgName = req.body.imgName
        blog.updatedAt = Date.now()
        await blog.save()
        console.log(blog);
        res.status(200).json(blog._doc)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

router.post('/delete',async (req,res)=>{
    console.log('deleting');
    try{
        console.log(req.body);
        const blog = await Blog.deleteOne({_id: req.body._id})
        res.status(200).json({message: 'Blog deleted successfully'})
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

// router.delete('/delete',async (req,res)=>{
//     console.log('deleting');
//     try{
//         console.log(req.params.id);
//         const blog = await Blog.deleteOne({_id: req.data._id})
//         res.status(200).json({message: 'Blog deleted successfully'})
//     }
//     catch(err){
//         res.status(400).json({message: err.message})
//         console.log('Err:',err);
//     }
// })

router.get('/all',async (req,res)=>{
    try{
        const response = await Blog.find({}).populate('author',{password: 0}).sort({updatedAt: -1})
        console.log(response);
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

router.get('/search/:query',async (req,res)=>{
    try{
        const query = req.params.query
        const response = await Blog.find({title: {$regex: query, '$options':'i'} }).populate("author",{password:0}).sort({updatedAt: -1})
        console.log(response);
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const response = await Blog.findById(req.params.id).populate('author',{password: 0})
        console.log(response);
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

router.get('/all/:id',async (req,res)=>{
    try{
        const response = await Blog.find({author: req.params.id}).populate('author',{password: 0}).sort({updatedAt: -1})
        console.log(response);
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({message: err.message})
        console.log('Err:',err);
    }
})

module.exports = router;