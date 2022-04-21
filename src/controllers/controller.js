
 const UserModel = require("../userModel/userModel")
 const productModel= require("../productModel/productModel")
 const orderModel= require("../orderModel/orderModel")
const userModel = require("../userModel/userModel")

const createUser = async function(req,res)
{
    let user = req.body
    let userCreated = await UserModel.create(user)
    res.send({ status: true, data : userCreated})
}
module.exports.createUser = createUser 

const createProduct = async function(req,res)
{
    let user = req.body
    let userProduct = await productModel.create(user)
    res.send({ status: true, data : userProduct})
}
module.exports.createProduct = createProduct 

const createOrder = async function(req,res)
{
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId

    let userValidate = await userModel.findById(userId)
    if(!userValidate)  return res.send({msg : "userId invalid"})

    let productValidate = await productModel.findById(productId)
    if(!productValidate)  return res.send({msg : "productId invalid"})

    let validation = req.headers.isfreeappuser
    if(validation == 'true')
     {
         req.body.amount == 0
         req.body.isfreeappuser == true
         let SavedData = await orderModel.create(data)
         res.send({msg : SavedData}) 
     }
     if(validation == 'false')
      {
          let productPrice = await productModel.findOne({_id: req.body.productId}).select({price:1})
          let userBalance = await userModel.findById(userId).select({balance:1})
          if(productPrice.price > userBalance.balance)
            {
                res.send({msg : "Insufficient balance"})
            }
            else{
                let a = userBalance.balance - productPrice.price
                await userModel.findByIdAndUpdate({_id:userId},{balance:a})
                data.isfreeappuser = false
                data.amount = productPrice.price
                let SavedData = await orderModel.create(data)
                res.send({msg : SavedData})
            }
      }
    
} 
module.exports.createOrder = createOrder



// let header = req.headers["isfreeappuser"]
//     let price = await productModel.find({productId})
//     let userValidation = await userModel.exists({userId})
//     let productValidation = await productModel.exists({productId})
//     if(userValidation){
//         if(productValidation){
//             let purchase = await orderModel.create(data)
//             if(header == true){
//                 await userModel.find({_id: userId}).update({balance: balance-price},{new:true}) 
//             }
//             res.send({success : purchase})
//         }
//         else{
//             res.send({err: "the product is not present"})
//         }
//     }
//     else{
//         res.send({alert: "you are not a registered user,please register"})







