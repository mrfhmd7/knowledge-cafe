import React from 'react';

const Bookmarked = ({ bookmark }) => {
     // console.log(bookmark?.id);
     return (
          <div className='bg-white rounded-md p-6 mt-4 text-center'>
               <h1 className='font-bold text-2xl'>{bookmark?.title}</h1>
          </div>
     );
};

export default Bookmarked;