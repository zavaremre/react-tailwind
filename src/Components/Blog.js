import React from "react";

function Blog({ index, blog }) {
  return (
    <article className='group'>
      <div key={index} className='flex items-start gap-y-5 text-left'>
        {/* <img src={require("./assets/images/" + blog.image)} className='mr-5 w-24 rounded dark:grayscale' alt='' /> */}
        <div className='flex flex-col items-center'>
          <p className='block mb-3 text-center'>{blog.content}</p>
          <strong className='opacity-90'>{blog.author}</strong>
        </div>
      </div>
      <div className='group-last:hidden flex justify-center w-full my-5'>
        <div className='flex gap-x-3'>
          <div className='w-1.5 h-1.5 rounded-full shrink-0 pointer-events-none bg-gray-300 dark:bg-slate-800'></div>
          <div className='w-5 h-1.5 rounded-full shrink-0 pointer-events-none bg-gray-300 dark:bg-slate-800'></div>
          <div className='w-1.5 h-1.5 rounded-full shrink-0 pointer-events-none bg-gray-300 dark:bg-slate-800'></div>
        </div>
      </div>
    </article>
  );
}
export default Blog;
