const express = require("express");
const { UserLogin, UserRegister, JwtLogin } = require("./controllers");


const userRouter = express.Router();

userRouter.post("/user/login", UserLogin);
userRouter.post("/user/register", UserRegister);
userRouter.post("/jwt/login", JwtLogin);





module.exports = userRouter;