import { getEntry } from "@/app/common/services/contentful";
import {
  ComponentFieldsSkeleton,
  LinkEntry,
  ProjectEntry,
} from "@/app/common/models/contentful";
import Card from "@/app/common/components/Card";
import H2 from "@/app/common/components/Text/H2";
import P from "@/app/common/components/Text/P";
import SkillChip from "@/app/common/components/SkillChip";
import Image from "next/image";
import AppLink from "@/app/common/components/Link";
import ContentPageWrapper from "../ContentPageWrapper";

export { revalidate } from "@/app/common/services/contentful";

export default async function Experience() {
  const projectsPage = await getEntry<ComponentFieldsSkeleton>(
    "4he3IuYzYqU9gF75zoHHAQ"
  );

  const projects = projectsPage.fields.content as ProjectEntry[];
  return (
    <ContentPageWrapper
      key="projects"
      className="grid lg:grid-cols-2 grid-cols-1 gap-8"
    >
      {projects.map((project) => (
        <Card
          key={project.sys.id}
          className="w-full flex flex-col justify-between"
        >
          <div className="flex flex-col-reverse items-center gap-8 mb-4">
            <div className="self-start">
              <H2 className="mb-2">{project.fields.title}</H2>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.fields.skills.map((skill) => (
                  <SkillChip key={skill?.sys.id}>
                    {skill?.fields.title ?? ""}
                  </SkillChip>
                ))}
              </div>
              <P className="mb-2">{project.fields.description}</P>
            </div>
            <Image
              className=" shrink-0 h-min border-4 border-primary rounded-xl"
              src={`https:${project.fields.images[0]?.fields.file?.url ?? ""}`}
              alt={project.fields.title}
              width={300}
              height={225}
            />
          </div>
          <div className="flex w-full justify-around">
            {project.fields.projectLink && (
              <AppLink
                className="border-4 border-primary rounded-full p-3 hover:bg-background"
                entry={project.fields.projectLink as LinkEntry}
                iconStyle="relative h-16 w-16"
              />
            )}
            {project.fields.repoLink && (
              <AppLink
                className="border-4 border-primary rounded-full p-3 hover:bg-background"
                entry={project.fields.repoLink as LinkEntry}
                iconStyle="relative h-16 w-16"
              />
            )}
          </div>
        </Card>
      ))}
    </ContentPageWrapper>
  );
}
