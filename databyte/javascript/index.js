var screenwidth = screen.width;
var new1 = document.getElementById("new1");
var new2 = document.getElementById("new2");
var new3 = document.getElementById("new3");
var producticon = document.getElementById("producticon");
if (screenwidth > 500) {
    producticon.setAttribute("href", "pages/productindex.html");
}
if (screenwidth < 500) {
    new1.innerHTML = "HDR2521 is a space saving 2-bay Raid device by HDDs overlapping design. It can be very easy to carry or place everywhere. It can also dissipates heat by its aluminum case rapidly to prevent......";
    new2.innerHTML = "Our new development, Hub/Charger Series, has pure hub version, pur charger version and hub+charger version. These three categories share the same feature: 1. USB3.0 Super-speed ports which......";
    new3.innerHTML = "HDS2511 is our best single bay product this year. It has so many great features. 1. HDS251 has a Hi-Tech texture appearance made by its Carbon-Fibers stylish design and it can be anti-fingerprint......";
}
