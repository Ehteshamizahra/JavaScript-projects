//An example of switch 
function textIn_func() {
    var season=document.getElementById("season").value;// Define a variable by the user input
    var message="You are born in the ";//Define a string
    var message_out;//Declare a variable
    switch(season){
        case "spring"://Case 1
            message_out= message + "first season of the year";
        break;
        case "summer"://Case 2
            message_out= message + "second season of the year";
        break;
        case "fall"://Case 3
            message_out= message + "third season of the year";
        break;
        case "winter"://Case 4
            message_out= message + "forth season of the year";
        break;
        default://Default case
            message_out= "Please enter a season exactly as written on the list above";
        
    }

    document.getElementById("result").innerHTML=message_out;
}
//example of getElementsByClassName
function func(){
    var A=document.getElementsByClassName("click");//Define a variable by a class
    A[1].innerHTML="The text is changes";//Return one of the elements of the array 
}

var c=document.getElementById("ID_Name");
var ctx=c.getContext("2d");//Get canvas 2d rendering context
var grd=ctx.createLinearGradient(0,0,300,0);//createLinearGradient(x0, y0, x1, y1)
grd.addColorStop(0,"black");
grd.addColorStop(0.5, "yellow")
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(0,0,500,250);//fillRect(x, y, width, height)