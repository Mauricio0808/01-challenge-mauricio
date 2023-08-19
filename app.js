import  { products } from './data/products';

for (let index = 0; index < length; index++) {
 const product = products[index].title;
 console.log(product);
}


const emailMenu = document.querySelector('.navbar-email');
const menuEscritotio = document.querySelector('.menu-escritorio');



emailMenu.addEventListener('click',toggleMenuEscrtitorio);

function toggleMenuEscrtitorio() {
    menuEscritotio.classList.toggle('inactive');
}
