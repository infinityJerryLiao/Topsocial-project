import { sidebar as sd } from "../../../../data/db.json";

const sideBar = document.createElement('div');
sideBar.classList.add('sidebar');

sd.forEach(item => {
  createSidebarItem(item)
});

//1.13
function createSidebarItem(item) {
  //sidebarItem
  const sidebarItem = createBasicSidebarItem(item);

  //span+i
  const icon = createIcon(item);

  //h2
  const title = createTitle(item);

  //appendChild
  

  sidebarItem.appendChild(icon);
  sidebarItem.appendChild(title);


  sideBar.appendChild(sidebarItem);
};

function createBasicSidebarItem(item) {
  const sidebarItem = document.createElement('a')
  sidebarItem.classList.add('menu-item')
  sidebarItem.classList.add(item.name)

  return sidebarItem
};

function createIcon(item) {
    //span
    const span = document.createElement('span');

    //i
    const i = document.createElement('i');
    item.icon_class_list.forEach(iconClass => {
      i.classList.add(iconClass);
    });

    span.appendChild(i);

    return span
};

function createTitle(item) {
  const h2 = document.createElement('h2');
  h2.textContent = item.name;

  return h2
};

export default sideBar;