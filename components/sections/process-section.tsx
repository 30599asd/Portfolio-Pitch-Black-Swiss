"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "01",
      date: "探索阶段", // 原为 Discovery
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            深入了解您的需求 {/* 原为 Understanding Your Vision */}
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            每一个伟大的项目都始于深入的了解。我会深入分析您的目标、受众和需求，为您制定确保成功的战略基础。
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              研究与分析 {/* 原为 Research & Analysis */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              竞品分析 {/* 原为 Competitive Audit */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              用户旅程地图 {/* 原为 User Journey Mapping */}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "02",
      date: "设计阶段", // 原为 Design
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            打造极致体验 {/* 原为 Crafting the Experience */}
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            运用瑞士设计原则和现代美学，我创建出兼顾美观与功能的线框图和高质量设计稿。
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              线框图与原型设计 {/* 原为 Wireframing & Prototyping */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              视觉设计系统 {/* 原为 Visual Design System */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              动态设计 {/* 原为 Motion Design */}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "03",
      date: "开发阶段", // 原为 Development
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            精准构建 {/* 原为 Building with Precision */}
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            整洁、高效的代码是每个项目的基石。我使用现代框架和最佳实践来构建快速、易用且可扩展的体验。
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              React & Next.js 开发 {/* 原为 React & Next.js Development */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Three.js & WebGL 集成 {/* 原为 Three.js & WebGL Integration */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              性能优化 {/* 原为 Performance Optimization */}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "04",
      date: "上线交付", // 原为 Launch
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            卓越交付 {/* 原为 Delivering Excellence */}
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            成功上线只是开始。我确保平滑部署、全面测试和持续支持，让您的项目始终保持完美运行。
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              质量保证 {/* 原为 Quality Assurance */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              部署与 CI/CD {/* 原为 Deployment & CI/CD */}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              持续维护 {/* 原为 Ongoing Maintenance */}
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              我的工作方式 {/* 原为 How I Work */}
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              工作流程 {/* 原为 Process */}
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              一套经过精心打磨的方法论，确保每个项目都能以最高品质和细节关注交付。
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
