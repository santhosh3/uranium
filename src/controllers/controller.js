const jwt = require("jsonwebtoken");
const userModel = require("../userModel/userModel");

const createUser = async function (req, res) 
{
    let data = req.body;
    let savedData = await userModel.create(data);
    console.log(req.newAtribute);
    res.send({ msg: savedData });
};
module.exports.createUser = createUser

const loginUser = async function (req, res) 
{
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send
      ({
          status : false,
          msg : "username or the password is not correct",
      });
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "Uranium",
          organisation: "FUnctionUp",
        },
        "functionup-Uranium"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, data: token });
};
module.exports.loginUser = loginUser

const getUserData = async function (req, res) 
{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-Uranium");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: userDetails });
};
module.exports.getUserData = getUserData

const updateUser = async function (req, res) 
{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) 
    {
      return res.send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser })
  };
module.exports.updateUser = updateUser;

const deleteUser = async function (req,res)
{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-Uranium");
  if (!decodedToken)
  return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) 
  {
    return res.send("No such user exists");
  }
  user.isDeletes = false
  user.save()
  res.send({data : user})
}

module.exports.deleteUser = deleteUser



  