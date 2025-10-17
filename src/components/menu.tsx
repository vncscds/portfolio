'use client'

import clsx from "clsx";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuroraText } from "./ui/aurora-text";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export default function Menu() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

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
    <header className={clsx("fixed top-0 w-full px-4 py-2 transition-all duration-200 z-50 text-black bg-transparent flex flex-row justify-between", {
      'bg-white/60 backdrop-blur-sm shadow-sm': isScrolling
    })}>
      <NavigationMenu>
        <NavigationMenuList className="[&>li]:hover:opacity-70 transition-opacity duration-400 font-bold tracking-wider text-sm space-x-4">
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
                <Image src="./linkedin.svg" width={12} height={12} alt="Linkedin Icon" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:bg-transparent flex flex-row items-center justify-center gap-2" asChild>
              <Link href="https://www.linkedin.com/in/vncscds/" target="_blank" rel="noopener noreferrer">
                <Image src="./github.svg" width={12} height={12} alt="Linkedin Icon" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="ghost" className="hover:bg-transparent" asChild>
        <Link href="./resume.pdf" className="flex" download="resume.pdf" type="application/pdf">
          <AuroraText colors={["orange", "red", "purple"]} speed={.1} className="font-bold">
            Resumé
          </AuroraText>
          <DownloadIcon />
        </Link>
      </Button>
    </header>
  )
}