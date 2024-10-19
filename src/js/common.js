import { findDom } from "./utils";
//import sideBar from "./components/mainLeft/sidebar";
import Sidebar from "./components/mainLeft/sidebarClassEdition";
import { sidebar as sd } from "../../data/db.json";


/* Navbar */
export const navbar =
  findDom('nav')
export const navbar_container =
  findDom('.container', navbar)
export const navbar_container_logo =
  findDom('.logo', navbar_container)
export const navbar_container_searchBar =
  findDom('.search-bar', navbar_container)
export const navbar_create =
  findDom('.create', navbar_container)

/* Main */
export const main = 
  findDom('main')
export const main_container = 
  findDom('.container', main)

/* Main Left */
export const main_left = 
  findDom('.main-left', main_container)
// export const sidebar = sideBar;
export const sideBar = new Sidebar(sd)
main_left.appendChild(sideBar.dom)
/* Main Middle */

/* Main Right */





// export与import的关系。
// export xx => import { xx } from ...

// export xx
// export yy => import { xx, yy } from ...
// => import * as zz from ...

// default 是唯一的，所以如果后面还有命名，就会覆盖掉前面的。
// export defalut aa => import AA from ... 