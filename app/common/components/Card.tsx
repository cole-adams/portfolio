"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export default function Card({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      className={`${
        className ?? ""
      } bg-nav shadow lg:p-12 md:p-10 p-8 transition-shadow hover:shadow-primaryHover`}
    >
      {children}
    </motion.div>
  );
}
