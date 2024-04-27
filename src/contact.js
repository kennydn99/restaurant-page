const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const chefContact  = document.createElement('div');
    chefContact.classList.add('contact');
    const headingContact = document.createElement('h3');
    headingContact.textContent = 'Pinky';
    const role = document.createElement('p');
    role.textContent = 'Chef';
    const phone = document.createElement('p');
    phone.textContent = '555-555-5554';
    const email = document.createElement('p');
    email.textContent = 'totallyRealEmail@notFake.com';
    chefContact.appendChild(headingContact);
    chefContact.appendChild(role);
    chefContact.appendChild(phone);
    chefContact.appendChild(email);
    pageContent.appendChild(chefContact);

    const ManagerContact  = document.createElement('div');
    ManagerContact.classList.add('contact');
    const headingContact2 = document.createElement('h3');
    headingContact2.textContent = 'Dinky';
    const role2 = document.createElement('p');
    role2.textContent = 'Manager';
    const phone2 = document.createElement('p');
    phone2.textContent = '555-555-5555';
    const email2 = document.createElement('p');
    email2.textContent = 'definatelyRealEmail@notFake.com';
    ManagerContact.appendChild(headingContact2);
    ManagerContact.appendChild(role2);
    ManagerContact.appendChild(phone2);
    ManagerContact.appendChild(email2);
    pageContent.appendChild(ManagerContact);

    const WaiterContact  = document.createElement('div');
    WaiterContact.classList.add('contact');
    const headingContact3 = document.createElement('h3');
    headingContact3.textContent = 'Cookie';
    const role3 = document.createElement('p');
    role3.textContent = 'Waiter';
    const phone3 = document.createElement('p');
    phone3.textContent = '555-555-5556';
    const email3 = document.createElement('p');
    email3.textContent = 'perfectlyRealEmail@notFake.com';
    WaiterContact.appendChild(headingContact3);
    WaiterContact.appendChild(role3);
    WaiterContact.appendChild(phone3);
    WaiterContact.appendChild(email3);
    pageContent.appendChild(WaiterContact);

    content.appendChild(pageContent);
};

export default createContactPage;