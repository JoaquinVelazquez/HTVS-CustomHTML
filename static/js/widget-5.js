const URLactual_menu = window.location.pathname;

if (URLactual_menu !== "/") {
    //Menu Desktop
    const btnSubmenuSinteticos = document.querySelector(".sinteticos");
    const submenuSinteticos = document.querySelector(".submenuSinteticos");

    btnSubmenuSinteticos.addEventListener("click", function () {
        btnSubmenuSinteticos.classList.toggle("rotacion");
        submenuSinteticos.classList.toggle("visible");
    });

    const btnSubmenuTelas = document.querySelector(".telas");
    const submenuTelas = document.querySelector(".submenuTelas");

    btnSubmenuTelas.addEventListener("click", function () {
        btnSubmenuTelas.classList.toggle("rotacion");
        submenuTelas.classList.toggle("visible");
    });

    const btnSubmenuForrerias = document.querySelector(".forrerias");
    const submenuForrerias = document.querySelector(".submenuForrerias");

    btnSubmenuForrerias.addEventListener("click", function () {
        btnSubmenuForrerias.classList.toggle("rotacion");
        submenuForrerias.classList.toggle("visible");
    });

    const btnSubmenuPolitica = document.querySelector(".politica");
    const submenuPolitica = document.querySelector(".submenuPolitica");

    btnSubmenuPolitica.addEventListener("click", function () {
        btnSubmenuPolitica.classList.toggle("rotacion");
        submenuPolitica.classList.toggle("visible");
    });
} else {
    //Menu Desktop
    const btnSubmenuSinteticos = document.querySelector(".sinteticos");
    const submenuSinteticos = document.querySelector(".submenuSinteticos");

    btnSubmenuSinteticos.addEventListener("click", function () {
        btnSubmenuSinteticos.classList.toggle("rotacion");
        submenuSinteticos.classList.toggle("visible");
    });

    const btnSubmenuTelas = document.querySelector(".telas");
    const submenuTelas = document.querySelector(".submenuTelas");

    btnSubmenuTelas.addEventListener("click", function () {
        btnSubmenuTelas.classList.toggle("rotacion");
        submenuTelas.classList.toggle("visible");
    });

    const btnSubmenuForrerias = document.querySelector(".forrerias");
    const submenuForrerias = document.querySelector(".submenuForrerias");

    btnSubmenuForrerias.addEventListener("click", function () {
        btnSubmenuForrerias.classList.toggle("rotacion");
        submenuForrerias.classList.toggle("visible");
    });

    const btnSubmenuPolitica = document.querySelector(".politica");
    const submenuPolitica = document.querySelector(".submenuPolitica");

    btnSubmenuPolitica.addEventListener("click", function () {
        btnSubmenuPolitica.classList.toggle("rotacion");
        submenuPolitica.classList.toggle("visible");
    });
}
