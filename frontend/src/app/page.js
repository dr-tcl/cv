import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ConsultingSection from "@/components/ConsultingSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getResumeData } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getResumeData();

  return (
    <div className="min-h-screen bg-[#060911] bg-grid-pattern text-slate-200">
      <Navbar shortName={data.profile?.shortName} />
      <main>
        <Hero
          profile={data.profile}
          highlights={data.about?.highlights}
          socials={data.socials}
        />
        <AboutSection about={data.about} />
        <ExperienceSection experience={data.experience} />
        <ConsultingSection consulting={data.consulting} />
        <SkillsSection
          skills={data.skills}
          education={data.education}
          certifications={data.certifications}
        />
        <ContactSection profile={data.profile} socials={data.socials} />
      </main>
      <Footer name={data.profile?.name} />
    </div>
  );
}
