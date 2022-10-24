import './styles/styles.scss'
import './index.html'

const handleBurgerButtonClick = (e) => {
  const burgerMenu = document.querySelector('#burger-menu')
  e.target.classList.toggle('_active')
  burgerMenu.classList.toggle('_active')
}

const handleAccordionClick = (e) => {
  const accordionItem = e.target.closest('.accordion__item')
  const itemContent = accordionItem.querySelector('.accordion__content')

  if (!itemContent.style.maxHeight) {
    itemContent.style.maxHeight = itemContent.scrollHeight + 'px'
  } else {
    itemContent.style.maxHeight = null
  }

  accordionItem.classList.toggle('_active')
}

function initBurgerMenu() {
  document.querySelector('#burger').addEventListener('click', handleBurgerButtonClick)
}

function initAccordion() {
  document.querySelector('#accordion').addEventListener('click', handleAccordionClick)
}

window.addEventListener('load', () => {
  initBurgerMenu()
  initAccordion()
})