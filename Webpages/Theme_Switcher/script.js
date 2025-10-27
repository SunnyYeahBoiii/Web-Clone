const themeBtn = document.getElementById("theme-btn");
const lightBackground = document.getElementById("light-background");
const darkBackground = document.getElementById("dark-background");
const button = document.getElementById("button");
const background = document.querySelector("html");
const rootElement = document.documentElement;
const lightIcon = document.getElementById("light-theme-icon");
const darkIcon = document.getElementById("dark-theme-icon");

let isLightTheme = true;

function lightThemeOn(){
    rootElement.style.setProperty("--background-color" , "var(--light-bg)");
    button.style.left = "10px";
    darkBackground.style.width = "182px";
    darkIcon.style.left = "-80px";
    lightIcon.style.right = "10px";
}

function darkThemeOn(){
    rootElement.style.setProperty("--background-color" , "var(--dark-bg)");
    button.style.left = "110px";
    darkBackground.style.width = "284px";
    darkIcon.style.left = "10px";
    lightIcon.style.right = "-80px";
}

themeBtn.addEventListener("click" , () => {
    if(isLightTheme){
        darkThemeOn();
        isLightTheme = false;
    }else{
        lightThemeOn();
        isLightTheme = true;
    }
});