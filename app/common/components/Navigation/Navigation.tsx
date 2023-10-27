import { ComponentFieldsSkeleton, LinkEntry } from "../../models/contentful";
import { getEntry } from "../../services/contentful";
import AppLink from "../Link";
import NavLink from "./NavLink";
import NavigationAnimation from "./NavigationAnimation";

export default async function Navigation() {
  const navigationContent = await getEntry<ComponentFieldsSkeleton>(
    "4K6OANnSNSvLw6nOH4aE0S"
  );
  return (
    <NavigationAnimation>
      <nav className="h-full flex md:flex-col justify-around md:justify-normal md:gap-6 shrink-0 w-full md:w-[260px] bg-nav md:pt-24">
        {navigationContent.fields.content.map((link) => (
          <NavLink key={link?.sys.id} entry={link as LinkEntry} />
        ))}
      </nav>
    </NavigationAnimation>
  );
}
