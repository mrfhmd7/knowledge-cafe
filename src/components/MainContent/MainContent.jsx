import React from 'react';

const MainContent = ({ blog }) => {
     
     const { img, profile_url, date, time, title, name } = blog;
     // console.log(img);

     return (
          <>
               <div className='p-4 border-solid border-2 border-indigo-400 mb-8 rounded-lg'>
                    <img className='h-96 w-11/12 m-auto rounded-xl' src={img} alt="" />
                    <div>
                         <div>
                              <div>
                                   <img className='h-14 w-14 object-cover rounded-full' src={profile_url} alt="" />
                              </div>
                              <h3>Name: {name}</h3>
                              <p>Date:{date}</p>
                         </div>
                         <p>Time: {time} min read
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                         </svg>
                         </p>
                    </div>
                    <h1>Title:{title}</h1>
               </div>
          </>
     );
};

export default MainContent;