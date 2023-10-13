import AboutTile from "./AboutTile";
import SkillsTile from "./SkillsTile";

export default async function About() {
  return (
    <main className="flex flex-col items-center h-full md:p-20 p-4 pt-20 overflow-x-auto gap-20">
      <AboutTile />
      <SkillsTile />
    </main>
  );
}
