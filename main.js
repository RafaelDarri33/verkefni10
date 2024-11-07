import './style.css';

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let startX, startY;

// Get canvas offset to adjust coordinates
const canvasOffset = canvas.getBoundingClientRect();

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  startX = event.clientX - canvasOffset.left;
  startY = event.clientY - canvasOffset.top;
});

canvas.addEventListener("mousemove", (event) => {
  if (!isDrawing) return;
  const currentX = event.clientX - canvasOffset.left;
  const currentY = event.clientY - canvasOffset.top;
  
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  
  startX = currentX;
  startY = currentY;
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
