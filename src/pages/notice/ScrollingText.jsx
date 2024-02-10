import React from 'react';

function ScrollingText() {
  return (
    <div className="py-2 overflow-hidden w-full">
      <div className="flex">
        <div className="text-xl text-blue-500 animate-marquee whitespace-nowrap">
          Your scrolling text goes here.Your scrolling text goes here. Your scrolling text goes here.
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
