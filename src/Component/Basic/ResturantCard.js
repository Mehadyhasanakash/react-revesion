import React from 'react';

const ResturantCard = ({menu}) => {
    
    return (
        <>
         <div className='card-container'>
               <div className='card'>
                   <div className='card-body'>
                       <span className='card-number card-circle subtle'>1</span>
                       <span className='card-author'> Breakfast</span>
                       
                       <h2 className='card-title'> Maggi</h2>

                       <span className='card-description subtle'>

                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus odit accusamus fugit eligendi animi aspernatur, consectetur omnis hic eveniet expedita nobis molestias delectus quia commodi? Perferendis quam velit nam dolores provident ipsa, accusantium, excepturi aliquam eius officia perspiciatis tempore.
                       </span>
                        <div className='card-read'>Read</div>
                   </div>
                   {/* <img src={image} alt="image" className='card-media' /> */}

                   <span className='card-tag'> oder now</span>

               </div>

           </div>
            
        </>
    );
};

export default ResturantCard;