//High level scope:Define buttons for operators, decimal sign, all-clear sign, equal sign and operands i.e.0-9.
//Listen to which button is pressed. Keep track of 1)isplay value, 2)First operand, 3) wait for second operand (as a boolean) &4)operator.
//Eachtime an operand i.e. 0-9, is pressed, check if this is the first operand or second operand using the 'wait for second operand' boolean.
//if this is the second operand doesn't exist (if the wait for second operand was true) then set the display value as that digit and set the 'wait for second 
//operand' boolean to false. Else If this is the first operand, then check if the display value is '0' then just replace '0' whith that digit 
//that was presses. If not '0' then concatinate the string value.
//If a decimal sign '.' is pressed, check if this is an accidental press of decimal. This is done by checking if we are waiting for the second operand 
//(wait for second operand is true). terminate teh function if boolean is true. If not then concatinate the decimal with the digit 
//on the dicplay value. 
//If an operator is pressed, convert the display value to a number. Check f the operator value already exist and the wait for second operand is true 
//then update the operator with the new operator and terminate the function. The check if this is teh first operand, so assign the display value
//to the first operand variable. else i.e if teh first value exist and the display value is showing the second value, then use the 
//first operand and the second operand (second operand is displayed) and perform the calculation (using a function that defines the 
//operators functionality). Once calculated, set the decimal place then remove any trailing 0's, display it and asign the first 
//value as the result. at this point, asign the wait for second operand as true, and update the operator variable.
//In a function, define the operators functionality which also rund teh calculation between two values.
// In a function, define how to reset the calculator if teh all-clear is pressed. In here, just set the 1)isplay value, 2)First operand,
// 3) wait for second operand (as a boolean) &4)operator to their default value.

//create an object to keep track of values
const Calculator={
    Display_value:"0",//initialise the display value to 0
    First_Operand:null,//hold  the first operand for any experessions, set to null for now
    Wait_Second_Operand:false,//check wether the second operand has been input
    operator:null,//Hold the operator
};
//This modifies values each time a button is clicked
function Input_Digit(digit){
    const{Display_value,Wait_Second_Operand}=Calculator;
    if(Wait_Second_Operand===true){//Check if wait_second_operand is true
        // and set display_value to the key that was clicked
        Calculator.Display_value=digit;
        Calculator.Wait_Second_Operand=false;
    }
    else {
        Calculator.Display_value=Display_value==="0"?digit:Display_value+digit;//This overwrites Display_Value if
        //the current value is 0 otherwise it adds onto it
    }        
}
//this section handles decimal points
function Input_Decimal(dot){
    if(Calculator.Wait_Second_Operand===true)return;//ensure that accidental clicking of the decimal point doesnt cause bug in the program
    if(!Calculator.Display_value.includes(dot)){
        Calculator.Display_value+=dot;//if the display_value does not contain a decimal point we want to add a decimal point
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const{First_Operand, Display_value, operator}=Calculator;
    const Value_of_Input=parseFloat(Display_value);//When an operator key is pressed, 
    //we convert the current number displayed on teh screen 
    //to a number and then store the result in 
    //Calculator.First_operand if it doesnt already exist
    if(operator && Calculator.Wait_Second_Operand){//check if an operator already exists
        // and if wait_second_operand is true, then update the operator and exits from the function
        Calculator.operator=Next_Operator;
        return;
    }
    if (First_Operand==null){
        Calculator.First_Operand=Value_of_Input;
    }else if(operator){//check if an operator already exist
        const Value_Now=First_Operand || 0;//If operator exist, property lookup is perfomred for the operator
        //in the perfomr_calculation object and the function that matches the
        //operator is executed
        let result=Perform_Calculation[operator](Value_Now, Value_of_Input);
        result=Number(result).toFixed(9);//Add fixed amount of numbers after the decimal
        result=(result*1).toString();//This will remove any trailing 0's
        Calculator.Display_value = parseFloat(result);
        Calculator.First_Operand= parseFloat(result);
     
    }
    Calculator.Wait_Second_Operand=true;
    Calculator.operator=Next_Operator;
}

    const Perform_Calculation = {
        '/':(First_Operand, Second_Operand) =>First_Operand/Second_Operand,
        '*':(First_Operand, Second_Operand) =>First_Operand * Second_Operand,
        '+':(First_Operand, Second_Operand) =>First_Operand + Second_Operand,
        '-':(First_Operand, Second_Operand) =>First_Operand - Second_Operand,
        '=':(First_Operand, Second_Operand) =>Second_Operand
    };
    //Reset function
    function Calculator_Reset(){
        Calculator.Display_value="0";//initialise the display value to 0
        Calculator.First_Operand=null;//hold  the first operand for any experessions, set to null for now
        Calculator.Wait_Second_Operand=false;//check wether the second operand has been input
        Calculator.operator=null;//Hold teh operator
    }
    //Update the screen with the content of the display value
    function Update_Display(){
        const display=document.querySelector('.calculator-screen');
        display.value=Calculator.Display_value;
    }
    Update_Display();
    //This section monitors button clicks
    const keys=document.querySelector('.calculator-keys');
    keys.addEventListener('click',(event)=>{
        const {target}=event;//The target variable is an object that represents the elemnt that was clicked
        if(!target.matches('button')){//if the element that was clicked on is not a button, exit the function
            return;
        }
        if(target.classList.contains('operator')){//To check if an element contains a class, you use the contains() method of the classList property of the element
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        if(target.classList.contains('decimal')){
            Input_Decimal(target.value);
            Update_Display();
            return;
        }
        if(target.classList.contains('all-clear')){
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    })
