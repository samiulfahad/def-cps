import React from "react"

const AboutUs = () => {
  return (
    <section className="bg-blue-50">
      <div className="flex flex-col justify-start items-center px-10 w-full md:w-4/5 mx-auto text-justify text-gray-700">
        <div className="px-4 my-10 md:text-center">
          <p className="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">About Us</p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">What we do</h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>
        
        <div className="mb-20">
          <p>
            The foundations are important in edification since it is a lifelong cognitive process. The art of good
            living, or making the most of human life, depends on the objectives stated, the poses adopted, the abilities
            and skills refined, and the instruction provided. It should be the commitment to support a worthwhile
            mission that drives the desire to prosper and excel. An excellent teacher recognises a student’s abilities
            and talents and addresses any specific issues that the student may have. When the master mentor is present,
            the person who initially seems average does remarkably well. The love and care invested in bringing out the
            best in a child provides rich rewards that eventually help to create a wealthy community. At the Durgapur
            City Public School, we work hard to help each student reach their full potential and offer a doorway through
            which each student can discover the vast possibility of developing and using the inherent abilities they
            already have. The task of influencing the quality of life in rural communities will be carried out by young
            people who have been educated and shaped by institutions founded on the ideals of excellence. People who
            live in rural areas dream of attending urban-style schools and receiving a modern education. However, while
            having the capacity to adopt high-quality education, they are always categorised as the underclass due to
            socioeconomic issues and a lack of adequate infrastructure. Let’s work together to create role models with
            creative ideas and a vision to advance humanity and carry out the Almighty's will for them.
          </p>
        </div>

        
      </div>
    </section>
  )
}

export default AboutUs
