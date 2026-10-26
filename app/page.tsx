import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";
import { CurtainRevealLayout } from "@/components/curtain-reveal-layout";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";

export default function Home() {
  const navItems = [
    { name: "作品", link: "#work" }, // 原为 Work
    { name: "关于", link: "#about" }, // 原为 About
    { name: "流程", link: "#process" }, // 原为 Process
    { name: "技能", link: "#skills" }, // 原为 Skills
  ];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <CurtainRevealLayout footer={<FooterSection />}>
        {/* Hero Section - The Hook */}
        <HeroSection />

        {/* Kinetic Marquee - Breaking the grid */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            // 翻译了跑马灯文字。如果客户不在巴黎，可以把“常驻巴黎”改成客户所在城市（如：坐标北京）
            text="创意开发者 — 常驻巴黎 — 设计 — 代码 — " 
            baseVelocity={0.5}
            skewFactor={0.8}
          />
        </div>

        {/* About Section - The Pitch */}
        <AboutSection />

        {/* Selected Works - The Core */}
        <WorksSection />

        {/* Kinetic Marquee - Second instance */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            text="期待合作 — 欢迎联系 — " // 原为 AVAILABLE FOR PROJECTS — LET'S COLLABORATE — 
            baseVelocity={-0.4}
            skewFactor={0.6}
          />
        </div>

        {/* Process Section - Timeline */}
        <ProcessSection />

        {/* Skills & Services - Bento Grid */}
        <SkillsSection />
      </CurtainRevealLayout>
    </>
  );
}
