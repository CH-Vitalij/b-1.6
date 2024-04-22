function label() {
  var a1 = document.querySelectorAll('.read-more')
  var a2 = document.querySelectorAll('.label')
  var a3 = []
  var a4 = []
  var a5 = document.querySelector('.about__excerpt')
  var a6 = document.querySelectorAll('.collapse__row')
  var a7 = [a5]

  var toggleElementBehavior = function (a1, a3, a4, a7) {
    a1.addEventListener('change', function () {
      if (a1.checked) {
        a7.style.maxHeight = '1000px'
        a4.style.transform = 'rotate(180deg)'

        if (a3.textContent === 'Читать далее') {
          a3.textContent = 'Свернуть'
        } else {
          a3.textContent = 'Скрыть'
        }
      } else {
        a7.style.maxHeight = ''
        a4.style.transform = ''

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

  a6.forEach((element) => {
    a7.push(element)
  })

  a1.forEach((element, i) => {
    toggleElementBehavior(element, a3[i], a4[i], a7[i])
  })
}

export { label }
