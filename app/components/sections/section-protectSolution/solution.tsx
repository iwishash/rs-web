import { cn } from "@/lib/utils";

type ProtectTitleProps = {
  children: React.ReactNode;
}

export function ProtectTitle({children}: ProtectTitleProps) {
  return (
    <p className={cn('relative font-semibold text-4xl text-primary-text',
      'before:absolute before:w-full before:h-6 before:bg-teal-700 before:bottom-[-0.2rem] before:z-[-1] before:left-10'
    )}>{children}</p>
  )
}