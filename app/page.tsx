'use client'

import Menu from "@/components/menu";
import { AuroraText } from "@/components/ui/aurora-text";
import { DotPattern } from "@/components/ui/dot-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";
import { WordRotate } from "@/components/ui/word-rotate";
import clsx from "clsx";
import { Fragment } from "react";

const buttons = [
  {
    href: 'https://github.com/vncscds',
    icon: './github.svg',
    alt: 'Github Logo'
  },
  {
    href: 'https://www.linkedin.com/in/vncscds/',
    icon: './linkedin.svg',
    alt: 'Linkedin Logo'
  }
]

export default function HomePage() {
  return (
    <Fragment>
      <Menu />
      <main className="overflow-hidden bg-white text-black">
        <RetroGrid angle={10} cellSize={85} />
        <div className="flex flex-col justify-center items-center h-screen">
          <AuroraText className="text-5xl md:text-6xl font-extrabold block" colors={['orange', 'purple']} speed={1.5}>
            vinicius.codes
          </AuroraText>
          <div className="flex flex-row items-center gap-2 text-gray-500 text-lg md:text-xl">
            <span>building</span>
            <WordRotate words={["apps", "websites", "experiences"]} />
          </div>
          {/* <footer className="absolute bottom-5 right-10 space-x-4">
          {buttons.map(button => (
            <Button key={button.icon} variant="link" size="icon" className="hover:cursor-pointer">
              <Link href={button.href} target="_blank" rel="noopener noreferrer" scroll={false} prefetch={false}>
                <Image src={button.icon} alt={button.alt} width={30} height={30} />
              </Link>
            </Button>
          ))}
        </footer> */}
        </div>
        <section className="relative p-16">
          <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
            <DotPattern
              className={clsx(
                "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)] opacity-35"
              )}
            />
          </div>
          <div className="absolute top-[25%] w-screen max-md:top-[50%] max-md:transform max-md:translate-y-[-65%]">
            <div className="flex flex-col gap-6 max-md:gap-10">
              <div className="text-center md:text-left md:max-w-[350px] md:ml-[10%] max-md:w-[70%]">
                <AuroraText colors={['orange', 'purple']} className="font-bold text-3xl">
                  About me.
                </AuroraText>
                {/* <HyperText className="text-black font-bold">About me.</HyperText> */}
                <p className="text-gray-500 font-medium">My name is Vinícius Gonçalves. I create impactful websites and mobile apps. I deliver user-focused applications for web and native platforms.</p>
              </div>
              <div className="text-center md:max-w-[650px] md:ml-auto md:text-right md:px-32 md:mr-[10%] max-md:w-[70%]">
                <AuroraText colors={['orange', 'purple']} className="font-bold text-3xl">
                  Skills.
                </AuroraText>
                {/* <HyperText className="text-black font-bold">About me.</HyperText> */}
                <p className="text-gray-500 font-medium">React, React Native and Next.js. Also, I develop native apps using Kotlin (Jetpack Compose).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}