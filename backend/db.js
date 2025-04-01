const mongoose = require("mongoose");
const { number } = require("zod");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const adminSchema = new Schema({
    email:{required:true,unique:true,type:String},
    username:{unique:true,type:String,require:true},
    password:String
});

const AdminModel = mongoose.model("admin",adminSchema);

const customerSchema = new Schema({
    name:{required:true,type:String},
    adminId:ObjectId,
    prevFare:Number,
    totalFare:Number
})

const CustomerModel = mongoose.model("customers",customerSchema);



module.exports = {
    AdminModel:AdminModel,
    CustomerModel:CustomerModel
}