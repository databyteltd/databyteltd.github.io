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

function navanibackfunction() {
    naviconlist.style.display = "none";
}

if (screenwidth > 500) {
    producticon.setAttribute("href", "pages/productindex.html");
}
if (screenwidth < 500) {
    new1.innerHTML = "HDR2521 is a space saving 2-bay Raid device by HDDs overlapping design. It can be very easy to carry or place everywhere. It can also dissipates heat by its aluminum case rapidly to prevent......";
    new2.innerHTML = "Our new development, Hub/Charger Series, has pure hub version, pur charger version and hub+charger version. These three categories share the same feature: 1. USB3.0 Super-speed ports which......";
    new3.innerHTML = "HDS2511 is our best single bay product this year. It has so many great features. 1. HDS251 has a Hi-Tech texture appearance made by its Carbon-Fibers stylish design and it can be anti-fingerprint......";
    itemnav.style.display = "none";
    navicon.addEventListener("click", function() {
        if (naviconlist.style.display == "block") {
            //naviconlist.style.display = "none";
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
        }
    });


    iconremove.addEventListener("click", function() {
        if (naviconlist.style.display == "block") {
            //naviconlist.style.display = "none";
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
        }
    });


}
