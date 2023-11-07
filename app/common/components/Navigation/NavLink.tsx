"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LinkEntry } from "../../models/contentful";
import AppLink from "../Link";

interface Props {
  entry: LinkEntry;
}

export default function NavLink({ entry }: Props) {
  const pathname = usePathname();

  return (
    <div className="relative">
      {pathname === entry.fields.url && (
        <motion.div
          className="md:bg-background border-b-4 border-b-primary md:border-b-0 absolute top-0 left-0 w-full h-full z-0"
          layoutId="nav-selected"
          layout
        />
      )}
      <AppLink
        entry={entry}
        className={`flex flex-col md:flex-row items-center gap-2 text-primary text-xl md:text-3xl md:pl-16 py-3 underline relative md:hover:shadow-xl border-transparent md:hover:border-primary border-t-2 border-b-2`}
        iconStyle="relative w-6 h-6 fill-primary"
      />
    </div>
  );
}
