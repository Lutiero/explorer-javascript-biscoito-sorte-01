// Variáveis
const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const closedFortuneCookieImage = document.querySelector('#closed-fortune-cookie')
const btnReset = document.querySelector('#btn-Reset')


// Eventos
closedFortuneCookieImage.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleClick)


// Função
function handleClick() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

