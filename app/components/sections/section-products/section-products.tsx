import Link from "next/link";
import Button from "../../button";
import { fontStim, fontDetection, fontAkas } from "../../logos/svgLogos";
import { Product } from "./product";
import Stage from "./stageSvg";

export default function SectionProductsA() {
  return (
    <section className="mt-12 mb-24">
      <Product>
        <div className="flex items-center gap-8">
          {/* <hr className="flex-1 h-px border-0 bg-secondary-text/50"></hr> */}
          <Product.Title title={fontStim} />
          <hr className="flex-1 h-px mr-32 border-0 bg-secondary-text/50"></hr>
        </div>
        <div className="flex flex-wrap h-[42rem]">
          <div className="flex flex-col justify-between flex-1 gap-8 my-14">
            <div className="flex flex-col gap-12 text-center md:text-left">
              <Product.SubTitle subTitle="음식을 삼키도록 도와주는 의료기기"/>
              <Product.Desc desc="RS-STIM은 환자의 목에 패드를 부착, 전기자극으로 식도의 근육을 이완시켜 음식물을 삼키도록 해 줍니다."/>
            </div>
            <div className="py-8 md:pl-12 z-10">
              <Link href='/product/rs-stim'>
                <Button className="w-full md:w-[34rem] py-10">
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center flex-auto">
            <div className="relative z-10"><Product.Img imgSrc="/imgs/rs-stim-a.png" alt="RS-STIM image" width={171} height={254}/></div>
            <div className="hidden md:block opacity-25 absolute bottom-[3rem]">
              <Stage />
            </div>
          </div>
        </div>
      </Product>
      <Product>
        <div className="flex items-center gap-8">
          {/* <hr className="flex-1 h-px border-0 bg-secondary-text/50"></hr> */}
          <Product.Title title={fontDetection} />
          <hr className="flex-1 h-px mr-32 border-0 bg-secondary-text/50"></hr>
        </div>
        <div className="flex flex-wrap h-[42rem]">
          <div className="flex flex-col justify-between flex-1 gap-8 my-14">
            <div className="flex flex-col gap-12 text-center md:text-left">
              <Product.SubTitle subTitle="연하장애 상태 모니터링 의료기기"/>
              <Product.Desc desc="RS-DETECTION으로 환자의 식전, 식후 목소리 분석을 통해 연하장애 상태를 확인 할수 있습니다."/>
            </div>
            <div className="py-8 md:pl-12 z-10">
              <Link href='/product/rs-detection'>
                <Button className="w-full md:w-[34rem] py-10">
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center flex-auto">
            <div className="relative z-10"><Product.Img imgSrc="/imgs/rs-detection-a.png" alt="RS-STIM image" width={88} height={0}/></div>
            <div className="hidden md:block opacity-25 absolute bottom-[3rem]">
              <Stage />
            </div>
          </div>
        </div>
      </Product>
      <Product>
        <div className="flex items-center gap-8">
          {/* <hr className="flex-1 h-px border-0 bg-secondary-text/50"></hr> */}
          <Product.Title title={fontAkas} />
          <hr className="flex-1 h-px mr-32 border-0 bg-secondary-text/50"></hr>
        </div>
        <div className="flex flex-wrap h-[42rem]">
          <div className="flex flex-col justify-between flex-1 gap-8 my-14">
            <div className="flex flex-col gap-12 text-center md:text-left">
              <Product.SubTitle subTitle="VFSS 영상 판독 의료 소프트웨어"/>
              <Product.Desc desc="AKAS-01은 VFSS 영상 분석을 통해 환자의 연하장애 상태를 정량적으로 판독할 수 있는 의료 소프트웨어 입니다."/>
            </div>
            <div className="py-8 md:pl-12 z-10">
              <Link href='/product/rs-akas'>
                <Button className="w-full md:w-[34rem] py-10">
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center flex-auto">
            <div className="relative z-10"><Product.Img imgSrc="/imgs/rs-akas-a.png" alt="RS-STIM image" width={242} height={254}/></div>
            <div className="hidden md:block opacity-25 absolute bottom-[3rem]">
              <Stage />
            </div>
          </div>
        </div>
      </Product>
      
    </section>
  )
}