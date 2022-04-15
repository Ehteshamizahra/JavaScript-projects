var big_cats={stripy:"tiger", stripy:"tiger2", solid_dots:"cheetah", 
rosettes:"leopard", dots_rosettes:"Jaguar", plain:"lion"}; //Define a dictionary with multiple keys and values
delete big_cats.stripy; //Delete and element from the dictionary
function my_func(){
    document.getElementById("Dictionary").innerHTML=big_cats.stripy;//returns an element object with ID matches 'Dictionary'
}