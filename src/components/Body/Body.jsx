import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Body = () => {
     const [blogs, setBlogs] = useState([]);
     // console.log(data);

     useEffect(() => {
          fetch('fakedata.json')
               .then(res => res.json())
          .then(data => setBlogs(data))
     }, []);
     

     return (
          <div className='grid grid-cols-10 mt-8 font-body'>
               <div className='col-span-6'>
                    {
                         blogs.map(blog => <MainContent
                              blog={blog}
                              key={blog.id}
                         ></MainContent>)
                    }
               </div>
               <div className='col-span-4 ml-8'>
                    <Sidebar></Sidebar>
               </div>
          </div>
     );
};

export default Body;