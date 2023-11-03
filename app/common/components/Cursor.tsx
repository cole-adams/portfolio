"use client";

import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import { useBreakpoint } from "../services/breakpoints";
import useWindowDimensions from "../hooks/useWindowDimensions";

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

  const { width, height } = useWindowDimensions();
  const mousePositionX = md
    ? mouse.clientX ?? prevMouseX.current
    : width / 2 - 128;
  const mousePositionY = md
    ? mouse.clientY ?? prevMouseY.current
    : height / 2 - 160;

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
