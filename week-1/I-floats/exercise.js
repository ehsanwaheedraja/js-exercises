var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
var perStudents = numberOfStudents / totalNumber *100;
var perMentors = numberOfMentors / totalNumber *100;
console.log(totalNumber)
console.log("Percentage students: "+Math.round(perStudents));
console.log("Percentage mentors: "+Math.round(perMentors));
