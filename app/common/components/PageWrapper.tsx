"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
