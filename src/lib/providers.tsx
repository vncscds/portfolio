import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="class"
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={true}
    >
      {children}
      <ThemeToggle />
    </ThemeProvider>
  )
}