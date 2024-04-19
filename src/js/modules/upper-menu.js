// function upperMenu() {
//   let itemsUpperMenu = document.querySelectorAll(
//     '.header__upper-menu .upper-menu_hidden'
//   )
//   console.log(itemsUpperMenu)

//   function handleScreenSize() {
//     if (screenWidth < 768) {
//       itemsUpperMenu.forEach((item) => {
//         item.classList.add('upper-menu_hidden')
//       })
//     } else {
//       itemsUpperMenu.forEach((item) => {
//         item.classList.remove('upper-menu_hidden')
//       })
//     }
//   }

//   let screenWidth = window.innerWidth

//   window.addEventListener('resize', function () {
//     let newScreenWidth = window.innerWidth
//     screenWidth = newScreenWidth
//     handleScreenSize()
//   })
// }

// export { upperMenu }
