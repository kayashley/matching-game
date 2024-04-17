const card1 = document.getElementById("default-card-one");
// card1.removeAttribute("src");
// card1.attr("src", yg.img); // card div
const card2 = document.getElementById("default-card-two"); // card div
const card3 = document.getElementById("default-card-three"); // card div
const card4 = document.getElementById("default-card-four"); // card div
const card5 = document.getElementById("default-card-five"); // card div
const card6 = document.getElementById("default-card-six"); // card div
const card7 = document.getElementById("default-card-seven"); // card div
const card8 = document.getElementById("default-card-eight"); // card div

const cards = [card1, card2, card3, card4, card5, card6, card7, card8];

cards.forEach((card) =>
  card.addEventListener("click", () => {
    //   console.log("test");
    card.classList.add("remove-card");
    setTimeout(() => card.classList.remove("remove-card"), 1000);
  })
);

const imageCard = document.getElementById("image-card");
console.log(imageCard);

// generate a number between 1-8
