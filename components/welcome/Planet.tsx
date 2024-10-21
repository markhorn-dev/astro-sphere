"use client";

import { motion } from "framer-motion";

export default function Planet() {
  return (
    <motion.div
      id="planetcont"
      className="absolute inset-0 top-1/4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
      <div
        id="crescent"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"
      >
        <div
          id="planet"
          className="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"
        >
          <div
            id="blur"
            className="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
