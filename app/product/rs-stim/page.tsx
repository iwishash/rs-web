import Container from "@/app/components/container";
import { cn } from "@/lib/utils";
import { fontStim } from "@/app/components/logos/svgLogos";
import { Product } from "@/app/components/sections/section-products/product";

export default function RsStimPage() {
  return (
      <>
        <Container>
          <Product>
            <div className="flex justify-center items-center mt-20">
                <Product.Title title={fontStim}/>
            </div>
            <p className="text-center text-md py-20 max-w-[64rem] mx-auto">RS-STIM은 음식 삼킴이 곤란한 환자가 바로 음식을 삼킬 수 있도록 개발된 세계 최초의  의료기기로 삼킴 운동을 동반하기 때문에 기존 기기에 비해서 월등한 재활치료효과가 있으며 가정에서도 사용 가능하도록 개발되어 음식물이 기도로 흡인되지 않도록 해 줍니다. </p>
            <div className="flex justify-center">
              <Product.Img imgSrc="/imgs/rs-stim-a.png" alt="RS-STIM image" width={171} height={254}/>
            </div>
          </Product>
        </Container>
        <div className={cn('relative z-[-1] h-[60rem] mt-[-25.6rem] mb-[-12.8rem] overflow-hidden mask-radial-faded',
            'before:absolute before:bg-radial-gradient [--color:#7877C6] before:opacity-40 before:inset-0',
            'after:absolute after:bg-background after:rounded-[50%] after:top-1/2 after:h-[142.8%] after:w-[200%] after:left-[-50%] after:border-t after:border-[rgba(120,118,197,0.4)]')} />
            
      </>
  )
}