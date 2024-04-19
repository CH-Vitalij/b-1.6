function label() {
  var a1 = document.querySelector('.about__read-more')
  var a2 = document.querySelector('.label')
  var a3 = document.querySelector('.label span')
  var a4 = a2.querySelector('.about__img')

  console.log(a1);

  a1.addEventListener('change', function () {
    if (a1.checked) {
      a4.src = './img/icon_2.png'
      a3.textContent = 'Свернуть'
    } else {
      a4.src = './img/icon_1.png'
      a3.textContent = 'Читать далее'
    }
  })
}

export { label }
