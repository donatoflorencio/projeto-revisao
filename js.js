document.querySelector('#no').addEventListener("click", function() {

  let h = window.innerHeight - 50;
  let w = window.innerWidth - 50;
  this.style.position = "absolute"
  this.style.top = Math.random() * h + "px"
  this.style.left = Math.random() * w + "px"

})