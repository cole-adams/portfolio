import Text from "@/common/components/Text/ContentfulText";
import { PageEntry } from "@/common/models/contentful";
import { createClient } from "contentful";

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const homePage = await client.getEntry<PageEntry>("1yC6QGZkdp48HTb2SFKkeD");
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Text className="text-primary" entry={homePage.fields.content[0]}></Text>
      <Text entry={homePage.fields.content[1]}></Text>
    </main>
  );
}
