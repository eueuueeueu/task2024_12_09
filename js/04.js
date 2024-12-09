window.addEventListener('click', (e) => {
  let btn1 = document.querySelector('.btn1')
  if (e.target.className === 'btn1') {
    let h1 = document.querySelector('h1')
    let h1Str = parseInt(h1.style.fontSize.slice(0, -2)) + 50
    h1.style.fontSize = h1Str + 'px'
  }
  if (e.target.className === 'btn2') {
    let h1 = document.querySelector('h1')
    let h1Str = parseInt(h1.style.fontSize.slice(0, -2)) + 80
    h1.style.fontSize = h1Str + 'px'
  }
})