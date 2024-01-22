'use client'
import { motion as m, useInView } from 'framer-motion'
import Image from 'next/image';
import { useRef } from 'react'

export default function HeroSvg() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", once: true });

    return (
        <div ref={ref} className='mt-[12rem] relative w-full'>
            <m.div 
                className='flex justify-center mx-auto'
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                transition={{ delay: 3.6, duration: 3.2 }}
                >
                <Image src='/imgs/rs-stim-3d.png' width={198} height={316} alt='product image1'/>
            </m.div>
            <m.div
                
                className='absolute z-[-1] inset-0 flex justify-center mx-auto opacity-40'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 3.5, duration: 2 }}
            >
                <svg
                width={198}
                height={316}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <m.g
                    clipPath="url(#prefix__clip0_2046_3259)"
                    stroke="#858699"
                    strokeWidth={0.7}
                    strokeMiterlimit={10}
                >
                    <m.path
                    initial={{pathLength: 0}}
                    animate={ isInView && {pathLength: 1}}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                    d="M7.12 11.53L154.09 2.1c5.6-.36 11.22.2 16.62 1.72 7.08 2 16.27 5.68 22.12 12.2 1.8 2 2.79 4.59 2.81 7.27.19 32.36-6.14 232.74-6.99 259.45a3.67 3.67 0 01-2.99 3.49L38.58 314.29c-1.34.26-2.72.09-3.97-.47-3.42-1.54-10.65-4.97-15.82-8.67-3.64-3.03-7.34-7.46-9.46-10.15a8.486 8.486 0 01-1.83-5.12L2 17.67c0-.53.12-2.15.36-2.62l.64-1.3a5.616 5.616 0 014.12-2.23v.01z" />
                    {/* <m.path
                    initial={{pathLength: 0}}
                    animate={ isInView && {pathLength: 1}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M34.6 313.84L31.85 32.15a3.773 3.773 0 013.57-3.86l160.13-8.6" /> */}
                    <m.path
                    initial={{pathLength: 0}}
                    animate={ isInView && {pathLength: 1}}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    d="M44.29 39.85l141.42-10.51-2.61 97.74s-20.62 6.4-34.83 8.15c-7.92.97-19.71-3.86-33.75-2.33-16.26 1.77-16.05 8.98-34.09 10.7-9.64 1.6-33.09-.65-35.25-.39-.01-1.91-.89-103.35-.89-103.35v-.01z" />
                    {/* <m.path
                    initial={{pathLength: 0}}
                    animate={ isInView && {pathLength: 1}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M45.18 143.21c0-2.66-.89-103.35-.89-103.35l139.56-10.37" /> */}
                    <m.path
                    initial={{pathLength: 0}}
                    animate={ isInView && {pathLength: 1}}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    d="M55.6 58.85l116.16-9.75v65.62L56.7 127.8l-1.1-68.95zM161.59 281.07c3.33-1.61 6.21-3.66 8.61-5.77 5.71-4.99 8.92-12.25 9.08-19.83.62-28.64 2.46-113.75 2.46-121.02-4.09 0-14.8 4.53-16.42 5.23-.14.06-.29.11-.44.15l-27.02 6.86c-.39.1-.8-.08-1.01-.42-1.22-2.02-6.16-8.46-19.63-8.27-13.47.19-21.28 11.3-23.37 14.74-.38.62-1.07.98-1.79.94l-27.17-1.5-19.72-1.09s1.11 131.7 1.55 136.12c.31 3.06 2.4 6.39 5.67 9.3 3.02 2.68 7.12 3.78 11.12 3.16 19.96-3.07 88.14-13.8 98.07-18.6h.01z" />
                    <m.path
                    initial={{opacity: 0}}
                    animate={ isInView && {opacity: 1}}
                    transition={{ delay: 2.4, duration: 1 }}
                    d="M116.28 176.32c7.136 0 12.92-6.51 12.92-14.54s-5.784-14.54-12.92-14.54c-7.135 0-12.92 6.51-12.92 14.54s5.785 14.54 12.92 14.54zM71.42 184c6.136 0 11.11-4.974 11.11-11.11 0-6.136-4.974-11.11-11.11-11.11-6.136 0-11.11 4.974-11.11 11.11 0 6.136 4.974 11.11 11.11 11.11zM95.11 200.45a9.42 9.42 0 10-.001-18.841 9.42 9.42 0 000 18.841zM136.411 194.472c4.835-.285 8.502-4.803 8.19-10.09-.313-5.287-4.486-9.342-9.321-9.057-4.835.286-8.501 4.804-8.189 10.091.312 5.287 4.485 9.342 9.32 9.056zM158.05 172.57c5.407 0 9.79-5.064 9.79-11.31s-4.383-11.31-9.79-11.31c-5.407 0-9.79 5.064-9.79 11.31s4.383 11.31 9.79 11.31zM70.49 231.67c5.622 0 10.18-4.558 10.18-10.18s-4.558-10.18-10.18-10.18-10.18 4.558-10.18 10.18 4.558 10.18 10.18 10.18zM100.78 238.21a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM129.19 233.05a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM158.05 217.85a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM158.05 253.69a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM129.19 269.45a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM100.78 274.63a9.71 9.71 0 009.71-9.71 9.71 9.71 0 00-9.71-9.71 9.71 9.71 0 00-9.71 9.71 9.71 9.71 0 009.71 9.71zM70.99 269.22c5.633 0 10.2-4.567 10.2-10.2 0-5.633-4.567-10.2-10.2-10.2-5.633 0-10.2 4.567-10.2 10.2 0 5.633 4.567 10.2 10.2 10.2zM70.49 231.67v17.15M100.78 238.21v17.01M129.19 233.05v16.98M158.05 217.85v16.42" />
                </m.g>
                <defs>
                    <clipPath id="prefix__clip0_2046_3259">
                    <path
                        fill="#858699"
                        transform="translate(.5 .5)"
                        d="M0 0h196.63v315.42H0z"
                    />
                    </clipPath>
                </defs>
                </svg>
            </m.div>
            <m.div 
                className='z-[-1] flex justify-center mx-auto absolute inset-0'
                initial={{ opacity: 0 }}
                animate={{ animation:'image-glow 2100ms ease-out forwards'}}
                transition={{ delay: 3.5, duration: 2 }}
            >
                <div className='z-0 w-[19rem] h-[30rem] bg-hero-glow mx-auto blur-2xl animate-image-glow'/>
            </m.div>
        </div>
  )
}