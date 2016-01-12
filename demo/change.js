var i = 0;
var x = 1;
var img;
var timeId0;
var timeId1;
var timeId2;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

function fadeOut() {
    img.style.opacity -= 0.1;
    if (img.style.opacity <= 0) {
        img.style.opacity = 0;
        clearInterval(timeId1);
        img.style.display = "none";
        change();
    }
}

function fadeIn() {
    img.style.opacity = Number(img.style.opacity) + 0.05;
    if (img.style.opacity >= 1) {
        img.style.opacity = 1;
        clearInterval(timeId2);
        clearInterval(timeId0);
        init();
    }
}

function change() {
    x = x + 1;
    if (x == 2) {
        img = img2;
    } else if (x == 3) {
        img = img3;
    } else if (x == 4) {
        x = 1;
        img = img1;
    }
    img.style.display = "block";
    timeId2 = window.setInterval(fadeIn, 50);
}

function pic1() {
    clearInterval(timeId0);
    clearInterval(timeId1);
    clearInterval(timeId2);
    img2.style.display = "none";
    img2.style.opacity = 0;
    img3.style.display = "none";
    img3.style.opacity = 0;
    x = 3;
    i = 3;
    change();
}

function pic2() {
    clearInterval(timeId0);
    clearInterval(timeId1);
    clearInterval(timeId2);
    img1.style.display = "none";
    img1.style.opacity = 0;
    img3.style.display = "none";
    img3.style.opacity = 0;
    x = 1;
    i = 1;
    change();
}

function pic3() {
    clearInterval(timeId0);
    clearInterval(timeId1);
    clearInterval(timeId2);
    img2.style.display = "none";
    img2.style.opacity = 0;
    img1.style.display = "none";
    img1.style.opacity = 0;
    x = 2;
    i = 2;
    change();
}

function slidShow() {
    i++;
    if (i == 1) {
        img = img1;
    } else if (i == 2) {
        img = img2;
    } else if (i == 3) {
        img = img3;
    } else if (i == 4) {
        i = 1;
        img = img1;
    }
    img.style.opacity = 1;
    timeId1 = window.setInterval(fadeOut, 50);
}

function init() {
    timeId0 = window.setInterval(slidShow, 3500);
}
