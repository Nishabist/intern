const express = require('express');
const router = express.Router();
const Category = require('../model/category');
const { param } = require('../routes/user');
router.use(express.json());

const addCategory =async(req,res)=>{
try {
      
    const categoryExist = await Category.findOne({title : req.body.title})
       
    if(categoryExist){
      
       res.status(409).json({msg :'Category already exist'})
    }
    else{
        const category = Category.create(req.body);
        if(category) res.json({msg :"Category added sucessfully"})
    }
   
   
} 
catch (error) {
    res.json({
        status:false,
        message:"Problem in adding Category"
    })
}
}

const deleteCategory= async(req,res)=>{
    try {
        const category =await Category.findByIdAndDelete(req.params.id);
        res.send("category deleted successfuly");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
   
}

const editCategory= async(req,res)=>{
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body);

        if (!updatedCategory) {
            return res.status(404).json({ msg: "Category not found" });
        }
        res.json({ msg: "Category updated successfully", data: updatedCategory });

    } catch (error) {
        res.status(400).json({ error: error.message });    
    }
    
}

const categoryById=async(req,res)=>{
try {
    const category= await Category.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ msg: "Category not found" });
    }
    res.json({ msg: "Category retrieved successfully", data: category });
} catch (error) {
    res.status(400).json({ error: error.message });  
}
}

const listCategory = async(req,res)=>{
    try {
        const categories = await Category.find();

        if (categories.length === 0) {
            return res.status(404).json({ msg: "No categories found" });
        }

       
        res.json({ msg: "Categories retrieved successfully", data: categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={addCategory,deleteCategory,editCategory,categoryById, listCategory};