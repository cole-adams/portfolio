import { ComponentFieldsSkeleton, LinkEntry } from "../models/contentful";
import { getEntry } from "../services/contentful";
import AppLink from "./Link";

export default async function Navigation() {
  const navigationContent = await getEntry<ComponentFieldsSkeleton>(
    "4K6OANnSNSvLw6nOH4aE0S"
  );
  return (
    <nav className="shrink w-full md:w-[260px] bg-nav md:pt-32">
      {navigationContent.fields.content.map((link) => (
        <AppLink
          key={link?.sys.id}
          entry={link as LinkEntry}
          className="flex flex-col md:flex-row items-center gap-2 text-primary text-xl md:text-3xl md:pl-16 py-3 underline hover:bg-background"
          iconStyle="relative w-6 h-6 fill-primary"
        />
      ))}
    </nav>
  );
}
