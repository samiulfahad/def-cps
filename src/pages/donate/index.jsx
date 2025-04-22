/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";

const Donate = () => {
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      <div
        className="relative  flex items-center justify-center w-full text-center bg-center bg-cover"
        style={{ backgroundImage: "url(https://i.postimg.cc/Pq4dpC7b/Whats-App-Image-2025-03-18-at-00-44-52-20b954a9.jpg)", height: "600px" }}
      >
        {!showForm ? (
          <div className="mx-4">
            <div className="z-10 max-w-3xl p-6 bg-gray-900 md:p-16 opacity-90">
              <div className="text-center">
                <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50">
                  Support Our Students: Donate Today
                </h2>
                <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                  Your generosity fuels the dreams of our students and the future of our community. Every contribution,
                  no matter the size, helps us provide quality education and enriching experiences to our students. Join
                  us in shaping bright futures and empowering the leaders of tomorrow. Together, let's make a lasting
                  impact on education. Thank you for your support!
                </p>
                <div className="flex flex-wrap justify-center">
                  <button
                    onClick={handleForm}
                    className="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-gray-600 rounded md:w-auto md:ml-2 hover:bg-blue-gray-700"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Form formVisibility={handleForm} />
        )}
      </div>
    </motion.section>
  );
};

export default Donate;
