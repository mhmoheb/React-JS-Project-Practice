import React from 'react';
import { AppContext} from './context';
import {sublinks} from './data';

const Sidebar = () => {

  const { openSidebar} = useContext(AppContext);
  return (
    <div className='sidebar-wrapper'>
        <aside className='sidebar'>
            <button onClick={openSidebar} className='close-btn'> </button>
            <div className='sidebar-links'>
                <article>
                    <h4>products</h4>
                    <div className='sidebar-sublinks'>  
                        const {page, links, index} = sublinks;                    
                        {sublinks.links}
                    
                    </div>            
                    
                </article>

            </div>
        </aside>  
    </div>
  );
}

export default Sidebar;