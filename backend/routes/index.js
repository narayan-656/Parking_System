const Router = require("express");

const rootRouter = Router();

const {adminRouter} = require("./admin");
const { fareRouter } = require("./fare");
const { timeRouter } = require("./timer");

rootRouter.use("/admin",adminRouter);
rootRouter.use("/fare",fareRouter);
rootRouter.use("/timer",timeRouter)


module.exports = {
    rootRouter:rootRouter
}