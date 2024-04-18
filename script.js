document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the moon icon
  var moonIcon = document.getElementById("moon");

  // Get references to the div elements with class "left" and "right"
  var leftDiv = document.querySelector(".left");
  var rightDiv = document.querySelector(".right");

  var dataheadDiv = document.querySelector(".data-head");

  var border = document.querySelector(".sect1 .outer-img");

  var isBlack = false;

  // Add click event listener to the moon icon
  moonIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    if (isBlack) {
      // leftDiv.style.backgroundColor = "bluevoilet";
      rightDiv.style.backgroundColor = "white";
      border.style.backgroundColor = "white";

      dataheadDiv.style.color = "black";
      isBlack = false;
    } else {
      // leftDiv.style.backgroundColor = "black";
      rightDiv.style.backgroundColor = "black";
      border.style.backgroundColor = "black";

      dataheadDiv.style.color = "white";
      isBlack = true;
    }
    // Change the background color of the div elements to black
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the Portfolio anchor link
  var portfolioAnchor = document.querySelector(".prt a");

  // Get reference to the section with class "sect3"
  var sect3Section = document.querySelector(".sect3");

  // Add click event listener to the Portfolio anchor link
  portfolioAnchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    // Scroll to the sect3 section
    sect3Section.scrollIntoView({ behavior: "smooth" });
  });
});

// $('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
