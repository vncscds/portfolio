'use client'

import { AuroraText } from "@/components/magicui/aurora-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { WordRotate } from "@/components/magicui/word-rotate";
import Menu from "@/components/menu";
import ResumeButton from "@/components/resume-button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
  const footer = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsFooterVisible(entry.isIntersecting)
      })
    }, { threshold: .1 })

    if (footer.current instanceof HTMLElement) {
      observer.observe(footer.current)
    }
  }, []);

  return (
    <Fragment>
      <Menu className={cn(isFooterVisible && 'hidden')} />
      <main className="overflow-hidden text-black bg-white dark:bg-background">
        <RetroGrid angle={10} cellSize={85} />
        <div className="flex flex-col justify-center items-center h-screen">
          <AuroraText className="text-5xl md:text-6xl font-extrabold block" colors={['orange', 'purple']} speed={1.5}>
            vinicius.codes
          </AuroraText>
          <div className="flex flex-row items-center gap-2 text-gray-500 text-lg md:text-xl dark:text-gray-300">
            <span>building</span>
            <WordRotate words={["apps", "websites", "experiences"]} />
          </div>
        </div>
        <section className="relative p-16">
          <div className="relative flex h-[350px] max-md:w-screen w-full flex-col items-center justify-center overflow-hidden">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)] opacity-35 max-md:hidden"
              )}
            />
          </div>
          <div className="absolute top-[25%] w-screen max-md:top-[50%] max-md:transform max-md:translate-y-[-65%]">
            <div className="flex flex-col gap-10 max-md:gap-16">
              <div className="text-center md:text-left md:max-w-[350px] md:ml-[10%] max-md:w-[70%]">
                <AuroraText colors={['orange', 'purple']} className="font-bold text-3xl">
                  About me.
                </AuroraText>
                <p className="text-gray-500 font-medium dark:text-gray-300">My name is Vinícius Gonçalves. I create impactful websites and mobile apps. I deliver user-focused applications for web and native platforms.</p>
              </div>
              <div className="text-center md:max-w-[650px] md:ml-auto md:text-right md:px-32 md:mr-[10%] max-md:w-[70%]">
                <AuroraText colors={['orange', 'purple']} className="font-bold text-3xl">
                  Skills.
                </AuroraText>
                <p className="text-gray-500 font-medium dark:text-gray-300">React, React Native and Next.js. Also, I develop native apps using Kotlin (Jetpack Compose).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer ref={footer} className="h-[250px] bg-white dark:bg-background text-gray-500 text-center">
        <Separator className="max-w-[50%] mx-auto" />
        <div className="mt-10 flex items-center justify-center gap-5 max-md:flex-col max-md:text-sm text-base">
          {siteConfig.footer.map(item => (
            <AuroraText key={item.href} colors={['orange', 'purple']} className="font-bold hover:opacity-70">
              <Link href={item.href}>{item.title}</Link>
            </AuroraText>
          ))}

          <ResumeButton />

        </div>
        <p className="mt-8 text-sm">2025 @ vinicius.codes</p>
      </footer>
    </Fragment>
  )
}