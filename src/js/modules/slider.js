import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'

function slider() {
  return new Swiper('.swiper_mode_primary', {
    modules: [Pagination],
    //количество слайдов для показа
    slidesPerView: 1.25,
    //отступ между слайдами
    spaceBetween: 16,
    // slidesPerGroup: 1,

    breakpoints: {
      375: {
        slidesPerView: 1.45
      },
      425: {
        slidesPerView: 1.65
      },
      500: {
        slidesPerView: 1.95
      },
      550: {
        slidesPerView: 2.15
      },
      600: {
        slidesPerView: 2.35
      },
      650: {
        slidesPerView: 2.55
      },
      700: {
        slidesPerView: 2.75
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

export { slider }
