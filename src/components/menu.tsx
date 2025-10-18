'use client'

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuroraText } from "./magicui/aurora-text";
import ResumeButton from "./resume-button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

type MenuProps = {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  return (
    <header className={cn("fixed top-0 w-full px-4 py-2 transition-all duration-200 z-50 text-black bg-transparent flex flex-row justify-between dark:border-b dark:border-b-pink-500", {
      'dark:bg-background/60 bg-white/60 backdrop-blur-sm shadow-sm': isScrolling,
      'backdrop-blur-xs shadow-sm': theme === 'dark',
    }, className)}>
      <NavigationMenu>
        <NavigationMenuList className="[&>li]:hover:opacity-70 transition-opacity duration-400 font-bold dark:font-extrabold tracking-wider text-sm md:space-x-4 ">
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:bg-transparent">
              <AuroraText colors={["orange", "red", "purple"]} speed={.1}>
                Home
              </AuroraText>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:bg-transparent flex flex-row items-center justify-center gap-2" asChild>
              <Link href="https://www.linkedin.com/in/vncscds/" target="_blank" rel="noopener noreferrer">
                <Image src="./linkedin.svg" width={14} height={14} alt="Linkedin Icon" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:bg-transparent flex flex-row items-center justify-center gap-2" asChild>
              <Link href="https://www.linkedin.com/in/vncscds/" target="_blank" rel="noopener noreferrer">
                <Image src="./github.svg" width={14} height={14} alt="Linkedin Icon" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ResumeButton className="text-sm" />
      {/* <Button variant="ghost" className="hover:bg-transparent hover:opacity-70" asChild>
        <Link href="./resume.pdf" className="flex" download="resume.pdf" type="application/pdf">
          <AuroraText colors={["orange", "red", "purple"]} speed={.1} className="font-bold">
            Resumé
          </AuroraText>
          <DownloadIcon className="dark:text-pink-500 text-purple-500" />
        </Link>
      </Button> */}
    </header>
  )
}