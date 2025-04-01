
const Router = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { CustomerModel } = require("../db");

const timeRouter = Router();

timeRouter.post("/findCustomer" ,authMiddleware, async(req,res) => {
    const adminId = req.id;
    const {customerId} = req.body;

    const customer = await CustomerModel.findOne({
        _id:customerId,
        adminId:adminId
    });

    const customerName = customer.name;

    res.json({
        message:customerName
    })
})




module.exports = {
    timeRouter:timeRouter
}