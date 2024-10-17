import './index.css';
import { sidebar as sd } from "./data/db.json";
//import { sidebar } from "./data/db.json";

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


//SideBar
const sideBar = document.createElement('div');
sideBar.classList.add('sidebar');
mainLeft.appendChild(sideBar);

sd.forEach(item => {
  const sidebarItem = document.createElement('a')
  sidebarItem.classList.add('menu-item');
  const span = document.createElement('span');
  const i = document.createElement('i');
  item.icon_class_list.forEach(iconClass => {
    i.classList.add(iconClass);
  });
  sidebarItem.classList.add(item.name)
  const h2 = document.createElement('h2');
  h2.textContent = item.name;

  span.appendChild(i);

  sidebarItem.appendChild(span);
  sidebarItem.appendChild(h2);


  sideBar.appendChild(sidebarItem);
});

const homeDom = document.querySelector('.Home');
homeDom.addEventListener("click", () => {
  homeDom.classList.toggle('btn');
  homeDom.classList.toggle('btn-primary');
})


//Create Post Button
const leftButton = document.createElement('div');
leftButton.classList.add('left-button');
mainLeft.appendChild(leftButton);

const label = document.createElement('label');
// label.htmlFor = 'create-post';
label.htmlFor = 'create-post';
label.classList.add('btn');
label.classList.add('btn-primary');
label.textContent = 'Create Post';
leftButton.appendChild(label);

