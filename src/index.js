import './banner.js'
import './tabs.js'

import $ from 'jquery'

$('#swiper').css('backgroundColor', 'red')

// import './styles/index.css'

import './styles/index.less'

import imgUrl from './assets/1.gif'
const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)

import imgUrl1 from './assets/logo_small.png'
const img1 = document.createElement('img')
img1.src = imgUrl1
document.body.appendChild(img1)

import './assets/fonts/iconfont.css'

class App {
  static a = 123
}

console.log(App.a)
;(() => {
  console.log('===========----=========')
})()

import Appp from './app.vue'
