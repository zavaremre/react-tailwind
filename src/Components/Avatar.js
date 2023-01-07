import React from "react";
function Avatar({ data }) {
  return (
    <div className='relative flex justify-center items-center  overflow-hidden after:absolute after:bottom-0 after:z-[-1] after:content-[""] after:rounded-full after:bg-yellow-200 after:dark:bg-slate-800 after:w-40 after:h-40'>
      <img
        src={require("../assets/images/profile.png")}
        alt={data.fullName}
        className="w-40 h-40 z-[2] rounded-b-full dark:grayscale"
      />
    </div>
  );
}
export default Avatar;
