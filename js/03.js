let inputText = document.querySelector('input[type="text"]')
let inputPassword = document.querySelector('input[type="password"]')
inputText.addEventListener('focus', () => {
  inputText.placeholder = ""
  inputText.style = 'border: 1px solid red;'
})
inputText.addEventListener('blur', () => {
  inputText.placeholder = '邮箱/ID/手机号'
  inputText.style = 'border: 1px solid #ccc;'
})
inputText.addEventListener('change', () => {
  inputText.style = 'border: 1px solid #ccc;'
})
inputPassword.addEventListener('focus', () => {
  inputPassword.placeholder = ''
  inputPassword.style = 'border: 1px solid red;'
})
inputPassword.addEventListener('blur', () => {
  inputPassword.placeholder = '密码'
  inputText.placeholder = '邮箱/ID/手机号'
})
inputPassword.addEventListener('change', () => {
  inputPassword.style = 'border: 1px solid #ccc;'
})
