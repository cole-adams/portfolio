import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function P({ className, children }: PropsWithChildren<Props>) {
  return <p className={`${className ?? ""} text-base`}>{children}</p>;
}
