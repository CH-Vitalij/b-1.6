function sideMenu() {
  let upperMenuBurger = document.querySelector('.btn_icon_burger')
  console.log(upperMenuBurger)

  let bodySideMenu = document.querySelector('.side-menu__content')
  console.log(bodySideMenu)

  let upperMenuClosed = bodySideMenu.querySelector('.btn_icon_closed')
  console.log(upperMenuClosed)

  let backgroundBlurred = document.querySelector(
    '.side-menu__background-blurred'
  )

  upperMenuBurger.addEventListener('click', function () {
    bodySideMenu.classList.toggle('side-menu_active')
    backgroundBlurred.classList.toggle('side-menu_active')
  })

  upperMenuClosed.addEventListener('click', function () {
    bodySideMenu.classList.toggle('side-menu_active')
    backgroundBlurred.classList.toggle('side-menu_active')
  })
}

export { sideMenu }
