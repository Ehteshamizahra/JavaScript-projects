let activePlayer="X";//keep tracks of who's turn it it
let selectedSquares=[];//thi sarray stores an array of moves, to determine win condition

//Funation to place an X or O in the table
function placeXorO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //The .some checks each element of selectedSquare array to 
    //see if it contains the square numbered clicked on
    if (!selectedSquares.some(element =>element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);//retrive the html elemnt id that was clicked
        if (activePlayer==='X'){
            select.style.backgroundImage='url("images/x.png")';
        }
        else{
            select.style.backgroundImage='url("images/o.png")';
        }
        selectedSquares.push(squareNumber+activePlayer);//concatinating the squareNumber and ActivePlayer into an array
        checkWinConditions();//Calls a function that checks for win conditions
        //change the active player
        if(activePlayer==='X'){
            activePlayer='O';
        }
        else {
            activePlayer='X';
        }
        
        audio('./media/place.mp3');//plays placement sound
        
        if(activePlayer==='O'){
            disableClick();//when it is computer turn disable the UI          
            setTimeout(function(){computerTurn();},1000); //wait for 1 second before computer places image and enables click

        }
        return true;//neeed for the computerTrun function
    }
}
//computer to randomley select a square in computer's turn
function computerTurn() {
    let success=false;//initialise the booleaon variable
    let pickASquare;//store a random number from 0-8 in this variable
    while(!success){//allows the while loop to keep trying if a square is already selected
        pickASquare=String(Math.floor(Math.random()*9));//A random number between 0-8 is selected
        if(placeXorO(pickASquare)){//If the random number evaluated retunrs true, the square hasn't been selected yet
            placeXorO(pickASquare);//call the function
            success=true;//change the booleaon and ends the loop
        };
    }
}

//this function pairs the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met
function checkWinConditions(){
    if(arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)}
    else if(arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558)}
    else if(arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520)}
    else if(arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)}
    else if(arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558)}
    else if(arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520)}
    //if no one of the above condition is true then execute the else if
    else if(selectedSquares.length>=9){
        audio('./media/tie.mp3');
        setTimeout(function(){resetGame();},1000);//wait before the reset game is called
        
    }
    //vheck if an array includes 3 strings so the win condition is met.
    function arrayIncludes(squareA, squareB, squareC) {
        const a=selectedSquares.includes(squareA);
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC);
        if(a===true && b===true && c===true){ return true}
        
    }
}
//make body element temporary unclickable when it's the computer's turn
function disableClick(){
    body.style.pointerEvents='none';//make body unclickable
    setTimeout(function(){body.style.pointerEvents='auto';},1000);//this make the body clickable after 1 second once the computer responded
}
//it takes a string parameter of teh path set earlier for placement sound
function audio(audioURL){
    let audio=new Audio(audioURL);
    audio.play();
} 
//use the html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas=document.getElementById("win-lines");//access the html access
    const c=canvas.getContext("2d");//getting access to methods and properties to use on canvas.
    //leading to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context
    let x1=coordX1, y1=coordY1, x2=coordX2, y2=coordY2, x=x1, y=y1;
      
    //interact with the canvas
    function animateLineDrawing(){
        const animationLoop=requestAnimationFrame(animateLineDrawing);//create a loop
        c.clearRect(0,0,608,608);//clear content from teh last loop iteration
        c.beginPath();//a method to start a new path
        c.moveTo(x1,y1);//a method to move to teh starting point for teh line
        c.lineTo(x,y);//a method to indicate the end point of the line
        c.lineWidth=10;//a method to set the width of the line
        c.strokeStyle='rgba(70,255,33,.8)';//set teh colour of the line
        c.stroke();//a method to draw everything laid out above
        
        if(x1<=x2 && y1<=y2){//check if we have reached the endpoint
            if(x < x2) {x +=10;}//add 10 to the previous end x point
            if(y < y2) {y +=10;}//add 10 to the previous end y point
            if(x >= x2 && y >= y2){cancelAnimationFrame(animationLoop);}//cancel animation loop if we reach the end points
        }
        if(x1 <= x2 && y1 >= y2){//similar to the above but for 6, 4, 2 win condition
            if(x < x2){x +=10;}
            if(y > y2){y -=10;}
            if(x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
        }

    }
    //clear out canvas after win line is drawn
    function clear(){
        const animationLoop=requestAnimationFrame(clear);//start the animation loop
        c.clearRect(0,0,608,608);//clear the canvas
        cancelAnimationFrame(animationLoop);//stop animation loop
    }
    disableClick();//diable clicking whiles the win sound is playing
    audio('./media/winGame.mp3');
    animateLineDrawing();//call the animation loop
    setTimeout(function(){clear();resetGame();},1000);//waite 1 second then clear the canvas, reset the game, and allow slicking again    
    
}
//reset the game in the event of tie or a win
function resetGame(){

    for(let i=0;i<9;i++){//iterate thorugh each HTML square element
        let square=document.getElementById(String(i));//get the html element of i
        square.style.backgroundImage='';//removes all the images from teh background

    }
    selectedSquares=[];//reset the save array
}