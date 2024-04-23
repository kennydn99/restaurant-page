import RestaurantImage from './restaurant.jpg';

const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create & append image
    const image = document.createElement('img');
    image.src = RestaurantImage;
    pageContent.appendChild(image);

    //Create & append headline
    const headline = document.createElement('h1');
    headline.textContent = "FlavorFusion Bistro";
    pageContent.appendChild(headline);
    
    //Create & append description
    const description = document.createElement('p');
    description.textContent = `Welcome to FlavorFusion Bistro, where culinary creativity meets exquisite taste! Our bistro is a haven for food enthusiasts seeking a delightful journey through a symphony of flavors from around the world. Nestled in the heart of Los Angelos, we pride ourselves on blending diverse culinary traditions with a touch of innovation to create memorable dining experiences.
    At FlavorFusion, every dish tells a story, carefully crafted by our passionate chefs who draw inspiration from global cuisines and local ingredients. From savory starters to mouthwatering mains and decadent desserts, our menu is a celebration of taste and texture, offering something to tantalize every palate.
    Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, our warm and inviting ambiance sets the perfect stage for culinary exploration and gastronomic delight. Immerse yourself in a world of flavors at FlavorFusion Bistro, where every bite is an adventure. Come, savor the experience with us.`;
    pageContent.appendChild(description);

    content.appendChild(pageContent);
}

export default createHomePage;