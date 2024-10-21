"use client";

import { motion } from "framer-motion";

import Container from "@/components/Container";

export default function BottomLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex-1 py-5">
      <Container size="md">
        <motion.div
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
