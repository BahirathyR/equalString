
function equalstring(firstarray,secondarray){
console.log(JSON.stringify(firstarray.sort())===JSON.stringify(secondarray.sort()))
}

module.exports.equalstring=equalstring;