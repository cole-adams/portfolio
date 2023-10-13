import Text from "@/app/common/components/Text/ContentfulText";
import Card from "@/app/common/components/Card";
import {
  ComponentFieldsSkeleton,
  SkillEntry,
  TextEntry,
} from "@/app/common/models/contentful";
import { getEntry } from "@/app/common/services/contentful";
import Image from "next/image";
import PLarge from "@/app/common/components/Text/PLarge";

export default async function SkillsTile() {
  const skillsPage = await getEntry<ComponentFieldsSkeleton>(
    "5XaI1BwPyDKFazJOvBLv2m"
  );

  const title = skillsPage.fields.content[0] as TextEntry;
  const skills = skillsPage.fields.content.slice(1) as SkillEntry[];
  return (
    <Card className="w-full">
      <Text entry={title} className="mb-6 text-center md:text-left" />
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {skills.map((skill) => (
          <div
            key={skill.sys.id}
            className="flex flex-col items-center justify-center border-2 rounded-lg gap-2 w-32 h-32"
            style={{ borderColor: skill.fields.colour }}
          >
            <Image
              src={`https:${skill.fields.icon?.fields.file?.url ?? ""}`}
              alt={skill.fields.title}
              width={64}
              height={64}
            />
            <PLarge>{skill.fields.title}</PLarge>
          </div>
        ))}
      </div>
    </Card>
  );
}
