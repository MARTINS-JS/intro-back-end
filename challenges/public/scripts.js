const buttons = document.querySelectorAll('.button')

for (let button of buttons) {
  const id = button.getAttribute('id')
  
  button.addEventListener('click', function() {
    window.location.href = `/article/${id}`
  })
}
