function sideMenu() {
  let screenWidth = window.innerWidth
  let isClicked = false
  let clickCount = 0

  let upperMenuBurger = document.querySelector('.upper-menu__btn_burger')

  let bodySideMenu = document.querySelector('.side-menu__content')

  let upperMenuClosed = bodySideMenu.querySelector('.upper-menu__btn_closed')

  let backgroundBlurred = document.querySelector(
    '.side-menu__background-blurred'
  )

  let arr = [upperMenuBurger, upperMenuClosed, backgroundBlurred]

  let toggleSideMenu = function (arg) {
    arg.addEventListener('click', function () {
      clickCount++
      if (clickCount % 2 === 0) {
        isClicked = false
      } else {
        isClicked = true
      }
      bodySideMenu.classList.toggle('side-menu_unactive')
      backgroundBlurred.classList.toggle(
        'side-menu__background-blurred_visible'
      )
    })
  }

  arr.forEach(function (element) {
    toggleSideMenu(element)
  })

  function handleScreenSize() {
    if (!isClicked) {
      if (screenWidth >= 1440) {
        bodySideMenu.classList.remove('side-menu_unactive')
      } else {
        bodySideMenu.classList.add('side-menu_unactive')
        backgroundBlurred.classList.remove(
          'side-menu__background-blurred_visible'
        )
      }
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
