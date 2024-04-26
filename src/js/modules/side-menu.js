function sideMenu() {
  let upperMenuBurger = document.querySelector('.upper-menu__burger')
  console.log(upperMenuBurger)

  let bodySideMenu = document.querySelector('.body__side-menu')
  console.log(bodySideMenu)

  let upperMenuClosed = bodySideMenu.querySelector('.upper-menu__closed')
  console.log(upperMenuClosed)

  upperMenuBurger.addEventListener('click', function () {
    bodySideMenu.classList.toggle('side-menu_active')
  })

  upperMenuClosed.addEventListener('click', function () {
    bodySideMenu.classList.toggle('side-menu_active')
  })
}

export { sideMenu }
