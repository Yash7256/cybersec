"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#FFFFFF]">
              Experience the CLI in Action <br />
            </h1>
          </>
        }
      >
        <div className="mx-auto rounded-2xl max-w-4xl aspect-video overflow-hidden">
          <video
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
            draggable={false}
            style={{ 
              imageRendering: 'auto'
            }}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}