var screenwidth = screen.width;
var new1 = document.getElementById("new1");
var new2 = document.getElementById("new2");
var new3 = document.getElementById("new3");
var itemnav = document.getElementById("itemnav");
var navframe = document.getElementById("navframe");
var navicon = document.getElementById("navicon");
var naviconlist = document.getElementById("naviconlist");
var mask = document.getElementById("mask");
var body = document.getElementById("body");
var iconremove = document.getElementById("iconremove");
var producticon = document.getElementById("producticon");
var iconproductlist = document.getElementById("iconproductlist");
var iconproduct1 = document.getElementById("iconproduct1");


function navanibackfunction() {
    naviconlist.style.display = "none";
}

function listbackfunction() {
    iconproductlist.style.display = "none";
}

function naviconbackfunction() {
    mask.style.display = "none";
    navicon.style.animationName = "naviconback";
    navicon.style.animationDuration = "0.6s";
    navicon.style.right = "5%";
    navicon.style.color = "#005CAF";
    navicon.style.transform = "rotate(0deg)";
    naviconlist.style.animationName = "navaniback";
    naviconlist.style.animationDuration = "0.6s";
    window.setTimeout(navanibackfunction, 600);
    navicon.style.position = "absolute";
    document.body.style.overflow = " visible";
    producticon.style.borderRadius = "0px";
    producticon.style.backgroundColor = "#CCE0E8";
    producticon.style.color = "#113285";
}




if (screenwidth < 500) {

    itemnav.style.display = "none";

    producticon.addEventListener("click", function() {
        if (iconproductlist.style.display == "block") {
            iconproductlist.style.animationName = "listback";
            iconproductlist.style.animationDuration = "0.6s";
            iconproduct1.style.animationName = "iconproduct1back";
            iconproduct1.style.animationDuration = "0.6s";
            window.setTimeout(listbackfunction, 600);
            producticon.style.borderRadius = "0px";
            producticon.style.backgroundColor = "#CCE0E8";
            producticon.style.color = "#113285";

        } else {
            iconproductlist.style.display = "block";
            iconproductlist.style.animationName = "listgo";
            iconproductlist.style.animationDuration = "0.6s";
            iconproduct1.style.animationName = "iconproduct1go";
            iconproduct1.style.animationDuration = "0.6s";
            producticon.style.borderRadius = "8px";
            producticon.style.backgroundColor = "#005CAF";
            producticon.style.color = "white";
        }
    });

    navicon.addEventListener("click", function() {
        if (naviconlist.style.display == "block") {
            if (iconproductlist.style.display == "block") {
                iconproductlist.style.animationName = "listback";
                iconproductlist.style.animationDuration = "0.6s";
                iconproduct1.style.animationName = "iconproduct1back";
                iconproduct1.style.animationDuration = "0.6s";
                window.setTimeout(listbackfunction, 600);
                window.setTimeout(naviconbackfunction, 600);
                producticon.style.borderRadius = "0px";
                producticon.style.backgroundColor = "#CCE0E8";
                producticon.style.color = "#113285";
            } else {
                naviconbackfunction();
            }

        } else {
            mask.style.display = "block";
            naviconlist.style.display = "block";
            naviconlist.style.animationName = "navanigo";
            naviconlist.style.animationDuration = "0.6s";
            navicon.style.animationName = "navicongo";
            navicon.style.animationDuration = "0.6s";
            navicon.style.right = "34%";
            navicon.style.color = "#113285";
            navicon.style.transform = "rotate(90deg)";
            navicon.style.position = "fixed";
            document.body.style.overflow = " hidden";
        }
    });


    iconremove.addEventListener("click", function() {
        if (naviconlist.style.display == "block") {
            if (iconproductlist.style.display == "block") {
                iconproductlist.style.animationName = "listback";
                iconproductlist.style.animationDuration = "0.6s";
                iconproduct1.style.animationName = "iconproduct1back";
                iconproduct1.style.animationDuration = "0.6s";
                window.setTimeout(listbackfunction, 600);
                window.setTimeout(naviconbackfunction, 600);
                producticon.style.borderRadius = "0px";
                producticon.style.backgroundColor = "#CCE0E8";
                producticon.style.color = "#113285";
            } else {
                naviconbackfunction();
            }

        }
    });


}



var bigpic = document.getElementById("bigpic");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var pic6 = document.getElementById("pic6");

function change1() {
    bigpic.setAttribute("src", "../../../../images/2503N-XL.png");
}

function change2() {
    bigpic.setAttribute("src", "../../../../images/DVD/D110P-F1-WH.jpg");
}

function change3() {
    bigpic.setAttribute("src", "../../../../images/2503N-XL.png");
}

function change4() {
    bigpic.setAttribute("src", "../../../../images/DVD/D110P-F1-WH.jpg");
}

function change5() {
    bigpic.setAttribute("src", "../../../../images/2503N-XL.png");
}

function change6() {
    bigpic.setAttribute("src", "../../../../images/DVD/D110P-F1-WH.jpg");
}


pic1.addEventListener("mouseover", change1);
pic2.addEventListener("mouseover", change2);
pic3.addEventListener("mouseover", change3);
pic4.addEventListener("mouseover", change4);
pic5.addEventListener("mouseover", change5);
pic6.addEventListener("mouseover", change6);
