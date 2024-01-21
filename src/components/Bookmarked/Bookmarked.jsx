import React from 'react';

const Bookmarked = ({ bookmark }) => {
     console.log(bookmark?.id);
     return (
          <div className='bg-white h-24 rounded-md text-center pt-3 m-auto'>
               <h1 className='font-bold text-2xl'>{bookmark?.title}</h1>
          </div>
     );
};

export default Bookmarked;