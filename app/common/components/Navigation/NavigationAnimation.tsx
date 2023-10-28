"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function NavigationAnimation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div className="md:h-full z-10" layoutId="nav" layout>
      {children}
    </motion.div>
  );
}
