import createHomePage from "./home.js";
import createContactPage from "./contact.js";
import createMenuPage from "./menu.js";


const makeTabsWork = () => {
    const homeButton = document.querySelector('.nav-home');
    const menuButton = document.querySelector('.nav-menu');
    const contactButton = document.querySelector('.nav-contact');

    homeButton.addEventListener('click', () => {
        alert('home clicked');
        createHomePage();
    });

    menuButton.addEventListener('click', () => {
        alert('menu clicked');
        createMenuPage();
    });

    contactButton.addEventListener('click', () => {
        alert('contact clicked');
        createContactPage();
    });
}

export default makeTabsWork;