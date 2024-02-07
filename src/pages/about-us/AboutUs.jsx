import React from "react"

const AboutUs = () => {
  return (
    <>
      <div className="bg-blue-50 flex flex-col justify-center items-center px-4 md:px-20 mx-auto">
        <div className="px-4 my-10 md:text-center">
          <p className="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">About Us</p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">What we do</h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="hidden md:block w-1/3 px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
              alt=""
              className="relative z-40 object-cover w-full h-96"
            />
          </div>
          <div className="w-2/3 lg:w-/2">
            
            <p className="mb-20 text-base leading-7 text-justify text-gray-500 dark:text-gray-400">
              THE FOUNDATIONS ARE IMPORTANT IN EDIFICATION SINCE IT IS A LIFELONG COGNITIVE PROCESS. THE ART OF GOOD
              LIVING, OR MAKING THE MOST OF HUMAN LIFE, DEPENDS ON THE OBJECTIVES STATED, THE POSES ADOPTED, THE
              ABILITIES AND SKILLS REFINED, AND THE INSTRUCTION PROVIDED. IT SHOULD BE THE COMMITMENT TO SUPPORT A
              WORTHWHILE MISSION THAT DRIVES THE DESIRE TO PROSPER AND EXCEL. A EXCELLENT TEACHER RECOGNISES A STUDENT’S
              ABILITIES AND TALENTS AND ADDRESSES ANY SPECIFIC ISSUES THAT THE STUDENT MAY HAVE. WHEN THE MASTER MENTOR
              IS PRESENT, THE PERSON WHO INITIALLY SEEMS AVERAGE DOES REMARKABLY WELL. THE LOVE AND CARE INVESTED IN
              BRINGING OUT THE BEST IN A CHILD PROVIDES RICH REWARDS THAT EVENTUALLY HELP TO CREATE A WEALTHY COMMUNITY.
              AT THE DURGAPUR CITY PUBLIC SCHOOL, WE WORK HARD TO HELP EACH STUDENT REACH THEIR FULL POTENTIAL AND OFFER
              A DOORWAY THROUGH WHICH EACH STUDENT CAN DISCOVER THE VAST POSSIBILITY OF DEVELOPING AND USING THE
              INHERENT ABILITIES THEY ALREADY HAVE. THE TASK OF INFLUENCING THE QUALITY OF LIFE IN RURAL COMMUNITIES
              WILL BE CARRIED OUT BY YOUNG PEOPLE WHO HAVE BEEN EDUCATED AND SHAPED BY INSTITUTIONS FOUNDED ON THE
              IDEALS OF EXCELLENCE. PEOPLE WHO LIVE IN RURAL AREAS DREAM OF ATTENDING URBAN-STYLE SCHOOLS AND RECEIVING
              A MODERN EDUCATION. HOWEVER, WHILE HAVING THE CAPACITY TO ADOPT HIGH-QUALITY EDUCATION, THEY ARE ALWAYS
              CATEGORISED AS THE UNDERCLASS DUE TO SOCIOECONOMIC ISSUES AND A LACK OF ADEQUATE INFRASTRUCTURE. LET’S
              WORK TOGETHER TO CREATE ROLE MODELS WITH CREATIVE IDEAS AND A VISION TO ADVANCE HUMANITY AND CARRY OUT THE
              ALMIGHTY’S WILL FOR THEM
            </p>
          </div>
        </div>

        <div></div>
      </div>

      
    </>
  )
}

export default AboutUs
