import React from "react"
import Member from "./Member"

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
            <Member
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
