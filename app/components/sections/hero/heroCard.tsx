export default function HeroCard({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {children}
    </div>
  )
}

export function CardTitle({children}: {children: React.ReactNode}) {
  return (
    <p className="text-xl text-primary-text">{children}</p>
  )
}

export function CardLogo({children}: {children: React.ReactNode}) {
  return (
    <div className="flex justify-center items-center aspect-square rounded-full w-[18rem] bg-glass-gradient border border-transparent-white">{children}</div>
  )
}

export function CardDesc({children}: {children: React.ReactNode}) {
  return (
    <p className="text-md max-w-[24rem] md:max-w-[22rem] text-secondary-text">{children}</p>
  )
}