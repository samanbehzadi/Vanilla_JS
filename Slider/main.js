let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let index = 0;

// add initial image to canvas
let canvas = document.getElementById("canvas");
canvas.style.background = `url(./images/${images[0]})`;

let arrows = document.querySelectorAll(".arrow");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      index -= 1;
      if (index < 0) {
        index = images.length - 1;
      }
      canvas.style.background = `url(./images/${images[index]})`;
    } else if (e.target.id === "right") {
      index += 1;
      if (index >= images.length) {
        index = 0;
      }
      canvas.style.background = `url(./images/${images[index]})`;
    }
  });
});
