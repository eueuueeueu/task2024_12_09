let data = [
  { name: '魏璎珞', subject: 'JavaScript', grade: 100 },
  { name: '弘历', subject: 'JavaScript', grade: 90 },
  { name: '傅恒', subject: 'JavaScript', grade: 99 },
  { name: '明玉', subject: 'JavaScript', grade: 89 }
]
function addTbody(data) {
  let tbody = document.querySelector('tbody')
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr')
    for (const key in data[i]) {
      let td = document.createElement('td')
      td.innerHTML = data[i][key]
      tr.appendChild(td)
    }
    let td = document.createElement('td')
    td.innerHTML = `<a href="#">删除</a>`
    tr.appendChild(td)
    tbody.appendChild(tr)
  }
  let allA = document.querySelectorAll('a')
  for (let j = 0; j < allA.length; j++) {
    allA[j].addEventListener('click', function (e) {
      tbody.removeChild(this.parentNode.parentNode);
    })
  }
}
addTbody(data)