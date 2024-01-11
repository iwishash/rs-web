import { ReactNode } from 'react';
import clsx from 'clsx';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx('max-w-[120rem] mx-auto px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
