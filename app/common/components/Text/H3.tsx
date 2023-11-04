import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function H3({ className, children }: PropsWithChildren<Props>) {
  return (
    <h2 className={`${className ?? ""} md:text-3xl text-2xl`}>{children}</h2>
  );
}
