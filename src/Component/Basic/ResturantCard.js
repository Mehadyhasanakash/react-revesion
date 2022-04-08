import React from 'react';

const ResturantCard = ({menu}) => {

    const {name, id, description, image} = menu;
    
    return (
        <>
         <div className='card-container'>
               <div className='card'>
                   <div className='card-body'>
                       <span className='card-number card-circle subtle'>{id}</span>
                       <span className='card-author'> {name}</span>
                       
                       <h2 className='card-title'> {name}</h2>

                       <span className='card-description subtle'>
                            {description}
                       </span>
                        <div className='card-read'>Read</div>
                   </div>
                   <img src={image} alt="images" className='card-media' />

                   <span className='card-tag'> oder now</span>

               </div>

           </div>
            
        </>
    );
};

export default ResturantCard;