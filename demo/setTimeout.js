var i = 0;
var img;
var timeId0;
var timeId1;
var timeId2;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

//點擊切換圖片1
function pic1() {
    clearTimeout(timeId0);
    clearTimeout(timeId1);
    clearTimeout(timeId2);
    img2.style.display = "none";
    img2.style.opacity = 0;
    img3.style.display = "none";
    img3.style.opacity = 0;
    //執行change繼續自動切換圖片
    i = 3;
    change();
}

function pic2() {
    clearTimeout(timeId0);
    clearTimeout(timeId1);
    clearTimeout(timeId2);
    img1.style.display = "none";
    img1.style.opacity = 0;
    img3.style.display = "none";
    img3.style.opacity = 0;
    i = 1;
    change();
}

function pic3() {
    clearTimeout(timeId0);
    clearTimeout(timeId1);
    clearTimeout(timeId2);
    img2.style.display = "none";
    img2.style.opacity = 0;
    img1.style.display = "none";
    img1.style.opacity = 0;
    i = 2;
    change();
}

function fadeIn() {
    //利用opacity判斷是否再執行一次timeIdEx2
    if (img.style.opacity < 1) {
        //透明度每0.05秒加0.05
        img.style.opacity = Number(img.style.opacity) + 0.05;
        timeIdEx2();
    }
    //透明度超過1後直接設為1
    else if (img.style.opacity >= 1) {
        img.style.opacity = 1;
        //重新執行init
        init();
    }
}

//0.05秒後執行一次fadeIn
function timeIdEx2() {
    timeId2 = window.setTimeout(fadeIn, 50);
}

//利用i改變img，對下一張要出現的圖片作用
function change() {
    if (i == 1) {
        img = img2;
    } else if (i == 2) {
        img = img3;
    } else if (i == 3) {
        img = img1;
    }
    //先把要出現的圖片設為block
    img.style.display = "block";
    //執行timeIdEx2
    timeIdEx2();
}

//每50秒透明度-0.1
function fadeOut() {
    //利用opacity的值判斷是否再執行一次timeIdEx1
    if (img.style.opacity > 0) {
        img.style.opacity -= 0.1;
        timeIdEx1();
    }
    //如果透明度減到小於0則直接設定透明度等於零並將該img隱藏
    else if (img.style.opacity <= 0) {
        img.style.opacity = 0;
        img.style.display = "none";
        //執行change
        change();
    }
}

//0.05秒後執行一次fadeOut
function timeIdEx1() {
    timeId1 = window.setTimeout(fadeOut, 50);
}

//利用i作為變數判斷現在切換到第幾張圖片
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
    //設定img為不透明
    img.style.opacity = 1;
    //執行timeIdEx1
    timeIdEx1();
}

//網頁讀取完開始執行
function init() {
    //3.5秒後執行一次slideShow
    timeId0 = window.setTimeout(slidShow, 3500);
}
