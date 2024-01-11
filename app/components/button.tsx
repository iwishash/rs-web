import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

// interface ButtonProps extends VariantProps<typeof buttonClasses> {
//   children: React.ReactNode;
//   className?: string;
//   href: string;
// }

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps & (ButtonAsLinkProps | ButtonAsButtonProps);

const buttonClasses = cva('rounded-lg inline-flex items-center justify-center', {
  variants: {
    variant: {
      primary: [
        'bg-brand hover:text-shadow hover:bg-brand-select hover:shadow-primary transition-[shadow,text-shadow] ease-in',
      ],
      secondary: [
        'text-secondary-text bg-white bg-opacity-10 border border-transparent-white hover:text-shadow backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
      ],
      tertiary: '',
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 py-4 h-[6rem]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <div className='highlight'>{children}</div>;
};

export default Button;
