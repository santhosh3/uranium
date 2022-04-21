const mid1 = function(req,res,next)
{
    let a = req.headers["isfreeappuser"]
    console.log(a)
    if(a == undefined)
    {
        res.send("Header is mandatory")
    }
    else
    {
        next();
    }
}
module.exports.mid1 = mid1;