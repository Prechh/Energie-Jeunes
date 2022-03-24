const menuLogo = document.getElementsByClassName('bx-menu')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]
const navBar =  document.getElementsByClassName('navBar')

menuLogo.addEventListener('click', () => {
navbarLinks.classList.toggle('actived')
})

function navBarScroll()
{
  if (document.documentElement.scrollTop > 50)
  {
    document.getElementById('navBar').className ="test";
  }
  else
  {
    document.getElementById('navBar').className="navBar";
  }
}
