void function(window, document, undefined) {
  var toggle = document.getElementById('toggle')
  var overlay = document.getElementById('overlay')
  var toggleR = document.getElementById('toggle-responsive')
  var main = document.getElementById('main')

  toggleR.addEventListener('click', function(e) {
    if(document.body.className !== 'menu-open-responsive') {
      document.body.className = 'menu-open-responsive'
    } else {
      document.body.className = ''
    }
  }, false)

  toggle.addEventListener('click', function(e) {
    document.body.className = 'menu-open'
    toggle.className = 'hidden transparent'
  })

  overlay.addEventListener('click', function(e) {
    document.body.className = ''
    toggle.className = 'transparent'
  })

  main.addEventListener('transitionend', function(e) {
    if(document.body.className !== 'menu-open') {
      toggle.className = ''
    }
  }, false)
}(window, document)