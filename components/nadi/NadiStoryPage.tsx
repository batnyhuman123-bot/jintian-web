import { NadiFooter } from "./NadiFooter";
import { NadiHero } from "./NadiHero";
import { StoryMissionSection } from "./StoryMissionSection";
import { StoryVisionSection } from "./StoryVisionSection";
import { TeamSection } from "./TeamSection";

export function NadiStoryPage() {
  return (
    <main>
      <NadiHero />
      <StoryMissionSection />
      <StoryVisionSection />
      <TeamSection />
      <NadiFooter />
    </main>
  );
}
