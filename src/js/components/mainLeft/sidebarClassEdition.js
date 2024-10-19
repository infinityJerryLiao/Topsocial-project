

export default class Sidebar {
  sidebarInfo = null
  dom = null

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo
    this.build()
  }


  build() {
    this.#createSidebar()
  }

  #createSidebar() {
    this.dom = document.createElement('div');
    this.dom.classList.add('sidebar');
    this.sidebarInfo.forEach(item => {
      const sidebarItem = this.#createBasicSidebarItem(item)
      this.dom.appendChild(sidebarItem)
    })
  }

  #createSidebarItem(item) {
    //sidebarItem
    const sidebarItem = this.#createBasicSidebarItem(item);
  
    //span+i
    const icon = this.#createIcon(item);
  
    //h2
    const title = this.#createTitle(item);
  
    //appendChild
    
  
    sidebarItem.appendChild(icon);
    sidebarItem.appendChild(title);
  
  
    return sidebarItem;
  };
  
  #createBasicSidebarItem(item) {
    const sidebarItem = document.createElement('a')
    sidebarItem.classList.add('menu-item')
    sidebarItem.classList.add(item.name)
  
    return sidebarItem
  };
  
  #createIcon(item) {
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
  
  #createTitle(item) {
    const h2 = document.createElement('h2');
    h2.textContent = item.name;
  
    return h2
  };
}
