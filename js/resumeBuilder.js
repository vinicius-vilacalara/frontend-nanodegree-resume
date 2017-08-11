
var name = "Vinicius Antonio Vilaça Lara"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "QA Engineer"
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var audacity = "audacity"
var converted = audacity.slice(1,10)
converted = converted.charAt(0).toUpperCase + converted.slice(1)
console.log(converted)


var name = "AlbeRt EINstEiN"
var arrayName = name.split(" ")
var firstNameSecondPart = arrayName[0].slice(1)
firstNameSecondPart = firstNameSecondPart.toLowerCase()
console.log(firstNameSecondPart)
var firstName = arrayName[0].charAt(0).toUpperCase() + firstNameSecondPart

var secondName = arrayName[1].toUpperCase();

var finalName = firstName +  " " + secondName

console.log(finalName)


