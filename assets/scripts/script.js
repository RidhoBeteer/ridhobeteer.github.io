const navMenu = document.getElementById('nav-menu').children
const menuList = []

const homePage = document.getElementById('welcome-section')
const aboutPage = document.getElementById('about')
const portfolioPage = document.getElementById('portfolio')
const contactPage = document.getElementById('contact')


for (let i = 0; i < navMenu.length; i++) {
  menuList.push(navMenu[i])
}

menuList.forEach((e) => {
  e.children[0].addEventListener('click', () => {
    let current = document.getElementsByClassName('active')
    let fromPage
    let toPage
    if (current.length) {
      fromPage = current[0].href.split('#')
      document.getElementById(fromPage[1]).classList.remove('active')
      current[0].classList.remove('active')
    }
    e.children[0].classList.add('active')
    toPage = e.children[0].href.split('#')
    if(!document.getElementById(toPage[1]).classList.contains('active')) {
      document.getElementById(toPage[1]).classList.add('active')
    }
  })
})