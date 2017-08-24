var bio = {
    "name": "Vinicius Antonio Vilaça Lara",
    "role": "QA Engineer",
    "contact_info": {
        "mobile": " (31) 987688748",
        "email": "viniciusvilacalara@gmail.com",
        "github": "vinicius-vilacalara",
        "location": "Belo Horizonte"
    },
    "welcome-message": "Lorem ipsum Vinicius Lara",
    "skills": ["Fontend", "Backend", "QA"],
    "bioPic": " images/fry.jpg"
};

var work = {
    "jobs":[
    
        {
            "position": "QA Engineer",
            "employer": "Avenue Code",
            "years": "October/2017 - Now",
            "city": "Belo Horizonte",
            "description": "Working mostly with automation tests using Specflow and C# but also helping the PDMs writing the stories and the BDD scenarios.Additionally, I have been working executing functional tests on PETE Client solution"
        },
        {
            "position": "Software Engineer",
            "employer": "CI&T",
            "years": "August 2015 - September 2016",
            "city": "Belo Horizonte",
            "description": "Company provides the back-end development of more than 400 websites around the world for the Coca-Cola brands using the Adobe Experience Manager (AEM).● Test case and Test Plan preparation using Testlink basing on user stories ● Specification and preparation of test data and environment. ● Execution of manual, exploratory and automated tests. ● Development of automated tests using Java and Selenium WebDriver implementing the Page Objects and Page Factory design patterns."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "PUC Minas",
            "city": "Belo Horizonte",
            "degree": "BS"
        },
        {
            "name": "UFMG",
            "city": "Belo Horizonte",
            "degree": "Masters"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Crash Course",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]

};

var projects = {
    "projects": [
        {
            "title": "PETE Client",
            "dates": "2016-2017",
            "description": "GAP clothes production control system"
        },
        {
            "title": "Coca Cola GO",
            "dates": "2015-2016",
            "description": "Coca Cola Brands sites around the world"
        }

    ]
};

function displayWork() {
    for(jobs in work.jobs) {
    
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].position);

    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].years);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
    $(".work-entry:last").append(formattedDescription);
    
    }
}
displayWork(); 


if (bio["skills"] != null){
    //var formattedSkills = HTMLskillsStart.replace("%data%", bio["skills"]);
    $("#header").append(HTMLskillsStart);
    
    var formattedSkillsNames = HTMLskills.replace("%data%", bio["skills"][0]);
    $("#skills").append(formattedSkillsNames);
    var formattedSkillsNames = HTMLskills.replace("%data%", bio["skills"][1]);
    $("#skills").append(formattedSkillsNames);
    var formattedSkillsNames = HTMLskills.replace("%data%", bio["skills"][2]);
    $("#skills").append(formattedSkillsNames);

 

} else {
console.log("There is no skills");
}

 var name = "Vinicius Antonio Vilaça Lara"
var formattedName = HTMLheaderName.replace("%data%", name);
 var role = "QA Engineer"
 var formattedRole = HTMLheaderRole.replace("%data%", role)
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName); 

 var buttonI18n = $('<button type = "button" id = "internationalizeButton"/>Internationalize</button>');
 //<button type = "button" id = "internationalizeButton"/>Internationalize</button>
 $("#main").append(buttonI18n);
 console.log(buttonI18n);


