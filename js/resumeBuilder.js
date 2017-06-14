var bio = {
    "name": "Jialing Liu",
    "role": "Web developer / Web designer / Green card holder",
    "status" : "Green card holder",
    "contacts": {
        "location": "Silver Spring",
        "mobile": "408-656-6883",
        "github": "millie88888",
        "email": "millie88888@gmail.com",
    },
    "biopic": "images/millie.png",
    "welcomeMessage": "I am passionate about web development so I learned and built projects from Udacity to became a front-end developer. As a designer, I always create, research and explore other websites to see other styles. My goal is to become an experienced web developer so I will keep learning new skills.",
    "skills": [
        "JavaScript", "jQuery", "CSS", "HTML", "Adobe Creative Suite","Web Content Optimization", "Bootstrap", "Page Layout"
    ]
    

};

var work = {
    "jobs": [{
        "employer": "Freelancer",
        "title": "Web Design",
        "dates": "2013 - Present",
        "location": "Silver Spring, Maryland",
        "description": "Build websites with online web development tools and design logos, business cards, banners, and other graphic pieces. Train customers use backstage management systems for their online shops."
    }, {
        "employer": "Tecl-Wood",
        "title": "Graphic Design",
        "dates": "2011 - 2012",
        "location": "Taipei, Taiwan",
        "description": "Designed website banners and flyers.Researched styles for clothing with new product development. Marketed seasonal promotions to increase sales."
    }, {
        "employer": "Rock Anthem",
        "title": "Graphic Design",
        "dates": "2009-2011",
        "location": "Taipei, Taiwan",
        "description": "Designed clothing patterns and magazine layout. Modeled for product shoots and planned the style, photo touch-up and published photos online."
    }]
};

var projects = {
    "projects": [{
        "title": "IOVTEC Internation Ocean Vessel Technical Consultant Co., Ltd",
        "url": "http://w.tw.mawebcenters.com/iovtecom/index.html",
        "titlewithurl": "http:www.yahoo.com.tw",
        "description": "Design website and use online web builder with code to display.",
        "images": ["images/p1.png"]
    },
    {
        "title": "Kouyu Construction Engineering",
        "url": "http://w.tw.mawebcenters.com/kuoyu/",
        "description": "Customize website with client that provide their idea and build up with some code and online builder..",
        "images": ["images/p2.png"]
    },
     {
        "title": "Manjedad japanese restaurant",
        "url": "http://www.manjedad.com/",
        "description": "For a Japanese restaurant that had information and menu on the website, build up with the online builder.",
        "images": ["images/p3.png"]
    },
         {
        "title": "Star-design marketing company",
        "url": "http://www.star-design.com.tw/",
        "description": "Unique design with some content effect on the website, build up with code.",
        "images": ["images/p4.png"]
    },

     {
        "title": "Build a Portfolio Site",
        "url": "https://millie88888.github.io/build-a-portfolio-site.io/",
        "description": "Created with a design mockup as a PDF-file and must replicate that design in HTML and CSS.",
        "images": ["images/p5.png"]
    }]
};


var education = {
    "schools": [{
        "name": "Taibei High School",
        "degree": "High School Degree",
        "majors": ["Graphic Design"],
        "dates": "2005-2008",
        "url": "http://www.tpsh.tp.edu.tw/"
    }],

    "onlineCourses": [ {
        "title": "Udacity",
        "school": "Nanodegree",
        "majors": ["Front-End Web Developer"],
        "dates": "2016"
    }]
};

//bio seciton

bio.display = function() {


    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(formattedRole);

    var _name = bio.name;
    var formattedName = HTMLheaderName.replace("%data%", _name);
    $("#header").prepend(formattedName);



    var _location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", _location);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);

    $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedGithub, formattedEmail);

    var biopic = bio.biopic;
    var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
    $("#header").append(formattedBiopic);

    var welcomeMessage = bio.welcomeMessage;
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
    $("#header").append(formattedwelcomeMessage);




    //skills section

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedskills);

    }
};

bio.display();


//work section

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
        $(".work-entry:last").append(formattedEmployerTitle);

    });
};
work.display();



//projects section


projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectUrl = HTMLprojecturl.replace('%data%', project.url);
        $('.project-entry:last').append(formattedProjectUrl);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedImage = HTMLprojectImage.replace('%data%', img);
            $('.project-entry:last').append(formattedImage);
        });
    });
};

projects.display();



//education section


education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajors);

    });


    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourses) {

        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title).replace("#", onlineCourses.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses.dates);
        var formattedOnlineMajor = HTMLschoolMajor.replace("%data%", onlineCourses.majors);
        var formattedOnlineCourses = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineMajor;
        $(".education-entry:last").append(formattedOnlineCourses);
    });
};
education.display();


//map section

//$("#mapDiv").append(googleMap);








