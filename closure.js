function init() {
    var firstName = "Monisha";
    console.log("i am init");
    function sayName() {
        console.log(firstName);
    }
    return sayName;
}
var value = init();
value();


function doAddition(x) {
    return function (y) {
        return x+y;
    } 
}
var add = doAddition(4);
console.log(add(7));
console.log(doAddition(8)(8));