const zod = require("zod");

const signup = zod.object({
    email:zod.string(),
    username:zod.string(),
    password:zod.string()
})

const signin = zod.object({
    username:zod.string(),
    password:zod.string()
});

const customer = zod.object({
    name:zod.string()
})



module.exports = {
     signin,
     signup
}