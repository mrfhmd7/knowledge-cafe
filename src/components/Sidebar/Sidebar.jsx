import React from 'react';
import Bookmarked from '../Bookmarked/Bookmarked';

const Sidebar = ({ bookmark }) => {
     return (
          <>
               <div className='item-center border-solid border-2 border-blue-400 bg-pink-100 rounded-lg h-16'>
                    <h3 className='text-center mt-4 text-blue-700 font-semibold text-2xl'>Spent time on read:</h3>
               </div>
               <div className='mt-8 pl-7 bg-zinc-200 rounded-lg h-auto'>
                    <h3 className='font-bold text-2xl pt-3'>Bookmarked Blogs: </h3>
                    <div className=' pr-7 mt-5 pb-5'>
                         <Bookmarked
                              bookmark={bookmark}
                         ></Bookmarked>
                    </div>
               </div>
          </>
     );
};

export default Sidebar;