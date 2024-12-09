let inputPwd = document.querySelector("input[type='password']")
let btn = document.querySelectorAll('button')
btn[0].addEventListener('click',()=>{
  inputPwd.type = 'text'
})
btn[1].addEventListener('click',()=>{
  inputPwd.type = 'password'
})
