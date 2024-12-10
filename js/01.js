let data = [
  { id: 1, name: '魏璎珞', subject: 'JavaScript', grade: 100 },
  { id: 2, name: '弘历', subject: 'JavaScript', grade: 90 },
  { id: 3, name: '傅恒', subject: 'JavaScript', grade: 99 },
  { id: 4, name: '明玉', subject: 'JavaScript', grade: 89 }
]
let keys = ['name', 'subject', 'grade', 'action']
function addTbody(data) {
  let tbody = document.querySelector('tbody')
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr')
    // for (const key in data[i]) {
    //   let td = document.createElement('td')
    //   td.innerHTML = data[i][key]
    //   tr.appendChild(td)
    // }
    for (let j = 0; j < keys.length; j++) {
      let td = document.createElement('td')
      let tdValue = data[i][keys[j]] !== undefined ? data[i][keys[j]] : `<a class="action" href="#">删除</a>`
      td.innerHTML = tdValue
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
  // let allA = document.querySelectorAll('a')
  // for (let j = 0; j < allA.length; j++) {
  //   allA[j].addEventListener('click', function (e) {
  //     tbody.removeChild(this.parentNode.parentNode);
  //   })
  // }
  tbody.addEventListener('click', e => {
    e.stopPropagation()
    if (e.target.className = 'action') {
      e.target.parentNode.parentNode.remove()
    }
  })
}
addTbody(data)