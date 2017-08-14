var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
var formattedEducation = HTMLschoolName.replace("%data%", education.name);

$("#main").append(formattedPosition);
$("#main").append(formattedEducation);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);