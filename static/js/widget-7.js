const URLactual = window.location.pathname;

const categorias = document.querySelectorAll(".link-nav");
const MenuDesplegable = document.querySelectorAll(".menu-desplegable");
const NavBar = document.querySelector(".contenedor-nav");

categorias[0].addEventListener("mouseover", function () {
    MenuDesplegable[0].classList.remove("invisible")
    MenuDesplegable[1].classList.add("invisible")
    MenuDesplegable[2].classList.add("invisible")
    MenuDesplegable[3].classList.add("invisible")

});

categorias[1].addEventListener("mouseover", function () {
    MenuDesplegable[1].classList.remove("invisible")
    MenuDesplegable[0].classList.add("invisible")
    MenuDesplegable[2].classList.add("invisible")
    MenuDesplegable[3].classList.add("invisible")
});

categorias[2].addEventListener("mouseover", function () {
    MenuDesplegable[2].classList.remove("invisible")
    MenuDesplegable[0].classList.add("invisible")
    MenuDesplegable[1].classList.add("invisible")
    MenuDesplegable[3].classList.add("invisible")
});

categorias[6].addEventListener("mouseover", function () {
    MenuDesplegable[3].classList.remove("invisible")
    MenuDesplegable[0].classList.add("invisible")
    MenuDesplegable[1].classList.add("invisible")
    MenuDesplegable[2].classList.add("invisible")
});

NavBar.addEventListener("mouseleave", function () {
    MenuDesplegable[0].classList.add("invisible")
});

NavBar.addEventListener("mouseleave", function () {
    MenuDesplegable[1].classList.add("invisible")
});

NavBar.addEventListener("mouseleave", function () {
    MenuDesplegable[2].classList.add("invisible")
});

NavBar.addEventListener("mouseleave", function () {
    MenuDesplegable[3].classList.add("invisible")
});

if(URLactual == "/") {
    const fotos_footer = document.querySelector(".contenedor-fotos");
    fotos_footer.classList.remove("no-visible");

    const newsletter = document.querySelector(".contenedor-newsletter-video");
    newsletter.classList.remove("no-visible");

    const banner = document.querySelector(".contenedor-banner");
    banner.classList.remove("no-visible");
}

if (URLactual == "/politica-devolucion") {

        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");
        let contendor_devolucion = document.createElement("div");
        let titulo_devolucion = document.createElement("h1");
        let contenido_devolucion = document.createElement("div");
        let texto_devolucion = document.createElement("div");
        let texto_devolucion_p = document.createElement("p");
        let imagen_devolucion = document.createElement("div");
        let imagen_devolucion_img = document.createElement("img");

        titulo_devolucion.textContent = "Politicas de devolucion";
        texto_devolucion_p.innerHTML = 'Si no estás conforme con nuestro producto, puedes realizar un cambio del mismo. Para eso ponte en contacto a <a href="mailto:info@htvs.com.ar">info@htvs.com.ar</a> y acordaremos la devolución. Podrás cambiar el producto por otro del mismo valor, que también será enviado a tu domicilio. Deberás hacerte cargo solamente del costo de envío del producto a devolver y del nuevo producto a entregar. Para que podamos aceptar la devolución del producto, <strong>el mismo debe estar completo y tal cual lo despachamos y ser devuelto en la misma caja que te fue entregado. Las devoluciones sólo pueden ser realizadas durante los 15 días siguientes a la compra.</strong>';
        imagen_devolucion.innerHTML = '<img src="https://iili.io/73AIRe.jpg" alt="devolucion.jpg" class="imagen-devolucion">'

        main.appendChild(contendor_devolucion);
        contendor_devolucion.appendChild(titulo_devolucion)
        contendor_devolucion.appendChild(contenido_devolucion)
        contenido_devolucion.appendChild(texto_devolucion)
        texto_devolucion.appendChild(texto_devolucion_p)
        contenido_devolucion.appendChild(imagen_devolucion)
        imagen_devolucion.appendChild(imagen_devolucion_img)

        contendor_devolucion.classList.add("contenedor-devolucion")
        contenido_devolucion.classList.add("contenido-devolucion")
        throw new Error("Error controlado");
}



console.log(7)