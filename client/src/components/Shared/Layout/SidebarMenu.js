import React from "react";
import { userMenus } from "./Menus/UserMenu";
import {useLocation,Link} from 'react-router-dom'
import '../../../styles/layout.css'

const SidebarMenu = () => {
    const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <div className="menu">
            {userMenus.map((menu)=>{
                const isActive = location.pathname === menu.path

                return(
                    <div className={`menu-item ${isActive && 'active'}`} key={menu.name} > 
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name} </Link>
                    </div>
                )
            })}
           
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
