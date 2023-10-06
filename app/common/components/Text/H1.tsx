import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function H1({ className, children }: PropsWithChildren<Props>) {
  return (
    <h1 className={`${className ?? ""} md:text-6xl text-5xl`}>{children}</h1>
  );
}
