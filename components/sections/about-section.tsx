"use client";

import React, { memo } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{
        textShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

export function AboutSection() {
  // 这里可以替换成你常用的软件或技能
  const skills = [
    "After Effects",
    "Blender",
    "Maya",
    "Premiere Pro",
    "Figma",
    "Cinema 4D",
    "Substance 3D",
    "UI/UX Design",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        <div className="swiss-grid">
          {/* Section label */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              关于我
            </span>
            <div className="mt-4 w-12 h-px bg-white/20" />
          </div>

          {/* Main content */}
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            {/* Encrypted header */}
            <h2 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8">
              <EncryptedText
                text="动画与视界"
                encryptedClassName="text-white/30"
                revealedClassName="text-white"
                revealDelayMs={40}
              />
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
              <p>
                我是一名充满热情的动画设计师，致力于创造{" "}
                <GlowText className="text-white">
                  令人惊叹的视觉体验
                </GlowText>{" "}
                ，不断探索动态影像与交互设计的边界。
              </p>

              <p>
                我的创作融合了{" "}
                <GlowText className="text-white">极简的设计美学</GlowText>{" "}
                与前沿的动画技术，力求让每一个作品在视觉上极具张力，在体验上流畅自然。
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-16">
              <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">
                常用软件与技术
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full border border-white/10 bg-white/5",
                      "font-nohemi text-sm text-white/70",
                      "hover:border-white/30 hover:bg-white/10 hover:text-white",
                      "transition-all duration-300"
                    )}
                    data-cursor-hover
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "年学习经验" },
                { value: "20+", label: "完成项目" },
                { value: "10+", label: "合作客户" },
                { value: "∞", label: "杯咖啡" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-harmond text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-nohemi text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
