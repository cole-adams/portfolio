"use client";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export default function ClientAnimatePresence({
  children,
}: {
  children: ReactNode;
}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
