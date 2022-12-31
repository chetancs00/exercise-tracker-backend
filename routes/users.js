const router = require('express').Router();
const { signup, signin, getuser } = require('../controllers/userController');
const fetchuser = require('../middleware/fetchuser');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/signup", signup
)
router.post("/signin", signin
)
router.post("/getuser", fetchuser , async(req, res) => {
  try {
    userId = req.user
    console.log("userid", req.user)
    const user = await User.findById(userId).select("-password")
      res.send(user)
      console.log(user)
  } catch (error) {
      res.status(500).send("Internal Server Error")
      console.log(error)
  }
}
)

module.exports = router;