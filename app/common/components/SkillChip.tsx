import { PropsWithChildren } from "react";
import P from "./Text/P";

export default function SkillChip({ children }: PropsWithChildren) {
  return (
    <P className="inline-block bg-primary rounded-full px-2">{children}</P>
  );
}
