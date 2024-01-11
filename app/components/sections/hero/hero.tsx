import { cn } from "@/lib/utils";
import { Play } from 'lucide-react';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={cn(
        'text-6xl md:text-6xl font-semibold my-6 mb-8 text-gradient',
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroSmallTitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={cn(
        'text-sm md:text-md my-6 mb-8 text-slate-500',
        className
      )}
    >
      {children}
    </div>
  );
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={cn(
        'text-md md:text-lg mb-12 text-secondary-text',
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroSectionTitle = ({children, className}: HeroElementProps) => {
  return (
    <div className={cn(
      'text-lg text-left font-bold md:text-3xl mb-12 text-primary-text',
      className)}>{children}</div>
  )
}

export const HeroSectionGuide = ({children, className}: HeroElementProps) => {
  return (
    <div className={cn(
      'text-md text-left md:text-lg mb-12 text-secondary-text flex items-center gap-6',
      className)}>
        <div className="flex items-center gap-2">
          <Play color="#B9B8C4" fill="#B9B8C4" size={18}/>
          {children}
        </div>
        <hr className="w-full h-px border-0 bg-grey/60"/>
    </div>
  )
}