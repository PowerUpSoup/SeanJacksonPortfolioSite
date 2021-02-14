window.addEventListener('load', () => {
  const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
  const nav_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
  const navigation = document.querySelector('.nav.container');
  console.log(hamburger)
});

function hamburgerExpand() {
  const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
  hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
};

document.addEventListener('scroll', () => {
    const navigation = document.querySelector('.nav.container');
    let scroll_position = window.scrollY;
        if(scroll_position > 250) {
            navigation.style.backgroundColor = '#333';
        } else {
            navigation.style.backgroundColor = 'transparent';
        }
});

function mobileMenuCollapse() {
    const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
};

const links = document.querySelectorAll(".nav-list ul a"); 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}