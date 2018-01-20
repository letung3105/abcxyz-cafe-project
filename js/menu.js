window.onload = function() {
    //changing greeting based on weekday
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var n = weekday[d.getDay()];
    document.getElementById("heading1").innerHTML = '<h2 align="center">Happy ' + n + '!</h2>';
    document.getElementById("heading2").innerHTML = '<p align="center">Please choose a drink to suit your wonderful ' + n + '</p>';
    //footer
    var date = document.lastModified;
    document.getElementById("last-modified").innerHTML = 'Last modified: ' + date;
}