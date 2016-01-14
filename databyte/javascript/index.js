var screenwidth = screen.width;
var new1 = document.getElementById("new1");
var new2 = document.getElementById("new2");
var new3 = document.getElementById("new3");
var itemnav = document.getElementById("itemnav");
var navframe = document.getElementById("navframe");
var navicon = document.getElementById("navicon");
var naviconlist = document.getElementById("naviconlist");
if (screenwidth > 500) {
    producticon.setAttribute("href", "pages/productindex.html");
}
if (screenwidth < 500) {
    new1.innerHTML = "HDR2521 is a space saving 2-bay Raid device by HDDs overlapping design. It can be very easy to carry or place everywhere. It can also dissipates heat by its aluminum case rapidly to prevent......";
    new2.innerHTML = "Our new development, Hub/Charger Series, has pure hub version, pur charger version and hub+charger version. These three categories share the same feature: 1. USB3.0 Super-speed ports which......";
    new3.innerHTML = "HDS2511 is our best single bay product this year. It has so many great features. 1. HDS251 has a Hi-Tech texture appearance made by its Carbon-Fibers stylish design and it can be anti-fingerprint......";
    itemnav.style.display = "none";
    navicon.style.display = "block";
    navicon.style.fontSize = "35px";
    navicon.style.fontWeight = "bold";
    navicon.style.color = "#005CAF";
    navicon.style.position = "absolute";
    navicon.style.right = "5%";
    navicon.style.top = "10px";
    navicon.addEventListener("click", function() {

        if (naviconlist.style.display == "block") {
            naviconlist.style.display = "none";
        } else {
            naviconlist.style.display = "block";
            naviconlist.style.animationName = "navani";
            naviconlist.style.animationDuration = "0.4s";
        }

    });
}
