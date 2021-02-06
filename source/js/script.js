/* jshint asi:true */
'use strict'

void function(window, document, undefined) {
  var body = document.body
  var toggle = document.getElementById('toggle')
  var overlay = document.getElementById('overlay')
  var toggleR = document.getElementById('toggle-responsive')

  toggleR.addEventListener('click', function(e) {
    if (body.className !== 'menu-open-responsive') {
      body.className = 'menu-open-responsive'
    } else {
      body.className = ''
    }
  }, false)

  toggle.addEventListener('click', function(e) {
    body.className = 'menu-open'
  }, false)

  overlay.addEventListener('click', function(e) {
    body.className = ''
  }, false)
}(window, document)
