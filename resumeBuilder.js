// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

//Adding My Bio
var bio = {
    "name": "Parmeet Singh",
    "role": "Web Developer",
    "welcomeMessage": "Its not just a Resume, Its my work I have done in the past.",
    "biopic": "images/ProfilePic.jpg",
    "contacts": {
        "mobile": "+91-8826573241",
        "skype": "parmeet9891",
        "location": "India",
        "email": "parmeet9891@gmail.com",
				"github" : "parmeet9891"
    },
    "skills": ["Front-end Geek", "Competitive Coder", "Reader", "JS Enthusiast"]
};

//Adding My Work
var work = {
    "jobs": [{
            "employer": "Glocar",
            "title": "Web-developer",
            "dates": "2013 - 2015",
            "location": "India",
            "description": "Worked as a web developer. Create various pages and update the code to run fast."
        },
        {
            "employer": "Zomato",
            "title": "Web-developer",
            "dates": "2015 - 2016",
            "location": "New Delhi",
            "description": "Worked as a lead Front-end Intern, where I have to manage with various other interns to make the website more user friendly. "
        }
    ]
};

//Adding My Projects
var projects = {
    "project": [{
            "title": "Game Development in JavaScript",
            "dates": "2015",
            "description": "Developed a User-Friendly in JavaScript where the user has to go through different obstacles. Whenever collision takes place, the game ends.",
            "images": ["images/game-ss.png"],
        },
        {
            "title": "Chrome Plugin development",
            "dates": "2016",
            "description": "Chrome plugin Development allows you to provide the screen size of your display.",
            "images": ["images/chrome-plugin.png"],
        }
    ]
};

//Adding My Education
var education = {
    "schools": [{
            "name": "Spring Dales Public School",
            "location": "New Delhi, India",
            "degree": "Board",
            "majors": ["Maths","Physics"],
            "dates": "2000 - 2012",
            "url": "dales.edu"
        },
        {
            "name": "Indian Institute Of Technology",
            "location": "Delhi, India",
            "degree": "Bachelor",
            "majors": ["Information Technology","Data-Mining"],
            "dates": "2013 - 2017",
            "url": "www.iitd.com"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "udacity",
        "dates": "2016 - 2017",
        "url": "https://www.udacity.com/course/nd001"
    }]
};

//Using Encapsulation Method, and accessing information from bio object.
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		//.prepend() method to show things at the beginning of the selected elements.
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

		//for-loop to iterate over all the skills added.
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype);
				var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts ,#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedSkype, formattedLoc);
};

//Using encapsulation method to show education information using education object.
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
         for (var course = 0; course < education.onlineCourses.length; course++) {

       $("#education").append(HTMLschoolStart);
                 var formattedOnTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                 var formattedOnSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                 var formattedOnDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
                 var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedOnTitle + formattedOnSchool,formattedOnDate,formattedURL);
               }
};

//Using encapsulation method to show work i have done.
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates,  formattedLocation, formattedDescription);
    }
};

//Using encapsulation method to show my all academic projects done so far.
projects.display = function() {
    for (var item = 0; item < projects.project.length; item++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        for (var image = 0; image < projects.project[item].images.length; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }

    }
};

//displaying all the information written inside the encapsulated methods.
work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
