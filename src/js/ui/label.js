function label() {
  let readMore = document.querySelectorAll('.read-more')
  let label = document.querySelectorAll('.label')
  let labelSpan = []
  let labelImg = []
  let aboutExcerpt = document.querySelector('.about__excerpt')
  let collapseRows = document.querySelectorAll('.collapse__row')
  let arr = [aboutExcerpt]

  let toggleElementBehavior = function (readMore, labelSpan, labelImg, arr) {
    readMore.addEventListener('change', function () {
      if (readMore.checked) {
        labelImg.style.transform = 'rotate(180deg)'
        arr.style.maxHeight = '1000px'

        if (labelSpan.textContent === 'Читать далее') {
          labelSpan.textContent = 'Свернуть'
        } else {
          labelSpan.textContent = 'Скрыть'
        }
      } else {
        labelImg.style.transform = ''
        arr.style.maxHeight = ''

        if (labelSpan.textContent === 'Свернуть') {
          labelSpan.textContent = 'Читать далее'
        } else {
          labelSpan.textContent = 'Показать все'
        }
      }
    })
  }

  label.forEach((element) => {
    labelSpan.push(element.querySelector('span'))
    labelImg.push(element.querySelector('.label__img'))
  })

  collapseRows.forEach((element) => {
    arr.push(element)
  })

  readMore.forEach((element, i) => {
    toggleElementBehavior(element, labelSpan[i], labelImg[i], arr[i])
  })
}

export { label }
