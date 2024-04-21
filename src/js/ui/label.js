function label() {
  var a1 = document.querySelectorAll('.read-more')
  var a2 = document.querySelectorAll('.label')
  var a3 = []
  var a4 = []
  var a5 = document.querySelector('.about__excerpt')
  var a6 = document.querySelector('.collapse__row')
  var a7 = [a5, a6]

  var foo = function (a1, a3, a4, a7) {
    a1.addEventListener('change', function () {
      if (a1.checked) {
        a7.style.maxHeight = '100%'
        a7.style.overflowY = 'visible'
        a4.src = './img/icon_2.png'
        console.log(a3.textContent)

        if (a3.textContent === 'Читать далее') {
          a3.textContent = 'Свернуть'
        } else {
          a3.textContent = 'Скрыть'
        }
      } else {
        a7.style.maxHeight = ''
        a7.style.overflowY = ''
        a4.src = './img/icon_1.png'
        console.log(a3.textContent)

        if (a3.textContent === 'Свернуть') {
          a3.textContent = 'Читать далее'
        } else {
          a3.textContent = 'Показать все'
        }
      }
    })
  }

  a2.forEach((element) => {
    a3.push(element.querySelector('span'))
    a4.push(element.querySelector('.label__img'))
  })

  a1.forEach((element, i) => {
    foo(element, a3[i], a4[i], a7[i])
  })
}

export { label }
