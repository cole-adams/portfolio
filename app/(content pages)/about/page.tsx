import AboutTile from "./AboutTile";
import SkillsTile from "./SkillsTile";

export default async function About() {
  return (
    <div className="flex flex-col items-center gap-20">
      <AboutTile />
      <SkillsTile />
    </div>
  );
}
