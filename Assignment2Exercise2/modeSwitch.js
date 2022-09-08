/* Sets initial bool value to false*/
let isDarkMode = false;

/*Function for switching between light and dark mode*/
function switchModes(){
    
    /*Sets code to run if bool is set to false adjusts variable to change background + text colours as well as the text of button*/
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;

    /*Sets code to run if previous code does not run*/
    } else {
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
  
}

