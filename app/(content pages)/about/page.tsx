import ContentPageWrapper from "../ContentPageWrapper";
import AboutTile from "./AboutTile";
import SkillsTile from "./SkillsTile";

export default async function About() {
  return (
    <ContentPageWrapper
      key="about"
      className="flex flex-col items-center gap-20"
    >
      <AboutTile />
      <SkillsTile />
    </ContentPageWrapper>
  );
}
