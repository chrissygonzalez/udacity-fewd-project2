var bio = {
	"name": "Chrissy Gonzalez",
	"role": "Front end web developer",
	"contacts": {
		"mobile": "206 412 4486",
		"email": "chrissygonzalez@gmail.com",
		"github": "chrissygonzalez",
		"twitter": "@chrissygonzalez",
		"location": "Brooklyn, NY"
	},
	"welcomeMessage": "Chrissy Gonzalez is a front end web developer in Brooklyn",
	"skills": ["front end development", "UX design", "visual design"],
	"biopic": "images/chrissy_small.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").append(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").append(formattedRole);

		for (contact in this.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
			formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		}

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBioPic);

		var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedMsg);

		if (this.skills.length > 0) {
		  $("#header").append(HTMLskillsStart);
		  for (skill in this.skills) {
		  	var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
		  	$("#skills").append(formattedSkill);
		  }
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "Gust",
			"title": "Lead UX Designer",
			"location": "New York, NY",
			"dates": "Jan 2015 – present",
			"description": "Lead designers on new set of tools for entrepreneurs"
		}, {
			"employer": "Google",
			"title": "Contract UX Designer",
			"location": "New York, NY",
			"dates": "Dec 2013 – Dec 2014",
			"description": "UX designer on the Identity team"
		}, {
			"employer": "Intuit",
			"title": "Senior Visual Designer",
			"location": "Mountain View, CA",
			"dates": "Oct 2010 – Dec 2013",
			"description": "Visual and UX design on QuickBooks team"
		}
	],
	"display": function() {
		for (job in this.jobs) {
		    $("#workExperience").append(HTMLworkStart);

		    var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
		    $(".work-entry:last").append(formattedEmployer);

		    var formattedJob = HTMLworkTitle.replace("%data%", this.jobs[job].title);
		    $(".work-entry:last").append(formattedJob);

		    var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
		    $(".work-entry:last").append(formattedLocation);

		    var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
		    $(".work-entry:last").append(formattedDates);

		    var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
		    $(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "NT Premium",
		"dates": "Feb 2015 – present",
		"description": "legal tools for entrepreneurs",
		"images": ["images/qbm_cust_after.png", "images/qbm_invoice_after.png"]
	}, 	{
		"title": "Mobile web sign in",
		"dates": "May 2014 – Dec 2014",
		"description": "sign in across all platforms",
		"images": ["images/qbm_cust_after.png", "images/qbm_invoice_after.png"]
	}, 	{
		"title": "QuickBooks Mobile",
		"dates": "Sep 2011 – Nov 2013",
		"description": "QuickBooks for Android phone and tablet",
		"images": ["images/qbm_cust_after.png", "images/qbm_invoice_after.png"]
	}],
	"display": function() {
		for (project in this.projects) {
		    $("#projects").append(HTMLprojectStart);

		    var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
		    $(".project-entry:last").append(formattedTitle);

		    var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
		    $(".project-entry:last").append(formattedDates);

		    var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
		    $(".project-entry:last").append(formattedDescription);

		    //TODO loop through images array instead of hardcoding in two images
		    var formattedImage1 = HTMLprojectImage.replace("%data%", this.projects[project].images[0]);
		    $(".project-entry:last").append(formattedImage1);

		    var formattedImage2 = HTMLprojectImage.replace("%data%", this.projects[project].images[1]);
		    $(".project-entry:last").append(formattedImage2);
		}
	}
}

var education = {
	"schools": [
		{
			"name": "University of Washington",
			"location": "Seattle, WA",
			"degree": "MFA",
			"majors": ["Visual Communication Design"],
			"dates": "2004",
			"url": "http://art.washington.edu/design/"
		}, {
			"name": "Yale University",
			"location": "New Haven, CT",
			"degree": "BA",
			"majors": ["Art"],
			"dates": "1994 – 1998",
			"url": "http://www.yale.edu/"
		}],
	"onlineCourses": [
		{
			"title": "Front-end Developer Nanodegree",
			"school": "Udacity",
			"dates": "Expected completion October 2015",
			"url": "https://www.udacity.com/"
		}, {
			"title": "WordPress Developer Blueprint",
			"school": "Skillcrush",
			"dates": "Dec 2014",
			"url": "http://skillcrush.com"
		}, {
			"title": "Web Developer Blueprint",
			"school": "Skillcrush",
			"dates": "Sep 2014",
			"url": "http://skillcrush.com"
		}
	],
	"display": function(){
		$("#education").append(HTMLschoolStart);

		for (school in this.schools) {
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			$(".education-entry:last").append(formattedName);

			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			for (major in this.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		for (course in this.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
  var nameArray = name.trim().split(" ");
  var formattedName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();

  return formattedName;
}

$("#mapDiv").append(googleMap);

