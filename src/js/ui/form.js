function form() {
  let modalFeedbackForms = document.querySelectorAll('.form')

  modalFeedbackForms.forEach(function (el) {
    el.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
  })
}

export { form }
