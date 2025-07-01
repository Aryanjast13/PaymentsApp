const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const User = require('../models/User');
const Account = require('../models/account');
const authMiddleware = require('../middlewares/middleware');

const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})


router.post("/signup", async (req, res) => {
    try {
        //verify the body (input validation) using zod
        const { success } = signupBody.safeParse(req.body);
        if (!success) {
          return res.status(411).json({
            message: "Incorrect Inputssdsadsad",
          });
        }
        const { username, firstName, lastName, password } = req.body; 
         
        //verify existing user or not
        const existingUser = await User.findOne({
            username:req.body.username
        })
        if (existingUser) {
            return res.status(411).json({ message: "Email already taken" });
        }
            // creating user in database     
        const user = await User.create({    
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });

        const userId = user._id;

        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })
        //creating a jwt token
        const token = jwt.sign({ userId }, JWT_SECRET);
        res.json({
            message: "User created successfully",
            token,
            username: user.firstName,
            lastName:user.lastName
        });

        
    } catch (error) {
        console.log(error.message);
    }
    
    
})


const signinBody = zod.object({
    username: zod.string().email(),
    password:zod.string()
})

router.post("/signin", async (req, res) => {
    try {
      //verify the body (input validation) using zod
      const { success } = signinBody.safeParse(req.body);
      if (!success) {
        res.status(411).json({ message: "Incorrect Inputs" });
        }
        
         const { username, password } = req.body;
         //finding user in database
         const user =await User.findOne({ username, password });
         if (user) {
           const token = jwt.sign({ userId: user._id }, JWT_SECRET);
           res.json({ token ,username: user.firstName,
            lastName:user.lastName});
           return;
        }
        

        res.status(411).json({ message: "Error while logging" });
    } catch (error) {
        console.log(error.message);
    }
    
   
});

router.post("/checkAuth", authMiddleware,async (req, res) => {
    const id = req.userId;

    const user = await User.findById(id).select("-password");
    res.json({ user });
    
}
)

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    try {
        const users = await User.find({
            $or: [{
                firstName: {
                "$regex":filter
                }
            }, {
                lastName: {
                    "$regex":filter
                }
            }]
            
        })

        res.json({
            User: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id:user._id
            }))
        })
        
    } catch (error) {
        console.log(error.message)
    }
 })

module.exports = router;