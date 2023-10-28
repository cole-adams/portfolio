"use client";

import { ReactNode, useRef } from "react";
import Cursor from "./Cursor";

export default function Body({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const bodyRef = useRef(null);
  return (
    <body className={className} ref={bodyRef}>
      <Cursor mouseRef={bodyRef} />
      {children}
    </body>
  );
}
