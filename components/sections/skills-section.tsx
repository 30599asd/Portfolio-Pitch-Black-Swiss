"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconCode,
  IconPalette,
  IconDeviceLaptop,
  IconRocket,
  IconBrandThreejs,
  IconApiApp,
} from "@tabler/icons-react";

interface SkillCardProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Skill card with glowing border gradient effect
const SkillCard = memo(function SkillCard({
  area,
  icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black-50">
        {/* Glowing border gradient effect */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        <div
          className={cn(
            "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8",
            "bg-gradient-to-br from-white/[0.03] to-transparent"
          )}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon */}
            <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-3">
              {icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-harmond text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="font-nohemi text-sm md:text-base text-white/50">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export function SkillsSection() {
  const skills = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <IconCode className="h-6 w-6 text-accent-blue" />,
      title: "前端开发", // 原为 Frontend Development
      description:
        "使用 React、Next.js 和 TypeScript 构建高性能、无障碍的 Web 应用程序。",
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <IconPalette className="h-6 w-6 text-accent-blue" />,
      title: "UI/UX 设计", // 原为 UI/UX Design
      description:
        "专注于用户体验和现代美学，打造直观的界面设计。",
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <IconBrandThreejs className="h-6 w-6 text-accent-blue" />,
      title: "3D 与 WebGL", // 原为 3D & WebGL
      description:
        "使用 Three.js、React Three Fiber 和自定义着色器打造沉浸式的 3D 体验。",
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <IconDeviceLaptop className="h-6 w-6 text-accent-blue" />,
      title: "响应式设计", // 原为 Responsive Design
      description:
        "确保在所有设备和屏幕尺寸上都能获得完美的体验。",
    },
    {
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
      icon: <IconRocket className="h-6 w-6 text-accent-blue" />,
      title: "性能优化", // 原为 Performance
      description: "针对 60fps 动画和亚秒级加载时间进行深度优化。",
    },
    {
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
      icon: <IconApiApp className="h-6 w-6 text-accent-blue" />,
      title: "API 集成", // 原为 API Integration
      description:
        "与 REST API、GraphQL 和第三方服务实现无缝集成。",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              专业领域 {/* 原为 Expertise */}
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              技能与服务 {/* 原为 Skills & Services */}
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              经过多年为初创企业和大型企业构建数字产品而打磨的全面技能组合。
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[36rem] xl:grid-rows-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              area={skill.area}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
