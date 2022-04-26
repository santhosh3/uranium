let axios = require("axios")

let getStates = async (req,res) => 
{
 try{
     let options = {									  
         method : 'get',									 
         url : 'https://cdn-api.co-vin.in/api/v2/admin/location/states'			 
        }											
let result = await axios(options);					
console.log(result)									 
let data = result.data								  
res.status(200).send({ status: true,msg : data})		
  }
  catch(err){
    console.log(err)
    res.status(500).send({msg:err.message})
  }	 
}											 
module.exports.getStates = getStates


let getDistricts = async function (req, res) {
  try {
      let id = req.params.stateId
      let options = {
          method: "get",
          url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
      }
      let result = await axios(options);
      console.log(result)
      let data = result.data
      res.status(200).send({ msg: data, status: true })
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
}
module.exports.getDistricts = getDistricts

let getByPin = async function (req, res) {
  try {
      let pin = req.query.pincode
      let date = req.query.date
      console.log(`query params are: ${pin} ${date}`)
      var options = {
          method: "get",
          url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
      }
      let result = await axios(options)
      console.log(result.data)
      res.status(200).send({ msg: result.data })
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
}
module.exports.getByPin = getByPin

let getOtp = async function (req, res) {
  try {
      let data = req.body
      
      console.log(`body is : ${data} `)
      var options = {
          method: "post",
          url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: data
      }

      let result = await axios(options)
      console.log(result.data)
      res.status(200).send({ msg: result.data })
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
}
module.exports.getOtp = getOtp;

let getDistrictSession = async (req,res) =>
{
  try {
    let district = req.query.districtId
    let date = req.query.date
    var options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}
module.exports.getDistrictSession = getDistrictSession
