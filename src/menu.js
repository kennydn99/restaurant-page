const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const menuList = document.createElement('ul');
    const menuItem = document.createElement('li');
    menuItem.textContent = "Pepper Beef";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Beef Cutlet";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Dosa";
    menuList.appendChild(menuItem);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;