import React from "react";

function Blog({index, blog}) {
  return (
    <article className="group">
      <div key={index} className="flex items-start gap-y-5 text-left">
        {/* <img src={require("./assets/images/" + blog.image)} className='mr-5 w-24 rounded dark:grayscale' alt='' /> */}
        <div className="flex flex-col items-center">
          <p className="block mb-3 text-center">{blog.content}</p>
          <strong className="opacity-70">{blog.author}</strong>
        </div>
      </div>
      <div className="group-last:hidden flex justify-center w-full my-5">
        <svg
          width="93"
          height="6"
          viewBox="0 0 93 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-slate-800"
            d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333334 0.333333 1.52724 0.333333 3ZM87.3333 2.99997C87.3333 4.47273 88.5272 5.66663 90 5.66663C91.4728 5.66663 92.6667 4.47272 92.6667 2.99996C92.6667 1.52721 91.4728 0.333298 90 0.333299C88.5272 0.333299 87.3333 1.52721 87.3333 2.99997ZM3 3.5L90 3.49997L90 2.49997L3 2.5L3 3.5Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </article>
  );
}
export default Blog;
