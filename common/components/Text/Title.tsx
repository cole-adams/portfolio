import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Title({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <h1 className={`${className ?? ""} md:text-9xl text-7xl`}>{children}</h1>
  );
}
