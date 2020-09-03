import React,{useState} from 'react'
import SidebarDropDown from './slidebarItemDropdown'
export default function SidebarItem(props) {
    const [openDropdown, setopenDropdown] = useState(false);
    function onOpenDropDown(){
        setopenDropdown(!openDropdown);
    }
    return (
             <li className="sidebar__item" onClick={onOpenDropDown}>
                        <div className="sidebar__item__main">
                                  <div className="sidebar__item__wrap">
                                       <span className="sidebar__square" style={openDropdown ? {background:'#ff084e'} : {}}></span>
                                       <span className="sidebar__name">{props.item.title}</span>

                                  </div>
                                   <i class="fas fa-angle-down"></i>
                                </div> 
                         <SidebarDropDown list={props.item.item} openDropdown={openDropdown}/>
             </li>
        )
}
