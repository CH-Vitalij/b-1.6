function slideMenu() {
  document.querySelectorAll('.slide-menu__link').forEach((element) => {
    element.addEventListener('click', function (evt) {
      evt.preventDefault()
      document
        .querySelector('.slide-menu__link.slide-menu__link_active')
        .classList.remove('slide-menu__link_active')
      evt.target.classList.add('slide-menu__link_active')
    })
  })
}

export { slideMenu }
