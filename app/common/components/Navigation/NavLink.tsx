"use client";

import { usePathname } from "next/navigation";
import { LinkEntry } from "../../models/contentful";
import AppLink from "../Link";

interface Props {
  entry: LinkEntry;
}

export default function NavLink({ entry }: Props) {
  const pathname = usePathname();

  return (
    <AppLink
      entry={entry}
      className={`flex flex-col md:flex-row items-center gap-2 text-primary text-xl md:text-3xl md:pl-16 py-3 underline hover:bg-background ${
        pathname === entry.fields.url
          ? "md:bg-background border-b-4 border-b-primary md:border-b-0"
          : ""
      }`}
      iconStyle="relative w-6 h-6 fill-primary"
    />
  );
}
