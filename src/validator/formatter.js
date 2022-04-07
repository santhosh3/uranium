let trim = function(){
    console.log(' function up '.trim());
}
let changeLowerCase = function(){
    console.log('saNThosh'.toLowerCase());
}
let changeUpperCase = function(){
    console.log('sumanth'.toUpperCase());
}

module.exports.trimString = trim;
module.exports.changeToLowerCase = changeLowerCase;
module.exports.changeToUpperCase = changeUpperCase;