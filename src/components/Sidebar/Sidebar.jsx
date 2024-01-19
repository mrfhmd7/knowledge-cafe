import React from 'react';

const Sidebar = () => {
     return (
          <>
               <div className='item-center border-solid border-2 border-blue-400 bg-pink-100 rounded-lg h-16'>
                    <h3 className='text-center mt-4 text-blue-700 font-semibold text-xl'>Spent time on read :</h3>
               </div>
               <div>
                    <h3>Bookmarked Blog:</h3>
               </div>
          </>
     );
};

export default Sidebar;