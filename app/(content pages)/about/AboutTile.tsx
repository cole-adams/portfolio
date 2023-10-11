import Text from "@/app/common/components/Text/ContentfulText";
import Card from "@/app/common/components/Card";
import {
  ComponentFieldsSkeleton,
  ImageEntry,
  TextEntry,
} from "@/app/common/models/contentful";
import { getEntry } from "@/app/common/services/contentful";
import Image from "next/image";

export default async function AboutTile() {
  const aboutPage = await getEntry<ComponentFieldsSkeleton>(
    "62rUdB7hR8ezuU7nM01SZu"
  );

  const image = aboutPage.fields.content[2] as ImageEntry;
  return (
    <Card className="flex lg:flex-row flex-col-reverse items-center gap-4">
      <div>
        <Text
          entry={aboutPage.fields.content[0] as TextEntry}
          className="mb-6 text-center md:text-left"
        />
        <Text
          entry={aboutPage.fields.content[1] as TextEntry}
          className=" whitespace-pre-wrap"
        />
      </div>
      <div className="lg:w-64 lg:h-64 md:w-48 md:h-48 w-24 h-24 relative shrink-0">
        <Image
          src={`https:${image.fields.asset?.fields.file?.url ?? ""}`}
          className="rounded-full"
          alt={image.fields.title}
          fill
        />
      </div>
    </Card>
  );
}
