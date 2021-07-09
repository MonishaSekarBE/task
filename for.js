const studentName = ["moni","pavi",66,"anu","kavi",45,"magi","suji"];

for (let i = 0; i<=studentName.length; i++){
    //console.log(i);
    //console.log(studentName[i]);
    //continue methode
    if (typeof studentName[i] !=="string") continue;
        console.log(studentName[i]);
    //breakmethode
    //if(typeof studentName[i] !=="66") break;
    //console.log(studentName[i]);
}
var i=0;
for (;;){
    if (i>3) break;
    console.log(i);
    i++;
} 
//for of
for (const n of studentName){
    console.log(n);
}
//for in
var user = {
    firstName : "monisha",
    lastName : "sekar",
    role : "AOD",
    courseList : 66,
}
for (const n in studentName){
    console.log(n);
    console.log(`key is: ${n} and value is:${symbols[n]}`);
}