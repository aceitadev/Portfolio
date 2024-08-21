var Theme = "light";

window.onload = function () {
    const value = localStorage.getItem("Theme");
    if (value !== null) {
        Theme = value;
    }
    updateTheme();
    console.log(Theme)
}

function updateTheme() {
    if (Theme === "light") {
        const image = document.getElementById("ThemeIcon");
        image.src = "../../../assets/icons/Dark.png";
        document.body.className = "Theme-Dark";
    } else if (Theme === "dark") {
        const image = document.getElementById("ThemeIcon");
        image.src = "../../../assets/icons/Light.png";
        document.body.className = "Theme-Light";
    }
}

function changeTheme() {
    if (Theme === "light") {
        Theme = "dark";
    } else if (Theme === "dark") {
        Theme = "light";
    }
    localStorage.setItem("Theme", Theme);
    console.log(Theme)
    updateTheme();
}