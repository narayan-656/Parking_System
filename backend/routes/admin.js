const Router = require("express");

const adminRouter = Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {JWT_SECRET} = require("../config");
console.log(JWT_SECRET);

const {signin,signup,customer} = require("../types");
const { AdminModel,CustomerModel } = require("../db");
const {  authMiddleware } = require("../middleware/middleware");


adminRouter.post("/signup" , async (req,res) => {
    const signupPayload = req.body;
    const parsedPayload = signup.safeParse(signupPayload);

    if(!parsedPayload.success) {
        return res.status(400).json({
            message:"invalid inputs"
        })
    }

    const hashedPassword = await bcrypt.hash(signupPayload.password,10);

    try{
        const admin = await AdminModel.create({
            email:signupPayload.email,
            username:signupPayload.username,
            password:hashedPassword
        });
    
        if(admin) {
            const token = jwt.sign({
                id:admin._id
            },JWT_SECRET);
    
            res.status(201).json({
                message:"successfully signed up as admin",
                token:token
            })
        } else {
            res.status(500).json({
                message:"something went wrong, Please Try Again"
            })
        }
    } catch {
        return res.status(400).json({
            message:"username or email already exists"
        })
    }
});


adminRouter.post("/signin" , async(req,res) => {
    const signinPayload = req.body;
    const parsedPayload = signin.safeParse(signinPayload);

    if(!parsedPayload.success) {
        return res.status(400).json({
            message:"invalid inputs"
        })
    }

    const admin = await AdminModel.findOne({username:signinPayload.username});

    if(!admin) {
        return res.json({
            message:"username doesn't exists , please sign up"
        })
    }

    const isPasswordValid = await bcrypt.compare(signinPayload.password,admin.password);

    if(isPasswordValid) {
        const token = jwt.sign({
            id:admin._id
        },JWT_SECRET);

        res.status(201).json({
            message:"successfully signed in as admin",
            token:token
        })
    } else {
        res.status(400).json({
            message:"invalid password"
        })
    }
});


adminRouter.post("/addCustomer",authMiddleware,async (req,res) => {
    const id = req.id;

    const addPayload = req.body;

    const customer = await CustomerModel.create({
        name:addPayload.name,
        adminId:id,
        prevFare:0,
        totalFare:0
    })

    if(customer) {
        return res.json({
            message:"added customer succefully"
        })
    } else {
        return res.json({
            message:"something went wrong try again"
        })
    }
    
})

adminRouter.get("/bulk",authMiddleware,async (req,res) => {
    const id = req.id;

    const filter = req.query.filter || "";

    const customers = await CustomerModel.find({
        adminId:id,
        name: {$regex: filter, $options: "i"}
    });

    

    res.json({
        customers
    })
})


module.exports = {
    adminRouter:adminRouter
}