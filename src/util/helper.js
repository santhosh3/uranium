let printDate = function(){
    let currentDate = new Date()
    console.log("the current date is:", currentDate);
}

let printMonth = function(){
    let currentDate = new Date()
    console.log("current date is:",currentDate.getMonth());
}

let getBatchInfo = function(){
    console.log("Uranium,W3D4, the topic for today is nodeJs module system.")
}

module.exports.printtodaydate = printDate;
module.exports.printCurrentMonth = printMonth;
module.exports.printBatchInformation = getBatchInfo;