function getReceipt() {
    //initialize the variables
    var text1="<h3>You Ordered:</h3>";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray=document.getElementsByClassName("size");//Create an array of all teh pizza sizes
    for (var i=0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){//check which pizza size was selected
            var selectedSize=sizeArray[i].value;//
            text1=text1+selectedSize+"<br>";//Assign the selected pizza size to a variable
        }
    }
    //Asign price to each pizza size
    if(selectedSize==="Personal Pizza"){
        sizeTotal=6;
    }else if (selectedSize==="Small Pizza"){
        sizeTotal=8;
    }else if (selectedSize==="Medium Pizza"){
        sizeTotal=10;
    }else if (selectedSize==="Large Pizza"){
        sizeTotal=14;
    }else if (selectedSize==="Extra large Pizza"){
        sizeTotal=16;
    }
    runningTotal=sizeTotal;//Asign the pizza size value to a new variable
    console.log(selectedSize+" =$"+sizeTotal+" .00");//Display the total price on the console
    console.log("size text1: "+text1);//Display the Pizza size on the console
    console.log("subtotal: $"+runningTotal+" .00");//Display the total price on the console
    getTopping(runningTotal,text1);//Call a new function to add the toppings to the order
};
//function to add the toppings to the order
function getTopping(runningTotal,text1){
    var toppingTotal=0;//Initialise a variable
    var selectedTopping=[];//Initialise an array
    var toppingArray=document.getElementsByClassName("toppings");//Read all the list of avaiable toppings and assign them to an array 
    for (var j=0; j<toppingArray.length; j++) {//Itterate through the list of toppings and check which ones are selcted
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);//Add all the selected toppings to the array
            console.log("selected topping item: ("+toppingArray[j].value+")");//Display the selected toppings in the console
            text1=text1+toppingArray[j].value+"<br>";//Add the selected toppings to the same array as the selected pizza was added 
        }
    }
    var toppingCount=selectedTopping.length;//Check the length of the toppings array
    if (toppingCount>1){//If the array is above 1 then decrement by one as one of teh toppings is for free
        toppingTotal=(toppingCount-1);
    }else {
        toppingTotal=0;
    }
    runningTotal=(runningTotal+toppingTotal);//add 1 for each toppings to the running total
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+" .00");
    console.log("toping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+" .00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+" .00"+"</strong></h3>";//Display the total price on the display
};
