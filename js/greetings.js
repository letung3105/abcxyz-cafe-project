//greeting on main page depending on weekday and time of a day
function greeting(){
    var dailyGreetings = document.getElementById("daily-greetings");
    var myDate = new Date();
    var today = myDate.getDay();
    var hours = myDate.getHours();
    //day greeting
    if ((today == 6) || (today == 0)){
        dailyGreetings.innerHTML += "<h2>Have a greet weekend</h2>";
    } else if (today == 1){
        dailyGreetings.innerHTML += "<h2>Start your Monday with us</h2>";
    } else if (today == 2){
        dailyGreetings.innerHTML += "<h2>Start your Tuesday with us</h2>";
    } else if (today == 3){
        dailyGreetings.innerHTML += "<h2>Start your Wednesday with us</h2>";
    } else if (today == 4){
        dailyGreetings.innerHTML += "<h2>Thursday!<br>It's almost weekend</h2>";
    } else if (today == 5){
        dailyGreetings.innerHTML += "<h2>Friday!<br>It's almost weekend</h2>";
    }
    //daytime greeting
    if ((hours >= 6) && (hours <= 11)){
    } else if ((hours >= 12) && (hours <= 16)){
        "Good morning";
    } else if ((hours >= 17) && (hours <= 19)){
        "Good afternoon";
    } else {
        "Good night";
}
}
