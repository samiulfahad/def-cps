import React from "react"

const TeamMember = ({ name, role, description, imageSrc, facebookLink, twitterLink, instagramLink }) => {
  return (
    <div className="flex flex-col flex-wrap mb-8 overflow-hidden rounded lg:flex-row dark:bg-gray-800">
      <div className="w-full overflow-hidden lg:w-2/4 h-80">
        <img className="object-cover w-full h-full transition-all hover:scale-110" src={imageSrc} alt={name} />
      </div>
      <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
        <div>
          <h2 className="mb-2 text-xl font-bold dark:text-gray-300">{name}</h2>
          <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">{role}</p>
          <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">{description}</p>
          {/* <div className="flex">
            <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </span>
            <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 1.877.583c-.104.021-.208.043-.313.051a3.288 3.288 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </span>
            <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.836 0 5.333.015 4.48.045 3.627.075 2.833.217 2.12.48c-.715.308-1.288.78-1.771 1.263a5.97 5.97 0 0 0-1.263 1.77C-.015 5.333 0 5.836 0 8s-.015 2.667.045 3.52c.03.853.172 1.647.435 2.36.308.715.78 1.288 1.263 1.771a5.95 5.95 0 0 0 1.77 1.263C5.333 15.985 5.836 16 8 16s2.667-.015 3.52.045c.853.03 1.647.172 2.36.435.715.308 1.288.78 1.771 1.263a5.95 5.95 0 0 0 1.263-1.77C15.985 12.667 16 12.164 16 11.32s-.015-2.667.045-3.52c.03-.853.172-1.647.435-2.36.308-.715.78-1.288 1.263-1.771a5.95 5.95 0 0 0-1.77-1.263C12.667.015 12.164 0 11.32 0 8 0 8 0 8 0zm0 1.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zM8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm4.063-.033a1.25 1.25 0 1 1 2.498-.002 1.25 1.25 0 0 1-2.498.002z" />
                </svg>
              </a>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

const Staff = () => {
  const members = [
    {
      name: "Yousuf Alam",
      role: "Director",
      description: "Lorem ipsum dolor sit amet...",
      imageSrc: "https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },

    {
      name: "Henry Robinson",
      role: "Headmaster",
      description: "Lorem ipsum dolor sit amet...",
      imageSrc: "https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },

    {
      name: "Henry Robinson",
      role: "Director",
      description: "Lorem ipsum dolor sit amet...",
      imageSrc: "https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },
    {
      name: "Henry Robinson",
      role: "Director",
      description: "Lorem ipsum dolor sit amet...",
      imageSrc: "https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },
  ]

  return (
    <section className="flex items-center py-24 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Meet The Teaching Staff</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
              facebookLink={member.facebookLink}
              twitterLink={member.twitterLink}
              instagramLink={member.instagramLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Staff
