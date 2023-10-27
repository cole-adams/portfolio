"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function ContentPageWrapper({
  children,
  className,
  key,
}: {
  children: ReactNode;
  className?: string;
  key: string;
}) {
  return (
    <motion.div
      className={`${className ?? ""}`}
      key={key}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
