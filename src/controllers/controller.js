

const basicCode = async function (req, res) 
{
    console.log("hey man, congrates you have reached the ladder")
    res.send({msg: "I am in"})
}

module.exports.basicCode = basicCode




