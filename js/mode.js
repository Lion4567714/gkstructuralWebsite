var darkMode = 0;

function darkModeButtonPress() {
    var modeIcon = document.getElementById("mode-icon");
    var backgrounds = document.getElementsByClassName("dm-bg");
    var borders = document.getElementsByClassName("dm-bd");
    var texts = document.getElementsByClassName("dm-tx");

    modeIcon.classList.toggle("bi-sun");
    modeIcon.classList.toggle("bi-moon");
    
    for (let border of borders) {
        border.classList.toggle("border-white");
    }

    if (darkMode == true) {
        for (let background of backgrounds) {
            background.style.backgroundColor = "white";
        }
        for (let text of texts) {
            text.style.color = "black";
        }
        darkMode = false;
    } else {
        for (let background of backgrounds) {
            background.style.backgroundColor = "#444";
        }
        for (let text of texts) {
            text.style.color = "white";
        }
        darkMode = true;
    }
}
