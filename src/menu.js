import PepperBeefImage from './Beef-Pepper-Fry.jpg';
import BeefCutletImage from './beef-cutlet.jpg';
import DosaImage from './dosa.jpg';

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const menuList = document.createElement('ul');
    const menuItem = document.createElement('li');
    menuItem.textContent = "Beef Pepper Fry";
    const itemImage = document.createElement('img');
    itemImage.classList.add('menu-img');
    itemImage.src = PepperBeefImage;
    menuItem.appendChild(itemImage);

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Beef Cutlet";
    const itemImage2 = document.createElement('img');
    itemImage2.classList.add('menu-img');
    itemImage2.src = BeefCutletImage;
    menuItem2.appendChild(itemImage2);

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Masala Dosa";
    const itemImage3 = document.createElement('img');
    itemImage3.classList.add('menu-img');
    itemImage3.src = DosaImage;
    menuItem3.appendChild(itemImage3);

    menuList.appendChild(menuItem);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;