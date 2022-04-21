//concatination string
function concat_func() {
    var a="First";//define a variable
    var b="Second";
    var c=" & ";
    var d=a.concat(c, b);//concatinating the variables
    document.getElementById("string_concat").innerHTML=d;//return the variable
}
//slicing string
function slice_func() {
    var a="First & Second round of the game";//define a variable
    var d=a.slice(7);//concatinating the variables
    document.getElementById("string_slice").innerHTML=d;//return the variable
}
//toUppercase string
function upper_func() {
    var a="First & Second round of the game";//define a variable
    var d=a.toUpperCase();//convert teh variable to uppercase
    document.getElementById("string_upper").innerHTML=d;//return the variable
}
//toUpperCase string
function search_func() {
    var a="First & Second round of the game";//define a variable
    var d=a.search("&");//search for an element in the variables
    document.getElementById("string_search").innerHTML=d;//return the variable
}
//convert to string
function tostring_func() {
    var a="134";//define a variable
    var d=a.toString();//search for an element in the variables
    document.getElementById("string_convert").innerHTML=d;//return the variable
}
//formating number to fixed length
function formatNumber_func() {
    var a=82.143;//define a variable
    var d=a.toPrecision(2);//format a number to a fixed length
    document.getElementById("format_number").innerHTML=d;//return the variable
}
//formating number to fixed point
function fixPoint_func() {
    var a=82.1434566;//define a variable
    var d=a.toFixed(2);//format a number to a fixed significant figure
    document.getElementById("fixpoint_number").innerHTML=d;//return the variable
}
//Primitive value of string
function primitive_func() {
    var a="First & Second round of the game";//define a variable
    var d=a.valueOf();//search for an element in the variables
    document.getElementById("primitive_value").innerHTML=d;//return the variable
}

