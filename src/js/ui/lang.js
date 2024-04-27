function lang() {
  document.querySelectorAll('.lang__item').forEach((element) => {
    element.addEventListener('click', function (evt) {
      evt.preventDefault()
      document
        .querySelector('.lang__item.lang__item_active')
        .classList.remove('lang__item_active')
      evt.target.classList.add('lang__item_active')
    })
  })
}

export { lang }
