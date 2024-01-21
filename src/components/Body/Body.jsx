import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Body = () => {
     const [blogs, setBlogs] = useState([]);
     // console.log(data);

     const [bookmark, setBookmark] = useState([]);

     // console.log(bookmark);

     const handleShowTime = (blog) => {
          // console.log(blog);

          let showTitle = [];

          const exists = bookmark?.find(b => b.id === blog.id);
          // console.log(exists);
          if (!exists) {
               showTitle = [...bookmark, blog];
          }
          else {
               const remaining = bookmark?.filter(b => b.id === blog.id)
               showTitle = [...remaining, exists];
          }
          setBookmark(showTitle);
     };

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
                              handleShowTime={handleShowTime}
                              key={blog.id}
                         ></MainContent>)
                    }
               </div>
               <div className='col-span-4 ml-8'>
                    <Sidebar
                         bookmark={bookmark}
                    ></Sidebar>
               </div>
          </div>
     );
};

export default Body;