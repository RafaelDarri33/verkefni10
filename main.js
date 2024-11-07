import './style.css'

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let startX, startY;

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [startX, startY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", (event) => {
  if (!isDrawing) return;
  const [currentX, currentY] = [event.offsetX, event.offsetY];
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  [startX, startY] = [currentX, currentY];
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

document.getElementById("clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

