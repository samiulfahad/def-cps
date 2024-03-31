import React from "react"

const HeroSection = () => (
  <section className="relative pb-8" style={{ height: "750px" }}>
    <div>
      <img
        src="https://i.postimg.cc/CKVZHhrQ/pexels-pixabay-256455-1.jpg"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
        alt=""
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75">
        <div className="z-10 max-w-5xl px-4 mx-auto text-center">
          <span className="text-xs font-semibold text-blue-400 uppercase">Knowledge is power</span>
          <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight">
            Grow your career
          </h2>
          <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <a
            className="block px-5 py-3 text-sm font-semibold text-center text-indigo-500 transition duration-200 bg-white border border-white rounded md:inline-block hover:bg-indigo-50 hover:border-indigo-50"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
)


const FeatureGrid = () => {
  const fearures = [
    {
      title: "Certification",
      bg: "bg-blue-gray-400",
      description:
        "Welcome to City Public School! Our certified teachers ensure your child's academic journey begins on a solid foundation. Trust that your child is in the hands of qualified professionals dedicated to fostering a love for learning.",
      iconColor: "text-blue-700",
    },
    {
      title: "Certified Teachers",
      bg: "bg-blue-gray-700",
      description:
        "Our certified kindergarten teachers are passionate about early childhood development, creating engaging learning experiences that foster a love for learning. Choose us for a kindergarten experience where certified teachers prioritize your child's growth.",
      iconColor: "text-red-700",
    },
    {
      title: "Special Education",
      bg: "bg-blue-gray-400",
      description:
        "At City Public School, we embrace diversity. Our special education programs provide personalized support, creating an inclusive environment. Join us in creating a community where every child thrives academically, socially, and emotionally.",
      iconColor: "text-blue-700",
    },
  ]
  return (
    <div className=" md:grid md:grid-cols-1 lg:grid-cols-3 w-4/5 -mt-32 md:mt-0 md:w-2/3 mx-auto  justify-center items-center relative lg:-mt-[140px] z-10 rounded">
      {fearures.map((fearure, index) => (
        <FeatureCard
          key={index}
          bgColor={fearure.bg}
          iconColor={fearure.iconColor}
          title={fearure.title}
          description={fearure.description}
        />
      ))}
    </div>
  )
}

const FeatureCard = ({ bgColor, iconColor, title, description }) => (
  <div className={`w-full relative p-8 mb-10 text-center transition-all rounded shadow lg:mb-0 ${bgColor}`}>
    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
      {iconColor === "text-blue-700" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-8 h-8"
          viewBox="0 0 16 16"
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      )}
      {iconColor === "text-red-700" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-8 h-8"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      )}
      {iconColor === "text-blue-700" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-8 h-8"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
          <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
        </svg>
      )}
      {iconColor === "text-red-700" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-8 h-8"
          viewBox="0 0 16 16"
        >
          <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
          <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.500 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
        </svg>
      )}
    </div>
    <h2 className="mb-4 text-2xl text-center font-semibold text-gray-100 dark:text-white">{title}</h2>
    <p className="text-base text-center text-gray-300 dark:text-gray-300">{description}</p>
  </div>
)

export { HeroSection, FeatureGrid }
