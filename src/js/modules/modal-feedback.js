function modalFeedback() {
  let screenWidth = window.innerWidth
  let isClicked = false
  let clickCount = 0

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

  let toggleSideMenu = function (arg) {
    arg.addEventListener('click', function () {
      bodyModelFeedback.classList.toggle('modal-feedback_active')
      backgroundBlurred.classList.toggle('modal-feedback_visible')
    })
  }

  for (let i = 0; i < arr.length; i++) {
    toggleSideMenu(arr[i])
  }
}

export { modalFeedback }
