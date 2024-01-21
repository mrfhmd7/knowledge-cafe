import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
     const [blogs, setBlogs] = useState([]);
     // console.log(data);

     const [bookmark, setBookmark] = useState([]);
     // console.log(bookmark);

     const [blogTime, setBlogTime] = useState([]);

     // console.log(blogTime);

     
     const timeReducer = (previous, current) => (previous + current.time);
     const totalTime = blogTime.reduce(timeReducer, 0);
     // console.log(totalTime);

     const handleShowTime = (blog) => {

          let showTime = [];

          const exists = blogTime?.find(t => t.id === blog.id);
          if (!exists) {
               showTime = [...blogTime, blog]
          }
          else {
               const remaining = blogTime?.filter(t => t.id === blog.id);
               showTime = [...remaining, exists];
          }

          setBlogTime(showTime);
     }


     const handleShowBookmark = (blog,id) => {

          let showTitle = [];

          const exists = bookmark?.find(t => t.id === blog.id);
          if (!exists) {
               showTitle = [...bookmark, blog]
          }
          else {
               const remaining = bookmark?.filter(t => t.id === blog.id);
               showTitle = [...remaining, exists];
          }
          // console.log(id);

          setBookmark(showTitle);

          const alreadyAdded = bookmark?.find(a => a.id === id)
          // console.log(alreadyAdded);
          if (alreadyAdded) {
               toast("❌ Already bookmarked");
          }
     }


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
                              handleShowBookmark={handleShowBookmark}
                              handleShowTime={handleShowTime}
                              key={blog.id}
                         ></MainContent>)
                    }
               </div>
               <div className='col-span-4 ml-8'>
                    <Sidebar
                         bookmark={bookmark}
                         totalTime={totalTime}
                    ></Sidebar>
               </div>
          </div>
     );
};

export default Body;