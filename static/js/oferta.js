const URLactual = window.location.pathname;

const banner = document.createElement('img');
banner.src = 'https://iili.io/hw5YP4.png';

const parent = document.querySelector('.ui-search-results');

if(URLactual == '/deporte_DisplayType_G') {
    if(parent !== null) {
        parent.insertBefore(banner, parent.firstChild);
    }

    throw new Error("Error controlado");
}   