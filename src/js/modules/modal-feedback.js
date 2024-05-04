function modalFeedback() {
  let upperMenuChat = document.querySelector('.upper-menu__btn_chat')

  let contactsChat = document.querySelector('.contacts__btn_chat')

  let bodyModelFeedback = document.querySelector('.modal-feedback__content')

  let modalFeedbackClosed = bodyModelFeedback.querySelector(
    '.modal-feedback__btn_closed'
  )

  let backgroundBlurred = document.querySelector(
    '.modal-feedback__background-blurred'
  )

  let arr = [upperMenuChat, contactsChat, modalFeedbackClosed, backgroundBlurred]

  let toggleModalFeedback = function (arg) {
    arg.addEventListener('click', function () {
      bodyModelFeedback.classList.toggle('modal-feedback_active')
      backgroundBlurred.classList.toggle('modal-feedback__background-blurred_visible')
    })
  }

  arr.forEach(function(element) {
    toggleModalFeedback(element);
  });
}

export { modalFeedback }
