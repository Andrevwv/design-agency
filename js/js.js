var el = document.querySelector(".video-bg");
var el2 = document.querySelector(".container");

if (navigator.userAgent.match(/msie|trident/i)) {
    el.style.display = "none";
    el2.style.background = "rgba(17, 17, 17, 0.64";

}

// $(document).ready(function() {
//     if (navigator.userAgent.match(/msie|trident/i)) {
//         alert('You are using the worst browser on this planet.');
//         $('.button').hide();
//     }
// });