var jwt = require('jsonwebtoken')
const SECRET_KEY = "NOTESAPI"

const fetchuser = async(req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token, SECRET_KEY);
        req.user = await data.id
        console.log("userdata", data.id)
        next()
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
   
}

module.exports = fetchuser 