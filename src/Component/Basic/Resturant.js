import React, { useState } from 'react';
import "./style.css"
import Menu from './MenuApi'
import ResturantCard from './ResturantCard';
import Nav from '../Nav/Nav';


const uniqueList = [...new Set(Menu.map((curElem => {
    return curElem.category
}))), "all",]


const Resturant = () => {

    const [menuDatas, setMenuData] = useState(Menu)
    const [category, setcategory] = useState(uniqueList)

    const filterItem =(category)=>{

        if(category==="all"){
            setMenuData(Menu)
        return
        }
        const upDateValue = Menu.filter((curElem) =>{
            return curElem.category === category
        } )

        setMenuData(upDateValue);
    }



   
    return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
            {
                category.map(item => <Nav
                
                    item ={item}
                    filterItem={filterItem}
                
                ></Nav>)
            }
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