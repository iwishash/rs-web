import { cn } from "@/lib/utils";
import BusanLogo from "../logos/busan";
import ChoongbookLogo from "../logos/choongbook";
import EhwaLogo from "../logos/ehwa";
import JejuLogo from "../logos/jeju";
import KoreaLogo from "../logos/korea";
import SeoulLogo from "../logos/seoul";

type LogosProps = {
  className?: string;
};

export default function Logos({className}:LogosProps) {
  return (
    <div className={cn("w-full inline-flex flex-nowrap overflow-hidden ", '[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]',className)}>
      <ul className={cn("flex items-center justify-center md:justify-start animate-infinite-scroll",
      "[&_li]:mx-[3.2rem] [&_svg]:max-w-none"
      )}>
        <li>
          <SeoulLogo />
        </li>
        <li>
          <BusanLogo />
        </li>
        <li>
          <ChoongbookLogo />
        </li>
        <li>
          <EhwaLogo />
        </li>
        <li>
          <JejuLogo />
        </li>
        <li>
          <KoreaLogo />
        </li>
      </ul>
      <ul className={cn("flex items-center justify-center md:justify-start animate-infinite-scroll aria-hidden='true'",
      "[&_li]:mx-[3.2rem] [&_svg]:max-w-none"
      )}>
        <li>
          <SeoulLogo />
        </li>
        <li>
          <BusanLogo />
        </li>
        <li>
          <ChoongbookLogo />
        </li>
        <li>
          <EhwaLogo />
        </li>
        <li>
          <JejuLogo />
        </li>
        <li>
          <KoreaLogo />
        </li>
      </ul>
    </div>
  )
}