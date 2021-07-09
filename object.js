var user = {
    firstName : "monisha",
    lastName : "sekar",
    role : "AOD",
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourse : function () {
       return `${this.firstName} is enrolled in total of ${this.courseList.length} course` ;
    },
};
var courseList=true;
console.log(user.firstName);
console.log(user.getCourse());
user.buyCourse("javascript");
user.buyCourse("react javascript");
user.buyCourse("angular javascript");
console.log(user.getCourse());