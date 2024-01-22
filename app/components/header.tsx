'use client';

import Link from 'next/link';
import Container from './container';
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import Logo from './logos/rslogo';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// type MenuType = {
//   title: string
//   href: string
//   description: string
// }

// const products: MenuType[] = [
//   {
//     title: "RS-STIM",
//     href: "#",
//     description:
//       "연하장애 치료 NMES 제품",
//   },
//   {
//     title: "RS-DETECTION",
//     href: "#",
//     description:
//       "연하장애 진단 제품",
//   },
//   {
//     title: "AKAS-01",
//     href: "#",
//     description:
//       "연하장애 분석 소프트웨어",
//   },
//   {
//     title: "RS-PROTECTHIP",
//     href: "#",
//     description:
//       "고관절 탈구방지 제품",
//   },
// ]

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    if (hamburgerMenuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHambergerMenu = () => {
      setHamburgerMenuIsOpen(false);
    };
    window.addEventListener('resize', closeHambergerMenu);
    window.addEventListener('orientationchange', closeHambergerMenu);
    return () => {
      window.removeEventListener('resize', closeHambergerMenu);
      window.removeEventListener('orientationchange', closeHambergerMenu);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-xl z-40'>
      <Container className='flex h-navigation-height items-center justify-between'>
        <Link href='/'>
          <Logo />
        </Link>
        <div
          className={cn(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={cn(
              'fixed md:opacity-100 transition-opacity duration-500 md:relative h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto md:block top-navigation-height md:top-0 left-0 bg-background md:bg-transparent md:h-auto md:w-auto md:translate-x-0',
              hamburgerMenuIsOpen
                ? 'translate-x-0 opacity-100 '
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={cn(
                'ease-in h-full flex flex-col md:flex-row md:items-center md:pr-36 [&_a]:text-md',
                '[&_a]:h-navigation-height [&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:border-b [&_a]:border-grey-dark md:[&_a]:border-none [&_a:hover]:text-grey [&_a]:transition-[colors, transform] [&_a]:md:transition-colors [&_li]:mx-10 md:[&_a]:text-sm',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href={'/product'}>제품</Link>
              </li>
              <li>
                <Link href={'#'}>연구성과</Link>
              </li>
              <li>
                <Link href={'#'}>Press</Link>
              </li>
              <li>
                <Link href={'#'}>About Us</Link>
              </li>
              
            </ul>
          </nav>
        </div>
        
        <button
          className='block ml-6 md:hidden'
          onClick={() => {
            setHamburgerMenuIsOpen((open) => !open);
          }}
        >
          <span className='sr-only'>Toggle Menu</span>
          <Menu />
        </button>
        <div className='hidden md:block ml-6'><p className='text-sm'>Kor</p></div>
      </Container>
    </header>
  );
};

export default Header;

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// // eslint-disable-next-line react/prop-types
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
