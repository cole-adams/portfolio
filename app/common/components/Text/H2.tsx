import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function H2({ className, children }: PropsWithChildren<Props>) {
  return (
    <h2 className={`${className ?? ""} md:text-5xl text-4xl`}>{children}</h2>
  );
}
