import React from "react";
import { motion } from "framer-motion";
import Member from "./Member";

const Staff = () => {
  const members = [
    {
      name: "Sampa Shit",
      role: "Teacher",
      description: "Qualification: M A in Bengali. Special Qualification: 3 year's Diploma From Lady Brabourne 2 year's Experience as an Assistant Teacher in Bengali at Gorabari Sisu Niketan.",
      imageSrc: "https://i.postimg.cc/fTr7qzLJ/Whats-App-Image-2024-02-15-at-19-22-31-f920a970.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },

    {
      name: "Somashree Kar",
      role: "Teacher",
      description: "Qualifications - B.A (History Honours) B.Ed from Burdwan University. Pursuing M.A from Burdwan University Extra Curriculum - Dance in Kathak, Diploma in Computer",
      imageSrc: "https://i.postimg.cc/prZvVcm6/Whats-App-Image-2024-02-15-at-19-22-31-57bf7e95.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },

    {
      name: "Chaitali Banerjee",
      role: "Teacher",
      description: "N/A",
      imageSrc: "https://i.postimg.cc/cL4d5Wvt/Whats-App-Image-2024-02-15-at-19-22-32-a26647fc.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    }
  ];

  return (
    <section className="flex items-center py-24 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="mb-12 text-xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Meet The Teaching Staff</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4"
            >
              <Member
                name={member.name}
                role={member.role}
                description={member.description}
                imageSrc={member.imageSrc}
                facebookLink={member.facebookLink}
                twitterLink={member.twitterLink}
                instagramLink={member.instagramLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Staff;
