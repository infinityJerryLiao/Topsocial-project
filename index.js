import './index.css';
import { navbar, navbar_container, main, main_container, main_left, sideBar } from './src/js/common';

console.log(sideBar);
// console.log(navbar, navbar_container);


const mainLeft = document.querySelector('main .container .main-left');
mainLeft.innerHTML = null;



// console.log(sd);

//ProfileBar
const profileBar = document.createElement('div');
profileBar.classList.add('profilebar');
mainLeft.appendChild(profileBar);

//photo
const profilePhoto = document.createElement('div');
profilePhoto.classList.add('profile-photo');
profileBar.appendChild(profilePhoto);

const img = document.createElement('img');
img.src = '/images/profile/profile_1.png';
img.alt = 'profile';
profilePhoto.appendChild(img);

//word
const profileWord = document.createElement('div');
profileWord.classList.add('profile-word');
profileBar.appendChild(profileWord);

const h2 = document.createElement('h2');
h2.textContent = 'Elden Lord';
profileWord.appendChild(h2);

const p = document.createElement('p');
p.textContent = '@EldenRing';
profileWord.appendChild(p);




//Create Post Button
const leftButton = document.createElement('div');
leftButton.classList.add('left-button');
mainLeft.appendChild(leftButton);

const label = document.createElement('label');
label.htmlFor = 'create-post';
label.classList.add('btn');
label.classList.add('btn-primary');
label.textContent = 'Create Post';
leftButton.appendChild(label);

