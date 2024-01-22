import Container from "@/app/components/container";
import { fontProtect } from "@/app/components/logos/svgLogos";
import { Product } from "@/app/components/sections/section-products/product";
import { cn } from "@/lib/utils";

export default function RsProtecthipPage() {
  return (
    <>
        <Container>
          <Product>
            <div className="flex justify-center items-center mt-20">
                <Product.Title title={fontProtect}/>
            </div>
          </Product>
        </Container>
        <div className={cn('relative z-[-1] h-[60rem] my-[-12.8rem] overflow-hidden mask-radial-faded',
            'before:absolute before:bg-radial-gradient [--color:#7877C6] before:opacity-40 before:inset-0',
            'after:absolute after:bg-background after:rounded-[50%] after:top-1/2 after:h-[142.8%] after:w-[200%] after:left-[-50%] after:border-t after:border-[rgba(120,118,197,0.4)]')} />
            
      </>
  )
}