window.onload =  () => {
  heightHeader()
}
window.onresize = () => {
  heightHeader()
}

const heightHeader = () => {
  const navEl = document.querySelector('nav.nav')
  const navHeight = navEl.offsetHeight
  
  const headerEl = document.querySelector('header.header')
  const windowHeight = document.body.clientHeight

  headerEl.style.minHeight = (windowHeight - navHeight) + 'px'
}