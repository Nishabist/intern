const express = require('express')
const router = express.Router();
const Category = require('../model/category')
router.use(express.json())

const {addCategory,deleteCategory,editCategory,categoryById, listCategory}=require('../controller/category')



router.post('/addcategory',addCategory)

router.delete('/deletecategory/:id',deleteCategory)

router.patch('/editcategory/:id',editCategory)

router.get('/getcategory/:id',categoryById)

router.get('/listcategory', listCategory);




module.exports=router