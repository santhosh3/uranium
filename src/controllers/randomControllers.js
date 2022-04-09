

let players_ckc = function (req,res){
    let players = [
                    {
                        "name": "manish",
                        "dob": "1/1/1995",
                        "gender": "male",
                        "city": "jalandhar",
                        "sports":["swimming"]

                    },
                    {
                        "name": "gopal",
                        "dob": "1/09/1995",
                        "gender": "male",
                        "city": "delhi",
                        "sports":["soccer"]

                    },
                    {
                        "name": "lokesh",
                        "dob": "1/1/1990",
                        "gender": "male",
                        "city": "mumbai",
                        "sports":["soccer"]

                    },
                 ]
                 let x = req.body
                 for(let i = 0; i < players.length; i++)
                 {
                     if(players[i].name != x.name)
                     {
                        players.push(x)
                        res.send({msg:"post request", data:players});
                     }
                     else
                     {
                         res.send("player with the name already exists");
                     }
                }
}

module.exports.players = players_ckc;

welcome = function()
{
    console.log("This is my first message");
}
module.exports.welcomeMessage = welcome;

// let addToArray = function (req,res){
//     let array = [2, 5, 4, 9]
//     let x = req.body.number
//     if(x == 10)
//     {
//     array.unshift(x)
//     res.send({msg: "post req 3",data: array})
//     }
//     else
//     {
//         res.send("not required")
//     }
// }
// module.exports.addToArray = addToArray;