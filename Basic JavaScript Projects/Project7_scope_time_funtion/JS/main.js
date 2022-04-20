var x=0;//Define a global variable
function global_var() {
    var y=x++;//Increment the global variable and assign it to a new variable
//    var c=a/y;//Inducing error
    document.getElementById("global").innerHTML="The answer is " + y;
}

function local_var(){
    a=1;//Define a local variable
    var b=a++;//Decrement the local variable and assign it to a new variable
    document.getElementById("local").innerHTML="The answer is " +b;
}

function get_date() {
    if(new Date().getHours()<18){ //Create a conditional statement
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}
function get_date2() {
    var I=new Date().getHours();
    var f=new Date().getMinutes();
    if(I+":"+f<"22:57"){ //Create a conditional statement
        document.getElementById("Greeting2").innerHTML="How are you today?";
    } else {//Create an else statement
        document.getElementById("Greeting2").innerHTML= "It's now "+I+":"+f+". Time to go home!";
    }
}

function guess_func(){
    var input_guess=document.getElementById("number").value;//Read the user's input value
    var rand_val=Math.floor(Math.random() * 11);//obtain a randomley generated value
    if (input_guess==rand_val){//conditional statemnet 
        reply="Well done! You guessed correct.";
    } else {
        reply="Randomley generated value was: "+rand_val+". Guess again!";
    }
    document.getElementById("guess").innerHTML=reply;//return the result to the html id
}


