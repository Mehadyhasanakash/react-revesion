import React from 'react';

const Nav = ({item , filterItem}) => {
    return (
        <>
        
                <button onClick={()=>filterItem(item)}  className='btn-group__item'>{item}</button>
                
            
        </>
    );
};

export default Nav;