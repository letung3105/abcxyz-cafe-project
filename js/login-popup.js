//show login pop-up when clicking on 'login' tag on navigation bar
function openLogin() {
    document.getElementById("login-form-container").style.display = "block";
    document.getElementById("blur-filter").style.display = "block";
}
//close login pop-up when clicking on 'close' button
function closeLogin() {
    document.getElementById("login-form-container").style.display = "none";
    document.getElementById("blur-filter").style.display = "none";
}
