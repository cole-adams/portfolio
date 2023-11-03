import { ComponentFieldsSkeleton, LinkEntry } from "../models/contentful";
import { getEntry } from "../services/contentful";
import AppLink from "./Link";

export { revalidate } from "@/app/common/services/contentful";

export default async function SocialsBar() {
  const socialsBarContent = await getEntry<ComponentFieldsSkeleton>(
    "7kwK0Jw91WK5yn48FruMNq"
  );
  return (
    <div className="flex bg-nav md:gap-3 gap-2 md:py-5 md:px-4 p-3 absolute rounded-br-xl drop-shadow z-20">
      {socialsBarContent.fields.content.map((link) => (
        <AppLink
          key={link?.sys.id}
          entry={link as LinkEntry}
          iconStyle="relative md:h-12 md:w-12 w-8 h-8"
        />
      ))}
    </div>
  );
}
