window.onload =  () => {
  heightHeader()
  preloader()
}
window.onresize = () => {
  heightHeader()
  preloader()
}

const heightHeader = () => {
  const navEl = document.querySelector('nav.nav')
  const navHeight = navEl.offsetHeight
  
  const headerEl = document.querySelector('header.header')
  const windowHeight = document.body.clientHeight

  headerEl.style.minHeight = (windowHeight - navHeight) + 'px'
}

const preloader = () => {
  const preloaderOverlay = document.querySelector('.preloader-overlay')

  if (!preloaderOverlay.classList.contains('hidden')){
    setTimeout(() => {
      preloaderOverlay.classList.add('hidden')
    }, 1000)
  }
}