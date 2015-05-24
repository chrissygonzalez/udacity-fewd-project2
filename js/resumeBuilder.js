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
	"biopic": "url",
	"display": "function() {}"
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
	"display": "function(){ }"
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
	"display": "function() {}"
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
	"display": "function() {}"
}



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formatSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formatSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formatSkills2 = HTMLskills.replace("%data%", bio.skills[2]);


function inName(name) {
  var nameArray = name.trim().split(" ");
  var formattedName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();

  return formattedName;
}

$("#main").append(internationalizeButton);

$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skillsH3").append(formatSkills0);
  $("#skillsH3").append(formatSkills1);
  $("#skillsH3").append(formatSkills2);
}

function displayWork() {
  for (jobs in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
    $(".work-entry:last").append(formattedEmployer + formattedJob + formattedLocation + formattedDates + formattedDescription);
  }
}

displayWork();

projects.display = function() {
  console.log("working");
  for (items in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[items].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[items].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[items].description);
    var formattedImage1 = HTMLprojectImage.replace("%data%", projects.projects[items].images[0]);
    var formattedImage2 = HTMLprojectImage.replace("%data%", projects.projects[items].images[1]);
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage1 + formattedImage2);
  }
}

projects.display();

$("#mapDiv").append(googleMap);

