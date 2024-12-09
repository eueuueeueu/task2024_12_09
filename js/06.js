let box = document.querySelector('.box')
let imgbox = document.querySelector('.imgbox')
imgbox.addEventListener('click',function(e){
  box.style.background = `url(${e.target.src})`
  
})