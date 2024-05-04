function modalCall() {
  let upperMenuCall = document.querySelector('.upper-menu__btn_call')

  let contactsCall = document.querySelector('.contacts__btn_call')

  let bodyModelCall = document.querySelector('.modal-call__content')

  let modalCallClosed = bodyModelCall.querySelector('.modal-call__btn_closed')

  let backgroundBlurred = document.querySelector(
    '.modal-call__background-blurred'
  )

  let arr = [upperMenuCall, contactsCall, modalCallClosed, backgroundBlurred]

  let toggleModalCall = function (arg) {
    arg.addEventListener('click', function () {
      bodyModelCall.classList.toggle('modal-call_active')
      backgroundBlurred.classList.toggle('modal-call__background-blurred_visible')
    })
  }

  arr.forEach(function (element) {
    toggleModalCall(element)
  })
}

export { modalCall }
