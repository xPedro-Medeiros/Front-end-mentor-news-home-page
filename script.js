const mobileMenu = document.getElementsByClassName('mobile-menu')[0]
const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')

btnOpen.addEventListener('click', () => {
    if (mobileMenu.classList.contains("mobile-menu") == true) {
        mobileMenu.classList.replace("mobile-menu", "slide")
        mobileMenu.setAttribute("data-slide", "true")
        btnOpen.style.display = 'none'
    }
})

btnClose.addEventListener('click', () => {
    if (mobileMenu.classList.contains("slide") == true) {
        mobileMenu.setAttribute("data-slide", "false")
        mobileMenu.classList.replace("slide", "mobile-menu")
        btnOpen.style.display = 'block'

    }
})