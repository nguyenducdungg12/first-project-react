import React from 'react'
import SidebarItem from './sidebarItem'
function Sidebar(props) {
    var list = [{
                title:'woman man',
                item:['123','456','789']
                },
                {
                    title:'woman man',
                    item:['123','456','789']
                },
                {
                    title:'woman man',
                    item:['123','456','789']
                },
            ]
        var shopwItem = list.map((item,index)=><SidebarItem item={item} key={index}/>)   
    return (
        <div className="modal__sidebar">
            <div className='sidebar'>
                <div className="sidebar__icon"onClick={props.onCloseSideBar}>
                   <i class="fas fa-times"></i>
                </div>
            <h4 className="sidebar__title">Categories</h4>
            <ul className="sidebar__list">
                {shopwItem}
            </ul>
        </div>
        </div>
    )
}

export default Sidebar;
