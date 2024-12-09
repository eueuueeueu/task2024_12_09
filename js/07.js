let textArea = document.querySelector('#messageBoard')
let addBtn = document.querySelector('.addBtn')
let delBtn = document.querySelector('.delBtn')
let bodybtn = document.querySelector('.bodyBtn')
addBtn.addEventListener('click', () => {
  if (textArea.value === '') {
    alert('你还没有写留言')
  } else {
    let textValue = textArea.value
    let box = document.createElement('div')
    box.classList.add('box')
    bodybtn.insertBefore(box, bodybtn.children[0])
    let li = document.createElement('li')
    li.innerHTML = textValue
    box.appendChild(li)
    let btn = document.createElement('button')
    btn.innerHTML = '删除'
    box.appendChild(btn)
    btn.addEventListener('click', function () {
      bodybtn.removeChild(this.parentNode)
    })
  }

})
delBtn.addEventListener('click', () => {
  bodybtn.innerHTML = ''
})