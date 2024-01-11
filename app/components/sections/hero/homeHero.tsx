import Button from '../../button';
import Logos from '../logos';
import { Hero, HeroSubtitle, HeroTitle, HeroSmallTitle, HeroSectionTitle, HeroSectionGuide } from './hero';
import Image from 'next/image';
import { cn } from '../../../../lib/utils'

const HomeHero = () => {
  return (
    <>
      <Hero>
        <div className='grid grid-cols-1 grid-rows-2 gap-20 md:grid-cols-2 md:grid-rows-1'>
          <div className='flex flex-col items-center justify-between h-auto gap-14'>
            <div className='flex flex-col'>
              <HeroTitle className='animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]'>
                데이터 분석에 기반한 혁신적인 연하장애 치료
              </HeroTitle>
              <HeroSmallTitle className='animate-fade-in [--animation-delay:300ms] opacity-0 translate-y-[-1rem]'>
              *연하장애(嚥下障碍): 음식물을 삼키는데 곤란을 격는 증상
              </HeroSmallTitle>
            </div>
            <HeroSubtitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'>
            RS-REHAB은 특허받은 기술인 <span className='text-teal-400'>순차적 자극 피팅 알고리즘</span>이 적용된 연하장애 치료 개발을 통해 삼킴 곤란 환자가 사용 즉시 음식을 삼킬 수 있도록 해줍니다.
            </HeroSubtitle>
            <Button
              href='#'
              variant='primary'
              size='large'
              className='w-full animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
            >
              제품 보기
            </Button>
          </div>
          <div className='h-auto animate-fade-in [--animation-delay:300ms] opacity-0 translate-y-[-1rem]'>
            <div className='flex items-center h-full'>
            <Image src='/imgs/hero1.jpg' width={681} height={469} alt='hero image1' className='object-cover rounded-2xl'/>
            {/* <Image src='/imgs/rs-stim1.png' width={200} height={260} alt='hero image2' className='absolute top-[15rem] left-[-5rem]'/> */}
            </div>
          </div>
        </div>
        <section className='mt-[14rem]'>
          <HeroSectionTitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'>
            과학적 근거에 기반한 재활 의료기기
          </HeroSectionTitle>
          <HeroSubtitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] text-left'>
            RS-REHAB은 비수술적인 요법으로 환자의 질환을 즉각적으로 개선시키는 의료기기 개발 및 보급을 지향합니다.
          </HeroSubtitle>
          <HeroSectionGuide className='mt-36 text-nowrap animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] text-left'>임상참여기관</HeroSectionGuide>
          <div className={cn('border border-secondary-text/5 rounded-xl w-full h-[10rem] px-16 py-4',
          'animate-fade-in [--animation-delay:450ms] opacity-0 translate-y-[-1rem]'
          )}><Logos /></div>
          
        </section>
      </Hero>
    </>
  );
};

export default HomeHero;