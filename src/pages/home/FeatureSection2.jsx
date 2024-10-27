import React from "react"

const features = [
  {
    title: "Mission",
    description:
      "To provide the highest quality of education in a safe, secure and nurturing environment; to avail, our students develop into progressive thinkers and lifelong bearers of skills that will prepare them for the challenges of a dynamically transmuting world.",
  },

  {
    title: "Vision",
    description:
      "To engender innovative, quality-driven global institutions which are reliable, affordable, replicable and ever-evolving models of excellence, empowered through people, systems and processes.",
  },
]

const FeatureSection2 = () => (
  <section className="flex md:px-32 items-center justify-center bg-gray-100 dark:bg-gray-800 ">
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
              DEF-CPS
            </div>
            <h1 className="text-3xl font-bold dark:text-white">
              Our<span className="text-blue-gray-500"> RULES AND REGULATIONS </span>{" "}
            </h1>
            <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
              <div className="flex-1 h-2 bg-blue-gray-200"></div>
              <div className="flex-1 h-2 bg-blue-gray-400"></div>
              <div className="flex-1 h-2 bg-blue-gray-600"></div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-left text-blue-gray-500">Timings</p>
            <p className="mb-16 text-base text-left text-gray-500">
              The school functions five days a week (Monday to Friday) from 8:00 AM to 1:30 PM. Students at Kindergarten
              finish school at 11:30 AM and grades 1 to upward finish by 1:30 PM
            </p>
          </div>
          <div className="-mt-16">
            <p className="text-xl font-bold text-left text-blue-gray-500">Attendance & Punctuality</p>
            <p className="mb-16 text-base text-left text-gray-500">
              The school is strict about punctuality and attendance and any lack of it must be supported through
              adequate show of cause
            </p>
          </div>

          <div className="-mt-16">
            <p className="text-xl font-bold text-left text-blue-gray-500">Discipline & Decorum</p>
            <p className="mb-16 text-base text-left text-gray-500">
              Students are expected to maintain right order and decorum throughout the school hours, discharging
              appropriate respect and decorum where it is due. Any unsolicited behaviour towards the staff and other
              students in the school will be met with strict disciplinary actions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            bgColor="bg-white"
            iconColor="text-blue-400"
          />
        ))}
      </div>
    </div>
  </section>
)

const FeatureCard = ({ title, description, bgColor, iconColor }) => (
  <div className={`w-full p-8 mb-5 text-center transition-all rounded shadow hover:shadow-lg ${bgColor}`}>
    <div className="inline-block p-4 mb-6 -mt-32 rounded-full">
      
    </div>
    <h3 className="mb-4 text-2xl font-semibold dark:text-white">{title}</h3>
    <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default FeatureSection2
