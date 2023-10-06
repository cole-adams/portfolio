import { EntrySkeletonType, createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export async function getEntry<T extends EntrySkeletonType>(entryId: string) {
  return client.withoutUnresolvableLinks.getEntry<T>(entryId);
}
