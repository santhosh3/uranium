let axios = require("axios")

let getSortedCities = async (req,res) =>
{
  try {
    let Cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","Moscow", "London"]
    let cityObjArray = []
    for(let i=0; i<Cities.length; i++)
    {
    let obj = {city: Cities[i]}
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${Cities[i]}&appid=8d749418c34d3ab2bf7453835bd3b05b`)
    console.log(result.data.main.temp)
    obj.temp = result.data.main.temp
    cityObjArray.push(obj)
    }
    
    let sorted = cityObjArray.sort((a,b) => {return a.temp - b.temp})
    console.log(sorted)
    res.send({status: true, data: sorted})
}
catch (err) {
    console.log(err)
    res.status(500).send({status: false, msg: err.message })
}
}
module.exports.getSortedCities = getSortedCities
