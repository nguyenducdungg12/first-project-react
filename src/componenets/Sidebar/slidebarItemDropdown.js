import React from 'react'

export default function SidebarItem(props) {
    var item = props.list.map((item,index)=><li key={index}className="sidebar__dropdown__item">
                            <span className="sidebar__square"></span>
                            <span className="sidebar__name">{item}</span>
                        </li>)
    return (
                <ul className="sidebar__dropdown" style={props.openDropdown ? {display:'block',animation:"sideBarOpen .5s ease-out forwards"} : {animation:"sideBarClose .5s ease-out forwards"}}>
                    {item}
                </ul>
    )
}
