"use client";

import { motion } from "framer-motion";

export default function WelcomeTypography() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
      <article>
        <p>
          I am a{" "}
          <b>
            <i>software engineer</i>
          </b>
          ,{" "}
          <b>
            <i>ui/ux designer</i>
          </b>
          ,{" "}
          <b>
            <i>product planner</i>
          </b>
          ,{" "}
          <b>
            <i>mentor</i>
          </b>
          ,{" "}
          <b>
            <i>student</i>
          </b>
          ,{" "}
          <b>
            <i>minimalist</i>
          </b>
          ,{" "}
          <b>
            <i>eternal optimist</i>
          </b>
          ,{" "}
          <b>
            <i>crypto enthusiast</i>
          </b>{" "}
          and{" "}
          <b>
            <i>sarcasm connoisseur</i>
          </b>
          .
        </p>
        <p>
          I love to both build and break things. I am motivated by challenging projects with
          self-guided research and dynamic problem solving. My true passion is crafting creative
          front end designs with unique takes on color, typography and motion.
        </p>
        <p>During my career</p>
        <p>
          I have built products ranging from marketing and ecommerce websites to complex enterprise
          apps with focus on delivering fast, elegant code along with delightful user interfaces.
        </p>
        <p>Now</p>
        <p>
          I currently career as a software engineer at StreamlineFS, where I do product planning,
          design and development.
        </p>
      </article>
    </motion.section>
  );
}
