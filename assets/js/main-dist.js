const showMenu=(n,e)=>{const t=document.getElementById(n),o=document.getElementById(e);t&&o&&t.addEventListener("click",(()=>{o.classList.toggle("show-menu")}))};showMenu("nav-toggle","nav-menu");const navLink=document.querySelectorAll(".nav__link");function linkAction(){document.getElementById("nav-menu").classList.remove("show-menu")}navLink.forEach((n=>n.addEventListener("click",linkAction)));