import React from "react";
import { motion } from "framer-motion";
import Member from "./Member";

const Staff = () => {
  const members = [
    
    {
      name: "Wazda Tabassum ",
      role: "Teacher",
      education: "Masters in Political Science (YBN University), B.Ed from Baba Saheb Ambedkar Education University",
      experience: "Working as a teacher for 12 years",
      extra: "Computer Teachers Training Course, Diploma in Advance Software, Montessori Teacher's Training",
      address: "13/9 Ranapratap road A-zone Durgapur -04",
      contact: "6294581198",
      email: "",      
      imageSrc: "https://i.postimg.cc/Jh9g5RGY/Whats-App-Image-2024-11-09-at-23-38-55-7e82da50.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Roja Khatoon",
      role: "Teacher",
      education: "BA honours in English from Kazi Nazrul University ( Asansol), B.ED final year Pursuing from Baba Saheb Ambedkar Education University ( Kolkata)",
      experience: "4 years of teaching experience in a CBSE based English Medium School",
      extra: "Diploma in computer, Customer Care Executive Course",
      address: "Mamra Market, Vidayasagar Pally Durgapur:-06",
      contact: "7365066086",
      email: "rojakhatun18@gmail.com",      
      imageSrc: "https://i.postimg.cc/cHLKTG2Y/Whats-App-Image-2024-11-09-at-23-43-02-274c2e5f.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Mala Mitra",
      role: "Teacher",
      education: "B.A passed (Bangali hons.), Pursuing D.El.Ed. From Illambazar D.El.Ed. College",
      extra: "Customer Relation Management (CRM) Domestic, Non-Voice, Computer Knowledge",
      experience:"Working as a teacher for 4 years",
      address: "Vill+Po - Fuljhore, Durgapur",
      contact: "6294404080",
      email:"",    
      imageSrc: "https://i.postimg.cc/sXL2cQpd/Whats-App-Image-2024-11-08-at-20-44-50-79317fbd.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Sanchita Dey",
      role: "Teacher",
      education: "B.Sc(Botany), B.Ed,M.Sc(pursuing 2023-2025)",
      experience: "Working as a teacher  for 2 years",
      extra: "Diploma in Information and Technology Application, Diploma in Vocal Music",
      address: "Mamra,Bidhanpally, Durgapur-06 ",
      contact: "8918049743",
      email:"",    
      imageSrc: "https://i.postimg.cc/JnsXMWx8/Whats-App-Image-2024-11-09-at-23-49-10-91056f7b.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Chaitali  Banerjee",
      role: "Teacher",
      education: "Masters  in History (Barddhaman  University)",
      extra: "Diploma  in Computer  Application, Recitation",
      address: "SP 25, Vastu Bihar  Complex, Durgapur-06",
      contact: "8906694087",
      email:"",    
      imageSrc: "https://i.postimg.cc/9Fd7WbdD/Whats-App-Image-2024-11-09-at-23-51-20-2dffec42.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Sampa Shit",
      role: "Teacher",
      education: "M.A in Bengali",
      extra: "3 Year's Diploma in Wark Education From Lady Brabourne",
      experience:"Working as a teacher for 3 years",
      address: "Sp-17, Vastu Bihar  Complex (Near B.C Roy Engeneering College) Jemua, Durgapur -6",
      contact: "8170053325",
      email:"",    
      imageSrc: "https://i.postimg.cc/fTr7qzLJ/Whats-App-Image-2024-02-15-at-19-22-31-f920a970.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },




    {
      name: "Somashree Kar",
      role: "Teacher",
      education: "B.A History Honours (Kazi Nazrul University ) [2017- 2020], B.ed from Durgapur institute of Management & Science (Burdwan University)[ 2020 - 2022], Pursuing M.A from Burdwan University",
      extra: "Dance in Kathak, Diploma in Computer",
      address: "Fuljhore ,Rabindrapally Durgapur - 06",
      contact: "7602064256",
      email: "",      
      imageSrc: "https://i.postimg.cc/vBx4Ct8H/Whats-App-Image-2024-11-09-at-23-53-02-671aa5d5.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },


    {
      name: "Rejina Khatoon",
      role: "Teacher",
      education: "B.A. Honours in English, Pursuing M.A.(English) from Indra Gandhi National Open University",
      extra: "Diploma in Computer",
      experience:"Working as a teacher for 1 year",
      address: "Vill+P.O -Amrai, Durgapur - 03",
      contact: "7501484197",
      email:"rejina.dgp99@gmail.com",    
      imageSrc: "https://i.postimg.cc/G2Vv4XpW/Whats-App-Image-2024-11-11-at-23-06-06-9cea7825.jpg",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },
  ];

  return (
    <section className="flex items-center py-16 bg-stone-100 font-poppins dark:bg-gray-800">
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
                education={member.education}
                experience={member.experience}
                extra={member.extra}
                address={member.address}
                contact={member.contact}
                email={member.email}
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
