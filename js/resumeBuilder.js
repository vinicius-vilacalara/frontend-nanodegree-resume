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
            "years": "2 years",
            "city": "Belo Horizonte"
        },
        {
            "position": "Software Engineer",
            "employer": "CI&T",
            "years": "1 year",
            "city": "Belo Horizonte"
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

        }
    ]
};

for(job in work) {
    //var formattedJobTitle = HTMLworkStart.replace("", job["position"]);
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job["employer"]);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job["position"]);

    $("#workExperience").append(formattedEmployer);
    
    
}

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

