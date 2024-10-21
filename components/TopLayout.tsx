"use client";

import { motion } from "framer-motion";

import Container from "@/components/Container";

export default function TopLayout({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="pt-36 pb-5">
      <Container size="md">
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </Container>
    </div>
  );
}
