
const image = document.querySelector("#girl");
console.log(image)
image.addEventListener("mouseenter", () => {
  image.style.opacity="0.5" 
});

image.addEventListener("mouseleave", () => {
  image.style.opacity="1" 
});