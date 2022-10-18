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

/*=============== CAMBIAR BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== MODO OSCURO ===============*/
