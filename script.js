document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.style.filter = "blur(0.5rem)";
        }
      });
    });
    card.addEventListener("mouseleave", function () {
      cards.forEach((otherCard) => {
        otherCard.style.filter = "none";
      });
    });
  });
});
