var menu = document.getElementById("menu"),
    controls = document.getElementById("controls"),
    background = document.getElementById("background"),
    backgroundInput = document.getElementById("backgroundInput"),
    title = document.getElementById("title"),
    titleInput = document.getElementById("titleInput"),
    description = document.getElementById("description"),
    descriptionInput = document.getElementById("descriptionInput"),
    colorInput = document.getElementById("colorInput"),
    backgroundH = 0,
    backgroundV = 0,
    backgroundHeight = 300,
    newDiv = document.getElementById("plusButton");

menu.addEventListener("click", function () {
    expandMenu();
});

backgroundInput.addEventListener("keyup", function (ev) {
    if (ev.keyCode == 13) {
        changeBG();
    }
});

titleInput.addEventListener("keyup", function (ev) {
    changeTitle();
});

descriptionInput.addEventListener("keyup", function (ev) {
    changeDescription();
});

colorInput.addEventListener("change", function () {
    changeColor()
});

document.addEventListener("keydown", function (ev) {
    moveBG(ev.keyCode);
});

newDiv.addEventListener("click", function () {
    var newTitle = document.createElement("div"),
        newDescription = document.createElement("div"),
        newBackground = document.createElement("div");

    newTitle.className = "title";
    newDescription.className = "description";
    newBackground.className = "background col-12 col-sm-6 col-md-4 col-lg-3";

    newTitle.innerHTML = title.innerHTML;
    newDescription.innerHTML = description.innerHTML;
    newBackground.style.cssText = background.style.cssText;
    newTitle.style.cssText = title.style.cssText;
    newDescription.style.cssText = description.style.cssText;

    document.getElementById("bootstrap").appendChild(newBackground);
    newBackground.appendChild(newTitle);
    newBackground.appendChild(newDescription);


});

function expandMenu() {
    controls.style.bottom = "0px";
};

function changeColor() {
    title.style.color = colorInput.value;
    description.style.color = colorInput.value

};

function changeDescription() {
    description.innerHTML = descriptionInput.value;
};

function changeTitle() {
    title.innerHTML = titleInput.value;
};

function changeBG() {
    if (backgroundInput.value == "horse") {
        background.style.backgroundImage = "url(img/bg1.jpg)";
    } else if (backgroundInput.value == "night") {
        background.style.backgroundImage = "url(img/bg2.jpg)";
    } else if (backgroundInput.value == "mountain") {
        background.style.backgroundImage = "url(img/bg3.jpg)";
    } else if (backgroundInput.value.indexOf("epic") != -1) {
        background.style.backgroundImage = "url(img/bg4.jpg)"
    } else {
        background.style.backgroundImage = "url(" + backgroundInput.value + ")";
    }
};

function moveBG(keyCode) {
    if (keyCode == 40) {
        backgroundV += 10;
    }
    if (keyCode == 38) {
        backgroundV -= 10;
    }
    if (keyCode == 37) {
        backgroundH -= 10;
    }
    if (keyCode == 39) {
        backgroundH += 10;
    }
    if (keyCode == 187) {
        backgroundHeight += 10;
    }
    if (keyCode == 189) {
        backgroundHeight -= 10;
    }

    background.style.backgroundPosition = backgroundH + "px " + backgroundV + "px";
    background.style.height = backgroundHeight + "px"
}
