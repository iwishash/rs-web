import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-[120rem] mx-auto px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
