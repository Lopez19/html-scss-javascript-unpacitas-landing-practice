/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

   // Validamos que la variable exista
   if (toggle && nav) {
      toggle.addEventListener("click", () => {
         // Se pone la clase show-menu del div con la clase nav__menu
         nav.classList.toggle("show-menu");
      });
   }
};
showMenu("nav-toggle", "nav-menu");

/*=============== QUITAR MENU MOBILES ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
   const navMenu = document.getElementById("nav-menu");
   // Cuando se hace click en los nav__link (a), removemos la clase show-menu
   navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 50,
         sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
      } else {
         document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
      }
   });
}
window.addEventListener("scroll", scrollActive);

/*=============== CAMBIAR BACKGROUND HEADER ===============*/
function scrollHeader() {
   const nav = document.getElementById("header");
   // Cuando el desplazamiento sea superior a 80vh (altura de la ventana), añada la clase scroll-header a la etiqueta de cabecera.
   if (this.scrollY >= 80) nav.classList.add("scroll-header");
   else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
   const scrollUp = document.getElementById("scroll-up");
   //Cuando el desplazamiento sea superior a 560vh (altura de la ventana), añada la clase show-scroll a la etiqueta a con la clase scroll-top.
   if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
   else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== MODO OSCURO ===============*/
