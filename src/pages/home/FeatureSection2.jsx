import React from 'react';

const FeatureSection = () => (
  <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen">
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
              FEATURES
            </div>
            <h1 className="text-5xl font-bold dark:text-white">
              Our <span className="text-blue-500"> Features </span>{' '}
            </h1>
            <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
              <div className="flex-1 h-2 bg-blue-200"></div>
              <div className="flex-1 h-2 bg-blue-400"></div>
              <div className="flex-1 h-2 bg-blue-600"></div>
            </div>
          </div>
          <p className="mb-16 text-base text-center text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
            Pariatur numquam, odio quod nobis ipsum ex cupiditate?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Self Fixing Cogs"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique, iure minus sed fugit obcaecati minima quam reiciendis dicta!"
          bgColor="bg-white"
          iconColor="text-blue-400"
        />
        <FeatureCard
          title="Automatic Power Shields"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique, iure minus sed fugit obcaecati minima quam reiciendis dicta!"
          bgColor="bg-white"
          iconColor="text-white"
        />
        <FeatureCard
          title="Auto Mail Correction"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique, iure minus sed fugit obcaecati minima quam reiciendis dicta!"
          bgColor="bg-white"
          iconColor="text-blue-400"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description, bgColor, iconColor }) => (
  <div className={`w-full p-8 mb-5 text-center transition-all rounded shadow hover:shadow-lg ${bgColor}`}>
    <div className="inline-block p-4 mb-6 -mt-16 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className={iconColor}
        viewBox="0 0 16 16"
      >
        {/* Replace with the actual path data for your SVG icon */}
      </svg>
    </div>
    <h3 className="mb-4 text-2xl font-semibold dark:text-white">{title}</h3>
    <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

export default FeatureSection;
