const express = require('express');
const { signup, signin, getuser } = require('../controllers/userController');
const fetchuser = require('../middleware/fetchuser');
const authRouter = express.Router();

authRouter.post("/singup", signup)

authRouter.post("/signin", signin)

authRouter.get("/getuser", (req, res) => {
    res.send("Hello getuser")
}
//  fetchuser, getuser
 )

module.exports = authRouter