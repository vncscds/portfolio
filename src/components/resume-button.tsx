import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";

type ResumeButtonProps = {
  className?: string;
}

export default function ResumeButton({ className }: ResumeButtonProps) {
  return (
    <Link href="./resume.pdf" download="resume.pdf" type="application/pdf" className={cn("flex flex-row items-center gap-1.5 hover:opacity-70", className)}>
      <AuroraText colors={["orange", "red", "purple"]} speed={.1} className="font-bold">
        Resumé
      </AuroraText>
      <DownloadIcon className="dark:text-pink-500 text-purple-500" size={18} />
    </Link>
  )
}