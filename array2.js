//fill methode
var testArray = [2,3,6,8,5,9,1,4];
console.log(testArray.fill("M",3,5));   //value,startposition,endposition

//filter methode
const myNumber = [22,33,44,55,66,77,88,99];
console.log(myNumber.filter((num) => (num != 33)));

//slice methode
var user = ["moni","pavi","anu","kavi","magi","suji"];
console.log(user.slice(2,4));   //starvalue ,endvalu

//splice methode
var colors = ["blue","orange","pink","yellow","green"];
colors.splice(2,3,"hello")     //startthevalue,count&delete,value
console.log(colors);
