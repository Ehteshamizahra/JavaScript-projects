//create an object to keep track of values
const Calculator={
    Display_value:"0",//initialise the display value to 0
    First_Operand:null,//hold  the first operand for any experessions, set to null for now
    Wait_Second_Operand:false,//check wether the second operand has been input
    operator:null,//Hold teh operator
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
    if(Calculator.Wait_Second_Operand===true)return;//ensure that accidental clicking of teh decimal point doesnt cause bug in the program
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
        if(target.classList.contains('operator')){
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
