const jwt = require("jsonwebtoken");

const mid1 = function(req,res,next)
{
    // it will take token in headers
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
    //weather token present or not
    if (!token) {
         return res.send({ status: false, msg: "token must be present" });
    }
    console.log(token);
    // it will decode token correct or not here I am using try and catch block
    try {
           jwt.verify(token, "functionup-Uranium");
    }
    // if the given token is invalid it will enter into catch block
    catch (err) {
         return res.status(400).send ({status: false, msg: "token is invalid"})
    }
    let decodedToken = jwt.verify(token, "functionup-Uranium");
    //it will take params as userId
    let userID = req.params.userId
    let userLogged = decodedToken.userId
    if(userID != userLogged) {
        return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
      }
    next();
}
module.exports.mid1 = mid1;