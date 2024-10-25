const modalOverlay = document.querySelector('.modal-overlay')
const buttons = document.querySelectorAll('.button')
const icons = document.querySelectorAll('.material-icons')

for (let button of buttons) {
  const idPost = button.getAttribute('id')

  button.addEventListener('click', function() {
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${idPost}`
    modalOverlay.classList.add('active')
  })
}

for (let icon of icons) {
  icon.addEventListener('click', function() {
    if (icon.classList.contains('square')) {
      document.querySelector('.modal').classList.add('maximize')
    } else {
      document.querySelector('.modal').classList.remove('maximize')
    }
  })
}

document.querySelector('.close_modal').addEventListener('click', function() {
  modalOverlay.querySelector('iframe').src = ''
  modalOverlay.classList.remove('active')
})