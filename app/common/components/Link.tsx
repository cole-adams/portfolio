import Link from "next/link";
import { LinkEntry, LinkFieldsSkeleton } from "../models/contentful";
import Image from "next/image";
import { Asset } from "contentful";

interface Props {
  entry: LinkEntry;
  className?: string;
  iconStyle?: string;
}

export default function AppLink({
  entry,
  className,
  iconStyle = "w-4 h-4",
}: Props) {
  const icon = entry.fields.icon as Asset<undefined, string>;
  return (
    <Link
      className={className}
      href={entry.fields.url}
      target={entry.fields.newTab ? "_blank" : "_self"}
    >
      {icon && (
        <span className={`block ${iconStyle}`}>
          <Image
            src={`https:${icon.fields.file?.url}`}
            fill
            alt={icon.fields.title ?? "Not Found"}
          />
        </span>
      )}
    </Link>
  );
}
