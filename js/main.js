window.onload = function(){
    showSlide(0); //changing images of signature drinks
    greeting();// show greeting based on weekday and time
    //footer
    var date = document.lastModified;
    document.getElementById("last-modified").innerHTML = 'Last modified: ' + date;
}
