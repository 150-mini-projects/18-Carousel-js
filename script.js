const imgs = document.getElementById("imgs")

const img = document.querySelectorAll("#imgs img")

let idx = 0

function display() {
  idx++

  if (idx > img.length -1) {
    idx = 0
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`

  setTimeout(run, 2000)
}

setInterval(display, 2000)
