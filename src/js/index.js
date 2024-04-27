import '../scss/style.scss'

import { slider } from './modules/slider.js'
import { slideMenu } from './modules/slide-menu.js'
import { sideMenu } from './modules/side-menu.js'
import { modalFeedback } from './modules/modal-feedback.js'
import { modalCall } from './modules/modal-call.js'

import { label } from './ui/label.js'
import { lang } from './ui/lang.js'
import { form } from './ui/form.js'

slider()
slideMenu()
sideMenu()
modalFeedback()
modalCall()

label()
lang()
form()
