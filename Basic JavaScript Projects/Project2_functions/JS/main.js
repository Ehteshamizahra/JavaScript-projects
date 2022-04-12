function btn_func() {
    var a="variable 1"; //Define a variable with a string value
    var b="variable 2";//Define a variable with a string value
    document.getElementById("btn_text").innerHTML=a+" & "+b; //concatinate the string values on the page using event structure
}
function my_func() {
    var sentence="<br>first sentence";//Define a variable with a string value
    sentence += " & the second sentence";//concatinate a new string to the variable
    document.getElementById("concatinate").innerHTML=sentence; //display the string on the page once the event is triggered
}