const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../userModel/userModel");

const createUser = async function (req, res) {
 try {
       let data = req.body;
       console.log (data)
       if(Object.keys(data).length != 0)
         {
           let savedData = await userModel.create(data); //IF DATA IS PRESENT
           res.status(201).send({msg : savedData})
           console.log(req.newAtribute);
         }
      else
         {
           res.status(400).send({ msg: "BAD REQUEST" }); // IF DATA IS ABSENT
         }
    }
catch (err)
   {
     console.log ("This is error:", err.message)
     res.status(500).send({msg : "ERROR", error : err.message})  // REQUIRED DATA IS ABSENT
   }
};
module.exports.createUser = createUser

const loginUser = async function (req, res) 
{
   
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password })
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
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
    res.send({ status: updatedUser, data: updatedUser })
  };
module.exports.updateUser = updateUser;

const deleteUser = async function (req,res)
{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) 
  {
    return res.send("No such user exists");
  }
  // user.isDeletes = true
  // user.save()
  // res.send({data : user})  or
  let deleteUser = await userModel.findByIdAndUpdate(
    {_id : userId},
    {$set: {isDeletes : true}},
    {new : true}
  )

}

module.exports.deleteUser = deleteUser



  