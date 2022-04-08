import React, { useState } from 'react';
import "./style.css"
import Menu from './MenuApi'
import ResturantCard from './ResturantCard';

const Resturant = () => {

    const [menuDatas, setMenuData] = useState(Menu)
    return (
        <>
              <div className='main-card--cointainer'>
              {
                    menuDatas.map(menu=> <ResturantCard
                    key={menu.id}
                    menu={menu}
                    
                    ></ResturantCard>)
                }
              </div>
        </>
    );
};

export default Resturant;