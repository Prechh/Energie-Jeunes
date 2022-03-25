const menuLogo = document.getElementsByClassName('bx-menu')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]


menuLogo.addEventListener('click', () => {
navbarLinks.classList.toggle('actived')
})


