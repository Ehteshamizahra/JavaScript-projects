function countdown() {
    var seconds=document.getElementById("seconds").value // assign a variable to teh user input
    function tick(){
        seconds--;
        timer.innerHTML=seconds;
        var time=setTimeout(tick,1000);//executed once, the function pauses for 1000 ms before carrying on 
        if (seconds==-1){
            alert("Time's up!");//pop-up message
            clearTimeout(time);//clear the 'setTimeout' function
            timer.innerHTML="";
        }
    }
    tick();//recall the tick() function - looping
}

