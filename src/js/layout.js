var menNot = document.getElementById('menu-not')
var menYup = document.getElementById('menu-yup')
var menu = document.getElementById('menu')

function openClicked() {
  menNot.style.display="none"
  menu.style.display="block"
  menYup.style.display="block"
}

function closeClicked() {
  menYup.style.display="none"
  menu.style.display="none"
  menNot.style.display="block"
}
  //to bypass using --no-verify
  //git commit -m "Your message about the commit" --no-verify
  //git push