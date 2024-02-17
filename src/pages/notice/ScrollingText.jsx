import React from 'react';

function ScrollingText() {
  return (
    <div className="py-2 overflow-hidden w-full">
      <div className="flex">
        <div className="text-xl text-blue-500 animate-marquee whitespace-nowrap">
          <p><span className='p-1 text-sm bg-blue-500 rounded text-white'>New</span> Assignment submission of class five</p>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
