"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function WorksSection() {
  const projects = [
    {
      title: "沉浸式动态图形",
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      category: "动态图形 / Motion Graphics",
      description:
        "为某虚拟品牌制作的沉浸式动态海报，探索光影与几何的视觉边界。",
      link: "#",
    },
    {
      title: "3D 角色动画",
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
      category: "3D 动画 / 3D Animation",
      description:
        "利用 Blender 制作的 3D 角色短片，包含完整的建模、绑定与动画流程。",
      link: "#",
    },
    {
      title: "交互式视觉体验",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2340&auto=format&fit=crop",
      category: "交互设计 / Interaction",
      description:
        "结合 WebGL 技术的交互式网页，让用户通过鼠标与虚拟空间产生情感共鸣。",
      link: "#",
    },
    {
      title: "视觉特效短片",
      src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
      category: "视觉特效 / VFX",
      description:
        "结合实拍与 CG 技术的视觉特效短片，探索赛博朋克美学下的未来城市。",
      link: "#",
    },
    {
      title: "UI 动效与交互动画",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      category: "UI 动效 / UI Motion",
      description:
        "为移动端 App 设计的流畅 UI 动效与微交互动画，提升用户体验。",
      link: "#",
    },
    {
      title: "概念艺术与插画",
      src: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2340&auto=format&fit=crop",
      category: "概念艺术 / Concept Art",
      description:
        "为独立游戏项目创作的概念艺术设定与场景插画，构建宏大的世界观。",
      link: "#",
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                精选作品
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                项目展示
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              这里收录了我近期的动画短片、动态图形与视觉设计作品，探索科技与艺术的融合。
            </p>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <FocusCards cards={projects} />

        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>查看全部作品</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
