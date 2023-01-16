import React from "react";

function Blog({ index, blog }) {
  return (
    <article className='group snap-center w-full shrink-0 sm:shrink-1'>
      <div key={index} className='flex items-start gap-y-5 text-left'>
        {/* <img src={require("./assets/images/" + blog.image)} className='mr-5 w-24 rounded dark:grayscale' alt='' /> */}
        <div className='flex flex-col items-center'>
          <p className='block mb-3 text-center'>{blog.content}</p>
          <div className='flex justify-center items-center'>
            <strong className='opacity-90'>{blog.author}</strong>
            {/* <a href={`https://translate.google.com.vn/translate_tts?ie=UTF-8&q=${blog.content}&tl=tr&client=tw-ob`} target='_blank' rel='noreferrer' className='ml-2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-volume-up' viewBox='0 0 16 16'>
                <path d='M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z' />
                <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z' />
                <path d='M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z' />
              </svg>
            </a> */}
          </div>
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
