let axios = require("axios")

 let MemeCreater = async function (req, res) {
    try {
        let id = req.query.template_id
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        console.log(`query params are: ${id} ${text1} ${username} ${password}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text1=${text1}&username=${username}&password=${password}`
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
  module.exports.MemeCreater = MemeCreater