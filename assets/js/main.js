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
const themeButton = document.getElementById("tema-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-toggle-on";

// Tema seleccionado previamente (si el usuario lo ha seleccionado)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () =>
   document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
   themeButton.classList.contains(iconTheme) ? "fa-toggle-off" : "fa-toggle-on";

// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
   // Si se cumple la validación, preguntamos cuál era el problema para saber si activamos o desactivamos la oscuridad
   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
   );
   themeButton.classList[selectedIcon === "fa-toggle-off" ? "add" : "remove"](
      iconTheme
   );
}

// Activar / desactivar el tema manualmente con el botón
themeButton.addEventListener("click", () => {
   // Añadir o quitar el tema oscuro / icono
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   // Guardamos el tema y el icono actual que el usuario eligió
   localStorage.setItem("selected-theme", getCurrentTheme());
   localStorage.setItem("selected-icon", getCurrentIcon());
});
