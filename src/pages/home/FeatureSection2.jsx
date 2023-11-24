import React from "react"

const features = [
  {
    title: "Mission",
    description:
      "To provide the highest quality of education in a safe, secure and nurturing environment; to avail, our students develop into progressive thinkers and lifelong bearers of skills that will prepare them for the challenges of a dynamically transmuting world.",
  },


  {
    title: "Message of Director",
    description: "The door to knowledge about the creatures around us can be opened by education, which is the sole powerful tool that has the power to transform any society. A well-educated person cannot harm either the nation or society. Through their knowledge, commitment, and passion, they consistently demonstrate the right way to live. Education is the only asset that cannot be stolen, and those who possess it cannot lose that asset if they share it."

  },


  {
    title: "Vision",
    description:
      "To engender innovative, quality-driven global institutions which are reliable, affordable, replicable and ever-evolving models of excellence, empowered through people, systems and processes.",
  },
]

const FeatureSection2 = () => (
  <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen">
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
              GOALS
            </div>
            <h1 className="text-5xl font-bold dark:text-white">
              Our <span className="text-blue-500"> Goals </span>{" "}
            </h1>
            <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
              <div className="flex-1 h-2 bg-blue-200"></div>
              <div className="flex-1 h-2 bg-blue-400"></div>
              <div className="flex-1 h-2 bg-blue-600"></div>
            </div>
          </div>
          <p className="mb-16 text-base text-center text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque? Pariatur numquam, odio
            quod nobis ipsum ex cupiditate?aaaa
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        
        {
          features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} bgColor="bg-white" iconColor="text-blue-400"/>)
        }
        
      </div>
    </div>
  </section>
)

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
)

export default FeatureSection2
