// TestimonialsSection.js

import React from "react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ashraful Middya",
      occupation: "Guardian",
      quote:
        "Enrolling my child in City Public School, Durgapur was a transformative decision. The school's innovative teaching methods and dedicated faculty create an environment where learning becomes an exciting journey. My child's growth, both academically and personally, has been remarkable",
      imageSrc: "https://i.postimg.cc/KYGtgsf1/person-dummy.jpg",
    },
    {
      id: 2,
      name: "Wazda Tabassum",
      occupation: "Headmistress",
      quote:
        "As the Headmaster of City Public School, Durgapur, I take pride in our students' transformative journeys. Our commitment to academic excellence and a nurturing environment empowers each child to thrive. It's a joy to witness them evolve into confident, compassionate individuals ready to face the world's challenges with resilience and knowledge.",
      imageSrc: "https://i.postimg.cc/WzpFqRSz/Whats-App-Image-2025-03-18-at-00-44-51-01290bd6.jpg",
    },
    {
      id: 3,
      name: "Sk Nasrul",
      occupation: "Guardian",
      quote:
        "City Public School, Durgapur, has exceeded my expectations in providing a safe and stimulating learning atmosphere. The school's emphasis on both academic excellence and extracurricular activities ensures a balanced education. My child not only excels academically but also enjoys a rich and fulfilling school experience.",
      imageSrc: "https://i.postimg.cc/KYGtgsf1/person-dummy.jpg",
    },
  ]

  return (
    <section className="flex md:mx-48 items-center bg-white dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-7xl  py-10">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white"> Testimonials </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            City Public School offers an exceptional educational experience, fostering a nurturing environment that
            sparks curiosity and equips students with diverse skills for a dynamic future. With a commitment to
            excellence, CPS cultivates progressive thinkers and lifelong learners.
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center mx-auto md:grid md:grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative mb-10 border-b-4 border-blue-gray-500" href="#">
                <div className="z-20 pt-8 pb-5 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-20 h-20 opacity-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <div className="text-center">
                    <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                      <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-gray-400 -top-4 -right-4"></div>
                      <img
                        className="object-cover w-full h-full"
                        src={testimonial.imageSrc}
                        alt=""
                      />
                      <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-gray-400 -bottom-4 -left-4"></div>
                    </div>
                  </div>
                  <p className="mb-4 text-base leading-7 text-justify text-gray-400">{testimonial.quote}</p>
                  <h2 className="text-lg font-bold leading-9 text-black dark:text-white">{testimonial.name}</h2>
                  <span className="block text-xs font-semibold text-blue-gray-500 uppercase dark:text-blue-300">
                    {testimonial.occupation}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection













