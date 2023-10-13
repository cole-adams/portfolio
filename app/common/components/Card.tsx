import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Card({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={`${className ?? ""} bg-nav shadow lg:p-12 md:p-10 p-8`}>
      {children}
    </div>
  );
}
