import { food } from './food.js';

const foodList = document.getElementById('food-list');

for (let item of food) {
    const listItem = document.createElement('li');
    listItem.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = item.img;
    listItem.appendChild(foodImg);

    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = item.name;
    listItem.appendChild(foodName);

    foodList.appendChild(listItem);
}