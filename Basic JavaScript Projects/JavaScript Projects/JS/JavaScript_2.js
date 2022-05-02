function validateForm(){
    let x=document.forms["my_form"]["fname"].value;
    if (x==""){
        alert("Name must be folled out");
        return farlse;
    }
}
