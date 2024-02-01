let container = document.querySelector(".container")
colors = ["red","green","blue","white","aqua","antiquewhite","beige","azure","bisque"]



// This Works
// boxes = document.querySelectorAll(".box")
// document.querySelectorAll(".box").forEach(e => {
//   e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// });


// This works
boxes = container.children
for (let i of boxes) {
  i.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}