import React from "react";
import { motion } from "framer-motion";
import TableRow from "./TableRow";
import ScrollingText from "./ScrollingText";

const Notice = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollingText />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="items-center lg:flex font-poppin pb-20"
      >
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="pt-4 rounded shadow bg-white">
            <div className="flex px-6 pb-4 border-b">
              <h2 className="text-xl font-bold">Notice Board</h2>
            </div>
            <div className="w-auto p-4 overflow-x-auto">
              <table className="w-full table-auto">
                <tbody>
                  <TableRow bg="0" date="12/02/24" title="Assignment for className 5" />
                  <TableRow bg="1" date="10/02/24" title="Exam Fee for className 4" />
                  <TableRow bg="2" date="08/02/24" title="Annual sports day 2024" />
                  <TableRow bg="3" date="05/02/24" title="Result of 1st Term Exam" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Notice;
