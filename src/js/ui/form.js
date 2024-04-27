function form() {
  var modalFeedbackForm = document.querySelector('.form')

  modalFeedbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
  })
}

export { form }
