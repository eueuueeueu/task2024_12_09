for (let i = 0; i < 5; i++) {
  let box = document.createElement('div')
  box.classList.add('box')
  box.classList.add(`id-${i}`)
  for (let j = 0; j < 3; j++) {
    let boxChild = document.createElement('div')
    box.appendChild(boxChild)
  }
  let pf = document.querySelector('.pf')
  pf.appendChild(box)
}
window.addEventListener('click', function (e) {
  if (e.target.tagName === 'DIV') {
    let box = this.document.querySelectorAll('.box')
    for (let j = 0; j < box.length; j++) {
      if (box[j].className === `box id-${j} red`) {
        box[j].classList.remove('red')
      }
    }

    let str = parseInt(e.target.parentNode.className.slice(-1,))
    for (let i = 0; i <= str; i++) {
      let red = this.document.querySelector(`.id-${i}`)
      red.classList.add('red')
    }
    let p = this.document.querySelector('p')
    switch (str) {
      case 0:
        p.innerHTML = '差劲'
        break;
      case 1:
        p.innerHTML = '不合格'
        break;
      case 2:
        p.innerHTML = '合格'
        break;
      case 3:
        p.innerHTML = '良好'
        break;
      case 4:
        p.innerHTML = '优秀'
        break;
      default:
        break;
    }
  }
})