import React from 'react';

const ResturantCard = ({menu}) => {
    
    return (
        <>
         <div className='card-container'>
               <div className='card'>
                   <div className='card-body'>
                       <span className='card-number card-circle subtle'>{menu.id}</span>
                       <span className='card-author'> {menu.name}</span>
                       
                       <h2 className='card-title'> {menu.name}</h2>

                       <span className='card-description subtle'>
                            {menu.description}
                       </span>
                        <div className='card-read'>Read</div>
                   </div>
                   <img src={menu.image} alt="images" className='card-media' />

                   <span className='card-tag'> oder now</span>

               </div>

           </div>
            
        </>
    );
};

export default ResturantCard;