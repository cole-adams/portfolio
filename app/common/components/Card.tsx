import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Card({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={`${className ?? ""} bg-nav shadow p-12`}>{children}</div>
  );
}
