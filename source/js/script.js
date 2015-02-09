void function(window, document, undefined) {
  var toggle = document.getElementById('toggle')
  var overlay = document.getElementById('overlay')
  var toggleR = document.getElementById('toggle-responsive')

  toggleR.addEventListener('click', function(e) {
    if(document.body.className !== 'menu-open-responsive') {
      document.body.className = 'menu-open-responsive'
    } else {
      document.body.className = ''
    }
  }, false)

  toggle.addEventListener('click', function(e) {
    document.body.className = 'menu-open'
  }, false)

  overlay.addEventListener('click', function(e) {
    document.body.className = ''
  }, false)
}(window, document)