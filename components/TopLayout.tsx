"use client";

import { motion } from "framer-motion";

import Container from "@/components/Container";

export default function TopLayout({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="pt-36 pb-5">
      <Container size="md">
        <motion.div
          className={className}
          variants={{
            hidden: { opacity: 0, y: 20 },
            block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
          }}
          initial="hidden"
          animate="block"
        >
          {children}
        </motion.div>
      </Container>
    </div>
  );
}
