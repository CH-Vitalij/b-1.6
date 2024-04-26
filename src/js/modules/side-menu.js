function sideMenu() {
  let screenWidth = window.innerWidth

  let upperMenuBurger = document.querySelector('.btn_icon_burger')

  let bodySideMenu = document.querySelector('.side-menu__content')

  let upperMenuClosed = bodySideMenu.querySelector('.btn_icon_closed')

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

  function handleScreenSize() {
    if (screenWidth >= 1440) {
      bodySideMenu.classList.remove('side-menu_unactive')
      bodySideMenu.classList.add('side-menu_active')
    } else {
      bodySideMenu.classList.add('side-menu_unactive')
      bodySideMenu.classList.remove('side-menu_active')
    }
  }

  window.addEventListener('load', function () {
    let newScreenWidth = window.innerWidth
    screenWidth = newScreenWidth
    handleScreenSize()
  })

  window.addEventListener('resize', function () {
    let newScreenWidth = window.innerWidth
    screenWidth = newScreenWidth
    handleScreenSize()
  })
}

export { sideMenu }
