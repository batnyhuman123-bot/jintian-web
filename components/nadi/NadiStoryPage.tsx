import { BrandMeaningSection } from "./BrandMeaningSection";
import { NadiFooter } from "./NadiFooter";
import { NadiHero } from "./NadiHero";
import { StoryMissionSection } from "./StoryMissionSection";
import { StoryVisionSection } from "./StoryVisionSection";
import { TeamSection } from "./TeamSection";

export function NadiStoryPage() {
  return (
    <main>
      <NadiHero />
      <BrandMeaningSection />
      <StoryMissionSection />
      <StoryVisionSection />
      <TeamSection />
      <NadiFooter />
    </main>
  );
}
