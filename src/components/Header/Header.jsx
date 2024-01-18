import React from 'react';

const Header = () => {
     return (
          <nav className='flex justify-between h-20 rounded-md items-center bg-indigo-600'>
               <div className='ml-5'>
                    <h3 className='text-white font-semibold '>Knowledge Cafe</h3>
               </div>
               <div className='mr-5'>
                    <img className='h-12 w-12 object-cover rounded-full' src="khala-login-picture.jpg" alt="" />
               </div>
          </nav>
     );
};

export default Header;