
/*var name = "Vinicius Antonio Vilaça Lara"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "QA Engineer"
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

/*var audacity = "audacity"
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

console.log(finalName)*/

var bio = {
"name": "Vinicius Antonio Vilaça Lara",
"role":"QA Engineer",
"contact_info": {
    "mobile" : " (31) 987688748",
    "email" : "viniciusvilacalara@gmail.com",
    "github" : "vinicius-vilacalara",
    "location" : "Belo Horizonte"
},
"welcome-message" : "Lorem ipsum Vinicius Lara",
"skills": [ "Fontend", "Backend", "QA"],
"bioPic": " images/fry.jpg"
};

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContactInfo = HTMLcontactGeneric.replace("$data%",bio.contact_info);
//var formattedPicture = HTMLbioPic.replace("$data%",picture_URL);

/*$("#main").prepend(bio.name);
$("#main").append(bio.role);

$("#main").append(bio.contact_info);
$("#main").append(bio.picture_URL);
*/
var work = {

};

work.position = "QA Engineer";
work.employer = "Avenue Code";
work.years = "2 years";
work.city = "Belo Horizonte";

var education = {

};

education["last_school"] = "PUC Minas";
education["years_attend"] = "4 years";
education["school_city"] = "Belo Horizonte";

var formattedPosition = HTMLworkTitle.replace("%data%",work["position"]);
var formattedEducation = HTMLschoolName.replace("%data%", education.last_school);

$("#main").append(formattedPosition);
$("#main").append(formattedEducation);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



