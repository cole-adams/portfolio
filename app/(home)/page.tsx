import Text from "@/app/common/components/Text/ContentfulText";
import {
  ComponentFieldsSkeleton,
  TextEntry,
} from "@/app/common/models/contentful";
import { getEntry } from "../common/services/contentful";

export { revalidate } from "@/app/common/services/contentful";

export default async function Home() {
  const homePage = await getEntry<ComponentFieldsSkeleton>(
    "1yC6QGZkdp48HTb2SFKkeD"
  );
  homePage.fields.content[0];
  return (
    <main className="grow flex flex-col items-center justify-center h-full">
      <Text
        className="text-primary text-center"
        entry={homePage.fields.content[0] as TextEntry}
      ></Text>
      <Text entry={homePage.fields.content[1] as TextEntry}></Text>
    </main>
  );
}
