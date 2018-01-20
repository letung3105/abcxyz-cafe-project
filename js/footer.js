//dynamic footer with last modified time updating
window.onload = function() {
    var date = document.lastModified;
    document.getElementById("last-modified").innerHTML = 'Last modified: ' + date;
}
