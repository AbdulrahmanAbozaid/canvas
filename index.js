const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.style.width = "100vw";
// canvas.style.height = "100vh";
// canvas.style.backgroundColor = "#00F";
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
const pointerRadius = 2;
let drawing = 0;

window.addEventListener("mousedown", () => {
  drawing = 1;
});
window.addEventListener("mouseup", () => {
  drawing = 0;
});
window.addEventListener("mouseleave", () => {
  drawing = 0;
});

window.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.offsetX, e.movementX);
  console.log("p", e.pageX);

  //   ctx.lineWidth = 10;

  if (!drawing) return;
  ctx.beginPath();
  ctx.roundRect(
    e.clientX - pointerRadius / 2,
    e.clientY - pointerRadius / 2,
    pointerRadius,
    pointerRadius,
    pointerRadius,
  );
  //   ctx.stroke();
  ctx.fill();
});

ctx.fillRect(50, 50, 50, 50);
