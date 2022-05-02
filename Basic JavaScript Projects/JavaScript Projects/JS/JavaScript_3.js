//Example of data Attribute
function displayfunc(character){
    var characterType=document.getAttribute("data-character-type");//get the attrivute of the list item that was clicked
    alert(characterType+" is in the "+ character.innerHtML + " universe!");//sends an alert with a text
}