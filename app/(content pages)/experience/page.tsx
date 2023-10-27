import { getEntry } from "@/app/common/services/contentful";
import {
  ComponentFieldsSkeleton,
  ExperienceEntry,
} from "@/app/common/models/contentful";
import P from "@/app/common/components/Text/P";
import Card from "@/app/common/components/Card";
import Image from "next/image";
import H3 from "@/app/common/components/Text/H3";
import mapMarker from "@/public/map-marker.svg";
import SkillChip from "@/app/common/components/SkillChip";
import ContentPageWrapper from "../ContentPageWrapper";

export default async function Experience() {
  const experiencePage = await getEntry<ComponentFieldsSkeleton>(
    "3F9ZcgBRxQAtSWoXOCorcb"
  );

  const experiences = experiencePage.fields.content as ExperienceEntry[];
  return (
    <ContentPageWrapper
      key="experience"
      className="grid lg:grid-cols-2 grid-cols-1 gap-8"
    >
      {experiences.map((experience) => (
        <Card key={experience.sys.id} className="">
          <div className="flex items-center justify-between gap-4 mb-2">
            <H3 className="whitespace-pre-wrap">
              {experience.fields.jobTitle}
              {"\n"}
              <span className="text-primary">
                @ {experience.fields.company}
              </span>
            </H3>
            <Image
              className=""
              src={`https:${experience.fields.logo?.fields.file?.url ?? ""}`}
              alt={experience.fields.logo?.fields.title ?? ""}
              height={72}
              width={72}
            />
          </div>
          <div className="mb-2">
            <P className="inline-block">{experience.fields.dateRange}</P>
            <Image
              className="ml-4 mr-1 mb-1 inline-block"
              src={mapMarker}
              alt={"Map marker"}
              height={28}
              width={28}
            />
            <P className="inline-block">{experience.fields.location}</P>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {experience.fields.skills.map((skill) => (
              <SkillChip key={skill?.sys.id}>
                {skill?.fields.title ?? ""}
              </SkillChip>
            ))}
          </div>
          <P>{experience.fields.description}</P>
        </Card>
      ))}
    </ContentPageWrapper>
  );
}
