var B="Welcome to my page"; //define a variable and give it a string value
window.alert(B);
document.write("This is an example of \opostoph' and \?" 
+ " This is a concatinated string <br>"); //write a concatinated string value on the page
var C="This is an example of concatinating strings"+"The second sentence."; //define a variable and give it a string value
document.write(C+"<br>"); //write teh value of C on the page
var animals="big_cats", stripy="tiger", solid_dots="cheetah", rosettes="leopard", dots_rosettes="Jaguar", plain="lion";
document.write(stripy+"<br>"); //define a variable and give it multiple string value
document.write(8/2+"<br>"); //write an expression on the page
function show_time(){
    a=Date();
    document.getElementById("button_event").innerHTML=a;
}