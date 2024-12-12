const express = require('express')
const router = express.Router();
const User = require('../model/user')
router.use(express.json())

const {registerUser,loginUser}=require('../controller/user')



router.post('/user-register',registerUser)


router.post('/user-login',loginUser
)




module.exports=router