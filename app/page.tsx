import { cn } from "@/lib/utils";
import Container from "./components/container";
import HomeHero from "./components/sections/hero/homeHero";
import SectionSolution from "./components/sections/section-solution/section-solution";
import SectionProductsA from "./components/sections/section-products/section-products";
import SectionProtectSolution from "./components/sections/section-protectSolution/protect-solution";

export default function Home() {
  return (
    <>
    <div className="pb-[9.4rem] md:pb-[12.8rem]">
      <Container className='pt-[6.4rem]'>
        <HomeHero />
      </Container>
    <div className={cn('relative z-[-1] h-[60rem] my-[-12.8rem] overflow-hidden mask-radial-faded',
          'before:absolute before:bg-radial-gradient [--color:#7877C6] before:opacity-40 before:inset-0',
          'after:absolute after:bg-background after:rounded-[50%] after:top-1/2 after:h-[142.8%] after:w-[200%] after:left-[-50%] after:border-t after:border-[rgba(120,118,197,0.4)]')} />
    <Container className="mt-[-20rem]">
      <SectionSolution />
    </Container>
    <Container>
      <SectionProductsA />
    </Container>
    <div className={cn('relative z-[-1] h-[60rem] my-[-12.8rem] overflow-hidden mask-radial-faded',
          'before:absolute before:bg-radial-gradient [--color:#7877C6] before:opacity-40 before:inset-0',
          'after:absolute after:bg-background after:rounded-[50%] after:top-1/2 after:h-[142.8%] after:w-[200%] after:left-[-50%] after:border-t after:border-[rgba(120,118,197,0.4)]')} />
        
    </div>
    <Container className="mt-[-20rem]">
      <SectionProtectSolution />
    </Container>
    </>
  )
}
