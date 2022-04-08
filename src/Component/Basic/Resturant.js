import React, { useState } from 'react';
import "./style.css"
import Menu from './MenuApi'
import ResturantCard from './ResturantCard';

const Resturant = () => {

    const [menuDatas, setMenuData] = useState(Menu)
    return (
        <>
        <ResturantCard menu={menuDatas}></ResturantCard> 
        </>
    );
};

export default Resturant;