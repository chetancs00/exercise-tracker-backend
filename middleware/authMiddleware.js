const jwt  = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI"

module.exports = (req, res, next) => {
    const authToken = req.headers['auth-token'];
    const data = jwt.verify(token, SECRET_KEY);
    if (authToken) {
      req.authToken = authToken;
      next();
    } else {
      res.status(401).send({ error: 'Unauthorized' });
    }
  };