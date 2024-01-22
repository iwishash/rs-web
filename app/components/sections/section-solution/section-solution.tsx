import { SolutionCard, SolutionCardDesc, SolutionCardIcon, SolutionCardTitle, SolutionTitle } from "./solution";
import RsDetectionLogo from "../../logos/rs-detection-logo";
import RsAkasLogo from "../../logos/rs-akas-logo";
import RsStimLogo from "../../logos/rs-stim-logo";
import { ChevronDown } from 'lucide-react';

export default function SectionSolution() {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-10 pb-[12.8rem]">
          <SolutionTitle>연하장애 치료 솔루션</SolutionTitle>
          <p className="mx-auto text-lg text-secondary-text mt-12">
            RS REHAB은 연하장애 환자의 상태 데이터 수집, 분석, 치료, 모니터링을 통해 연하장애 치료 토탈 솔루션을 제공합니다. 
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-4 pt-14">
            <SolutionCard className="flex justify-start gap-12 divide-x divide-transparent-white">
              <div className="flex justify-center">
                <SolutionCardTitle>수집</SolutionCardTitle>
              </div>
              <div className="w-full px-14">
                <SolutionCardDesc>
                  <ul className="flex-1 leading-10 list-disc">
                    <li>환자의 연하장애 상태에 따른 삼킴 전/후 목소리</li>
                    <li>연하장애 VFSS 영상</li>
                  </ul>
                  <SolutionCardIcon>
                    <RsDetectionLogo />
                  </SolutionCardIcon>
                </SolutionCardDesc>
              </div>
            </SolutionCard>
            <ChevronDown size={48} color="#b4bcd0"/>
            <SolutionCard className="flex justify-start gap-12 divide-x divide-transparent-white">
              <div className="flex justify-center">
                <SolutionCardTitle>분석</SolutionCardTitle>
              </div>
              <div className="w-full px-14">
                <SolutionCardDesc>
                  <ul className="leading-10 list-disc">
                    <li>수집된 음성/영상 데이터 머신러닝 분석</li>
                  </ul>
                  <SolutionCardIcon>
                    <RsAkasLogo />
                  </SolutionCardIcon>
                </SolutionCardDesc>
              </div>
            </SolutionCard>
            <ChevronDown size={48} color="#b4bcd0" />
            <SolutionCard className="flex justify-start gap-12 divide-x divide-transparent-white">
              <div className="flex justify-center">
                <SolutionCardTitle>치료</SolutionCardTitle>
              </div>
              <div className="w-full px-14">
                <SolutionCardDesc>
                  <ul className="leading-10 list-disc">
                    <li>음식 삼킴 유도</li>
                    <li>지속적인 연하장애 재활</li>
                  </ul>
                  <SolutionCardIcon>
                    <RsStimLogo />
                  </SolutionCardIcon>
                </SolutionCardDesc>
              </div>
            </SolutionCard>
            <ChevronDown size={48} color="#b4bcd0" />
            <SolutionCard className="flex justify-start gap-12 divide-x divide-transparent-white">
              <div className="flex justify-center">
                <SolutionCardTitle>모니터링</SolutionCardTitle>
              </div>
              <div className="w-full px-14">
                <SolutionCardDesc>
                  <ul className="leading-10 list-disc">
                    <li>음식 삼킴 자가진단</li>
                    <li>지속적인 상태관리</li>
                  </ul>
                  <SolutionCardIcon>
                    <RsDetectionLogo />
                  </SolutionCardIcon>
                </SolutionCardDesc>
              </div>
            </SolutionCard>
          </div>
        </div>
    </>
  )
}