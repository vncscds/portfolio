'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-1 left-1 z-50 dark:hover:bg-transparent hover:bg-transparent hover:cursor-pointer hover:opacity-70"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden text-black" />
      <Moon className="hidden h-5 w-5 dark:block" />
    </Button>
  )
}