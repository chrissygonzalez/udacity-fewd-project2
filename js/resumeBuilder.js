var bio = {
	"name": "Chrissy Gonzalez",
	"role": "Designer and developer",
	"contacts": {
		"mobile": "206 412 4486",
		"email": "chrissygonzalez@gmail.com",
		"github": "chrissygonzalez",
		"twitter": "@chrissygonzalez",
		"location": "Brooklyn, NY"
	},
	"welcomeMessage": "Champion of simplicity, friend of rainbow sprinkles",
	"skills": ["UX design", "visual design", "front end development"],
	"biopic": "images/sprinkles.png",
	"display": function() {
		// name and role are the dark headline
		var formattedNameRole = HTMLheaderName.replace("%data%", this.name + ", "+ this.role);
		$("#namerole").append(formattedNameRole);

		// welcome message is the slightly lighter headline
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#namerole").append(formattedMsg);

		// the rainbow sprinkles
		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#namerole").prepend(formattedBioPic);

		// FontAwesome icons with contact info tooltips
		for (contact in this.contacts) {
			var formattedContact = "";
			switch (contact) {
				case "mobile":
					formattedContact = HTMLcontactGeneric.replace("%contact%", "");
					break;
				case "email":
					formattedContact = HTMLcontactGeneric.replace("%contact%", "");
					break;
				case "github":
					formattedContact = HTMLcontactGeneric.replace("%contact%", "");
					break;
				case "twitter":
					formattedContact = HTMLcontactGeneric.replace("%contact%", "");
					break;
				case "location":
					formattedContact = HTMLcontactGeneric.replace("%contact%", "");
					break;
				default:
					formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
			}

			// append icons to header and footer
			formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		}

		// list skills as pink pills
		if (this.skills.length > 0) {
		  $("#skillsSection").append(HTMLskillsStart);
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
			"url": "http://gust.com",
			"title": "Lead UX Designer",
			"location": "New York, NY",
			"dates": "Jan 2015 – present",
			"description": "Lead designer for Gust’s legal tools for entrepreneurs. As part of distributed team, responsible for wireframes, flows, and user interviews. Working directly with distributed development team, using Sketch, Slack, and Trello to plan and execute work in sprints."
		}, {
			"employer": "Google",
			"url": "http://google.com",
			"title": "Contract UX Designer",
			"location": "New York, NY",
			"dates": "Dec 2013 – Dec 2014",
			"description": "UX designer on the Identity team. Designed flows and wireframes for future versions of sign in across all platforms. Created visualizations for presentations to senior management. Contributed to larger projects such as generic avatar design and account switching patterns for multilogin."
		}, {
			"employer": "Intuit",
			"url": "http://intuit.com",
			"title": "Senior Visual Designer",
			"location": "Mountain View, CA",
			"dates": "Oct 2010 – Dec 2013",
			"description": "Visual and UX design for QuickBooks team. Lead designer on QuickBooks Mobile for Android, including first release of tablet-optimized version. Worked closely with distributed development team and product managers in long and short iteration cycles."
		}
	],
	"display": function() {
		for (job in this.jobs) {

			// start a work entry
		    $("#workExperience").append(HTMLworkStart);

		    // employer is a link, job is just text
		    var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
		    formattedEmployer = formattedEmployer.replace("#", this.jobs[job].url);
		    var formattedJob = HTMLworkTitle.replace("%data%", this.jobs[job].title);
		    $(".work-entry:last").append(formattedJob + formattedEmployer);

		    // location and dates on one line
		    var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
		    var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
		    $(".work-entry:last").append(formattedLocation + formattedDates);

		    // paragraph description
		    var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
		    $(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "Project Mirror",
		"dates": "2014",
		"description": "Joint project between Chrome and Identity teams, allowing Chrome to Mirror device-level accounts on Android. Designed options for sign in and manage accounts screens, explored implications of various proposed scenarios.",
		"images": ["images/mirror_01.png", "images/mirror_02.png"]
	}, 	{
		"title": "QuickBooks Mobile for Android Tablet",
		"dates": "2011 – 2012",
		"description": "Adaptation of in-market phone application for tablet-sized screens. Included redesigned forms, introduction of new grid layout, and improved navigation patterns. Visual and some UX design for entire process, from concept to initial  release.",
		"images": ["images/tablet_01.png", "images/tablet_02.png", "images/tablet_03.png"]
	}, 	{
		"title": "QuickBooks Mobile First-time Experience",
		"dates": "2011",
		"description": "First-time experience for QuickBooks Mobile for Android. Besides improvements to sign in and loading screens, included small tour of top 7 features (based on usage statistics). Resulted in a 21% reduction in failed logins, and a 50% increase of trial subscriptions to QuickBooks Online.",
		"images": ["images/ftu_01.png", "images/ftu_02.png", "images/ftu_03.png", "images/ftu_04.png", "images/ftu_05.png"]
	}],
	"display": function() {
		for (project in this.projects) {

			// start a project entry
		    $("#projects").append(HTMLprojectStart);

		    // loop through images, add them for Slick Carousel
	        $(".project-entry:last").append(HTMLprojectCarouselStart);
	        for (image in this.projects[project].images) {
			    var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
			    $(".forSlick:last").append(formattedImage);
			}

			// start new project text section
		    $(".project-entry:last").append(HTMLprojectText);

		    // name, title, and description of project
		    var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
		    $(".project-text:last").append(formattedTitle);

		    var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
		    $(".project-text:last").append(formattedDates);

		    var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
		    $(".project-text:last").append(formattedDescription);
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
			"dates": "1998",
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
		for (school in this.schools) {

			// add new education entry to Education
			$("#education").append(HTMLschoolStart);

			// school name is a link
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			formattedName = formattedName.replace("#", this.schools[school].url);
			$(".education-entry:last").append(formattedName);

			// dates and location on one line
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedLocation + formattedDates);

			// loop through majors, add to entry with commas in between
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			var counter = 0;
			for (major in this.schools[school].majors) {
				if (counter > 0) {
					formattedDegree += ", ";
				}
				formattedDegree += this.schools[school].majors[major];
				counter++;
			}
			$(".education-entry:last").append(formattedDegree);
		}

		// add Online Classes section
		$("#onlineeducation").append(HTMLonlineClasses);

		for (course in this.onlineCourses) {

			// add new education entry to Online Classes
			$("#onlineeducation").append(HTMLschoolStart);

			// school is a link
			var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
			formattedSchool = formattedSchool.replace("#", this.onlineCourses[course].url);
			$(".education-entry:last").append(formattedSchool);

			// date and class title
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
			$(".education-entry:last").append(formattedTitle);
		}
	}
}

// DO IT!!
bio.display();
work.display();
projects.display();
education.display();

// add the Google map
$("#mapDiv").append(googleMap);

