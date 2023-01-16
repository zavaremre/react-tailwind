import React from "react";
import classNames from "classnames";
function Timeline({ index, timeline }) {
  return (
    <div
      key={index}
      className={classNames("flex w-full", {
        "flex-row-reverse ml-[6px]": timeline.left,
        "-ml-[6px]": !timeline.left,
      })}>
      <div className='w-1/2'></div>
      <section className='flex mt-4 w-1/2'>
        <div
          className={classNames("relative flex w-full", {
            "flex-row-reverse": timeline.left,
          })}>
          <aside className={classNames("relative flex items-start justify-start w-full", { "mr-8": timeline.left, "ml-8": !timeline.left })}>
            <div
              className={classNames("flex flex-col items-start w-full whitespace-nowrap", {
                "items-end": timeline.left,
                "opacity-60": !timeline.isActive,
              })}>
              <strong
                className={classNames("text-sm font-medium mb-1", {
                  "text-blue-600": timeline.isActive,
                })}>
                {timeline.title}
              </strong>
              <strong className='text-xs font-normal text-left mb-1  whitespace-nowrap'>{timeline.position}</strong>
              <small className='text-xs mb-1'>{timeline.type}</small>
              <small className='text-[10px]'>{timeline.time}</small>
            </div>
          </aside>

          <div
            className={classNames("absolute w-3 h-3 rounded-full mt-1 z-10 shrink-0 pointer-events-none", {
              "bg-blue-600": timeline.isActive,
              "bg-gray-300 dark:bg-slate-800": !timeline.isActive,
            })}>
            <span className={classNames("animate-ping absolute -left-1 -top-1 inline-flex h-5 w-5 rounded-full bg-blue-400  opacity-75", { hidden: !timeline.isActive })}></span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Timeline;
