import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function PLarge({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <p className={`${className ?? ""} text-2xl`}>{children}</p>;
}
