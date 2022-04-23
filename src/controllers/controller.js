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
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  };
module.exports.loginUser = loginUser

const getUserData = async function (req, res) 
{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(!userDetails)  return res.status(400).send({ status: false, msg: "No such user exists" });
    res.status(201).send({ status: true, data: userDetails });
};
module.exports.getUserData = getUserData

const updateUser = async function (req, res) 
{
    let userId = req.params.userId;
    try {
          let user = await userModel.findById(userId);
    }
    catch (err) {
                  return res.status(400).send("No such user exists");
         }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
    res.status(201).send({ status: updatedUser, data: updatedUser })
  };
module.exports.updateUser = updateUser;

const deleteUser = async function (req,res)
{
  let userId = req.params.userId;
  try {
        let user = await userModel.findById(userId);
  }
  catch (err) {
    return res.status(400).send("No such user exists");
  }
  // user.isDeletes = true
  // user.save()
  // res.send({data : user})  or
  let deleteUser = await userModel.findByIdAndUpdate(
    {_id : userId},
    {$set: {isDeletes : true}},
    {new : true})

    res.status(201).send({status: deleteUser, data: deleteUser})
}
module.exports.deleteUser = deleteUser


const postMessage = async function (req, res) 
{
  let message = req.body.message
  try {
  let user = await userModel.findById(data)
  }
  catch (err)  {
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  }
  let data = req.params.userId
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},
                                                     { $set : {posts: updatedPosts}}, 
                                                     {new: true});

  //return the updated user document
  return res.send({status: true, data: updatedUser})
}
module.exports.postMessage = postMessage




  