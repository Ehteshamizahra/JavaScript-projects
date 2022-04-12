function btn_func() {
    var a="variable 1";
    var b="variable 2";
    document.getElementById("btn_text").innerHTML=a+" & "+b;
}
function my_func() {
    var sentence="<br>first sentence";
    sentence += " & the second sentence";
    document.getElementById("concatinate").innerHTML=sentence;
}