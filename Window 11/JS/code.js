var task = document.getElementsByClassName("taskbar")[0];
var startmenu = document.getElementsByClassName("start")[0];

task.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px";
    } else {
        startmenu.style.bottom = "50px";
    }
});

