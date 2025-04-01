
const Router = require("express");
const { CustomerModel } = require("../db");
const { authMiddleware } = require("../middleware/middleware");

const fareRouter = Router();

fareRouter.post("/addFare",authMiddleware, async (req,res) => {
    const {to,fare} = req.body;

    await CustomerModel.updateOne({
        _id:to
    }, {
        $inc : {totalFare:fare},
        $set: { prevFare:fare }
    });

    res.json({
        message:"succesfully added the fare"
    })
})


module.exports = {
    fareRouter
}