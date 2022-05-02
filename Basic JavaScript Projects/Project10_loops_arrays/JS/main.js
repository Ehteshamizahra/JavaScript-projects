//example of while loop
function call_loop() {
    var second=10;//initialise a numeric variable
    var count_down=""; //initialise a string variable
    while (second>=0){
        count_down += "<br>" + second; //concatinate the string variable 
        second--; //decrement the second variable
    }
    document.getElementById("Loop").innerHTML=count_down;//return all the data concatinated in the string
}
//Example of using length
function call_loop2() {
    var A="superexpialidocious"; //initialise a string variable
    var spell=""; //initialise an empty string variable
    var B=A.length;//Assign a variable the length of the string
    while (B>0){
        spell += "<br>" + A.charAt(0);//concatinate the string variable 
        A=A.substring(1); //remove the first letter of the string
        B--;//decrement the length of the string
    }
    document.getElementById("Loop2").innerHTML=spell;//return all the data concatinated in the string
}
//Example of using for loop
function for_loop() {
    var A=["Guitar", "Piano","Saxophone", "Violin"]; //initialise a list of string variable
    var list1=""; //initialise an empty string variable
    var B=A.length;//Assign a variable the length of the string
    var i;
    for(i=B-1; i>=0; i--){
        list1 += "<br>" + A[i];//concatinate the string variable 
    }
    document.getElementById("List of instruments").innerHTML=list1;//return all the data concatinated in the string
}

//Example of Array creation
function array_function() {
    var home_type=[];//Initialize an array
    home_type[0]="Flat";//Add the first element the array
    home_type[1]="Bunglo";
    home_type[2]="Beach house";
    home_type[3]="Multi stroy house";
    home_type[4]="Cottage";

    document.getElementById("Array").innerHTML=
    "There are many types of houses I'd like to live in including "
    + home_type[1] + " & " + home_type[2] +"."; //return the string
}
//Example of constant data type
function constant_function() {
    const A={name:"Zahra", ID:1234, grade:80} //Define a constant keyword with multiple properties and associated values
    A.grade=70;//Change the value of one of teh properties
    A.surname="Ehteshami";// Add a new property and it's corresponding value
    document.getElementById("Constant").innerHTML=A.name +" "+A.surname+ "'s new score is " +A.grade + ".";
}
/*
//Example of block scope LET
var A="Variable";
document.write(A+"<br>");//Define  avariable with global property 
{
    let A="block_variable";//define a variable with Block scope property
    document.write(A);
}
*/

//Example of return
document.getElementById("return").innerHTML=return_function(3, 7);//call the function and pass arguments to it

function return_function(a, b) { //Create a function with properties
    return c=a+(b*2); // the return of teh function
}

let grade={//Define an object with properties and method
    name:"Zahra",
    surname:"Ehteshami",
    module:"JavaScript",
    grade:"80",
    method: function() {//Define a method for teh object
        return this.name +" "+this.surname+
        "'s grade for module "+this.module+" is: "+this.grade+".";
    }

};
document.getElementById("grade_object").innerHTML=grade.method();//output the function's return

//Example of break and continue
let text1=""
for (let i=0; i<=10;i++){
    if (i==5){break;}
    text1 +=i +"<br>"
}
document.getElementById("text1").innerHTML=text1;
let text2=""
for (let i=10; i>=0;i--){
    if (i==5){continue;}
    text2 +=i +"<br>"
}
document.getElementById("text2").innerHTML=text2;


