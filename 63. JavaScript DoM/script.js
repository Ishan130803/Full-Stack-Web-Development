let container = document.querySelector(".container")
colors = ["red","green","blue","white","aqua","antiquewhite","beige","azure","bisque"]



// This Works
// boxes = document.querySelectorAll(".box")
// document.querySelectorAll(".box").forEach(e => {
//   e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// });


// This works
// let boxes = container.children
// for (let i of boxes) {
//   i.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// }

// THis works
let boxes = Array.from(container.children)
boxes.forEach(e => {
  e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})



// This doesn't WOrk
// boxes = container.children
// boxes.forEach(e => {
//   e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// })


