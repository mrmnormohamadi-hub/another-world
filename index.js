const shootingStar = document.querySelector(".shooting-star");
setTimeout(function () {
  shootingStar.classList.add("shoot");
}, 2000);
const secondStar = document.querySelector(".second-star");
setTimeout(function () {
  secondStar.classList.add("shoot");
}, 3000);
const portal = document.querySelector(".portal");
const galaxy = document.querySelector(".galaxy");

galaxy.onanimationend = function (event) {
  if (event.animationName === "shine") {
    portal.classList.add("pulse");
  }
};
/* i made crazyyyyyyy amm the above text is not true (:
 */
