import { PropsWithChildren } from "react";
import Title from "./Title";
import H1 from "./H1";
import { TextEntry } from "@/app/common/models/contentful";

interface Props {
  entry?: TextEntry;
  className?: string;
}

type TextRenderer = (
  props: PropsWithChildren<{ className?: string }>
) => JSX.Element;

const tagComponentMap: Record<string, TextRenderer> = {
  Title,
  H1,
};

export default function Text({ entry, className }: Props) {
  if (!entry) return <></>;
  const Component = tagComponentMap[entry.fields.tag ?? "P"];
  const content =
    entry.fields.textFormat === "Short"
      ? entry.fields.shortContent
      : entry.fields.longContent;
  return <Component className={className}>{content}</Component>;
}
