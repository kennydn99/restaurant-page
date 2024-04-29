import createHomePage from "./home.js";
import createContactPage from "./contact.js";
import createMenuPage from "./menu.js";


const makeTabsWork = () => {
    const homeButton = document.querySelector('.nav-home');
    const menuButton = document.querySelector('.nav-menu');
    const contactButton = document.querySelector('.nav-contact');

    homeButton.addEventListener('click', () => {
        clearContent();
        createHomePage();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent);
    }
};

export default makeTabsWork;