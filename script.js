const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const imgsContainer = document.getElementById("imgs");

//event listeners
imgsContainer.addEventListener("click", imgClick);

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  e.target.style.opacity = 0.6;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
}

console.log(imgs);
