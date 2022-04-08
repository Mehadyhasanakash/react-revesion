import React, { useState } from 'react';
import "./style.css"
import Menu from './MenuApi'
import ResturantCard from './ResturantCard';

const Resturant = () => {

    const [menuDatas, setMenuData] = useState(Menu)
    const filterItem =(category)=>{
        const upDateValue = Menu.filter((curElem) =>{
            return curElem.category === category
        } )

        setMenuData(upDateValue);
    }



   
    return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button onClick={()=>filterItem("breakfast")}  className='btn-group__item'>Breakfast</button>
                <button onClick={()=>filterItem("lunch")} className='btn-group__item'>Lunch</button>
                <button onClick={()=>filterItem("evening")} className='btn-group__item'>Evening</button>
                <button onClick={()=>filterItem("dinner")} className='btn-group__item'>Dinner</button>
                <button onClick={()=>setMenuData(Menu)} className='btn-group__item'>All</button>

            </div>

        </nav>
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