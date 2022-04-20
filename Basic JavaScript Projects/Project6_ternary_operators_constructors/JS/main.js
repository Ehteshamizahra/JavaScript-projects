//Create a Ternary function example
function Ride_function() {
    var Height, Can_ride;//Create two variable
    Height=document.getElementById("Height").value;//Define a variable based on user's input
    Can_ride=(Height<51)?"You are too short":"You are tall enough";//Compare the input within a ternary operation
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";//Return the message and display on teh page
}
//Create a Ternary function example
function vote_func() {
    var age, can_vote;//Create two variable
    age=document.getElementById("age").value; //Define a variable based on user's input
    can_vote=(age>=18)?"You are eligible":"You are not eligible";//Compare the input within a ternary operation
    document.getElementById("vote_message").innerHTML=can_vote + " to vote";//Return the message and display on teh page
}

//Create a constructor
function vehicle(make, model, year, colour) {
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_colour=colour;
}

//Creat new instances of the object
var Jack=new vehicle("Dodge","Viper",2020,"Red"); 
var Emily=new vehicle("Jeep", "Trainl Hawk", 2019, "White and Black");
var Erik=new vehicle("Ford", "Pinto", 1971, "Mustard");

//Create a function
function car_func() {
    document.getElementById("keyword_and_constrcutors").innerHTML=
    "Erik drives a " +Erik.vehicle_colour+"-colourd "
    +Erik.vehicle_model+" manufactured in"+Erik.vehicle_year+".";//Reurn a message when the event is triggered
}

//Create a constructor
function cons_func(day, month, year) {
    this.birthday_day=day;
    this.birthday_month=month;
    this.birthday_year=year;
}
//Creat new instances of the object
var me=new cons_func("11", "February", "1987");
var you=new cons_func("23", "January", "1988");

//Create a function
function example() {
    document.getElementById("new_and_this").innerHTML=
    "My birthday is on "+me.birthday_day +"/"+me.birthday_month+"/"
    +me.birthday_year+" and your birthday is on "+you.birthday_day
    +"/"+you.birthday_month+"/"+you.birthday_year+".";//Reurn a message when the event is triggered
}
//Example of nested function
function my_func() {
    document.getElementById("counting").innerHTML=count();//Return the result of teh count() function when the event is triggered
    function count(){ //Nested function 1
        var starting_point=9; //Initiate a variable
        function plus_one() { //Nested function 2
            starting_point +=1;//Increment teh variable when function is executed
        }
        plus_one();
        return starting_point;//Return the resultant variable
    }
}


