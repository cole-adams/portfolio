"use client";

import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import { useBreakpoint } from "../services/breakpoints";

export default function Cursor({
  mouseRef,
}: {
  mouseRef: MutableRefObject<HTMLElement | null>;
}) {
  const mouse = useMouse(mouseRef.current, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);

  const { md } = useBreakpoint("md");
  const mousePositionX = md
    ? mouse.clientX ?? prevMouseX.current
    : window.innerWidth / 2 - 128;
  const mousePositionY = md
    ? mouse.clientY ?? prevMouseY.current
    : window.innerHeight / 2 - 160;

  console.log(mousePositionX);
  console.log(mousePositionY);

  prevMouseX.current = mousePositionX;
  prevMouseY.current = mousePositionY;

  const animate = {
    x: mousePositionX,
    y: mousePositionY,
    transition: {
      type: "spring",
      mass: 0.6,
    },
  };
  return (
    <motion.div
      className="fixed -z-10 md:w-8 md:h-8 w-64 h-64 rounded-full bg-primary shadow-cursor opacity-20"
      animate={animate}
    ></motion.div>
  );
}
