function label() {
  var readMore = document.querySelectorAll('.read-more')
  var label = document.querySelectorAll('.label')
  var labelSpan  = []
  var labelImg  = []
  var aboutExcerpt  = document.querySelector('.about__excerpt')
  var collapseRows  = document.querySelectorAll('.collapse__row')
  var arr = [aboutExcerpt]

  var toggleElementBehavior = function (readMore, labelSpan , labelImg , arr) {
    readMore.addEventListener('change', function () {
      if (readMore.checked) {
        labelImg .style.transform = 'rotate(180deg)'
        arr.style.maxHeight = '1000px'

        if (labelSpan .textContent === 'Читать далее') {
          labelSpan .textContent = 'Свернуть'
        } else {
          labelSpan .textContent = 'Скрыть'
        }
      } else {
        labelImg .style.transform = ''
        arr.style.maxHeight = ''

        if (labelSpan .textContent === 'Свернуть') {
          labelSpan .textContent = 'Читать далее'
        } else {
          labelSpan .textContent = 'Показать все'
        }
      }
    })
  }

  label.forEach((element) => {
    labelSpan .push(element.querySelector('span'))
    labelImg .push(element.querySelector('.label__img'))
  })

  collapseRows .forEach((element) => {
    arr.push(element)
  })

  readMore.forEach((element, i) => {
    toggleElementBehavior(element, labelSpan [i], labelImg [i], arr[i])
  })
}

export { label }
