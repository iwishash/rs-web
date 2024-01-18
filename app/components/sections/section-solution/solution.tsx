import { cn } from "@/lib/utils"

type SolutionElementProps = {
  children: React.ReactNode;
}

type SolutionCardProps = {
  children: React.ReactNode;
  className?: string;
}

export function SolutionTitle({children}: SolutionElementProps) {
  return (
    <p className={cn('relative font-semibold text-4xl text-primary-text',
      'before:absolute before:w-full before:h-6 before:bg-teal-700 before:bottom-[-0.2rem] before:z-[-1] before:left-10'
    )}>{children}</p>
  )
}

export function SolutionCard({children, className}: SolutionCardProps) {
  return (
    <div className={cn("px-8 md:px-12 flex items-center justify-center w-4/5 border rounded-xl h-36 bg-transparent-white border-transparent-white",
      className
    )}>{children}</div>
  )
}

export function SolutionCardTitle({children}: SolutionElementProps) {
  return (
    <p className="text-center text-md text-primary-text text-nowrap min-w-[6.4rem]">{children}</p>
  )
}

export function SolutionCardDesc({children}: SolutionElementProps) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm text-secondary-text">{children}</div>
  )
}

export function SolutionCardIcon({children}: SolutionElementProps) {
  return (
    <div className="justify-end flex-1 hidden md:flex">{children}</div>
  )
}