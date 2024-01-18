import { cn } from "@/lib/utils"
import Image from "next/image";
import React from "react";

type ProductProps = {
  children: React.ReactNode;
}

type ProductTitleProps = {
  title: React.FC;
}
type ProductSubTitleProps = {
  subTitle: string;
}

type ProductDescProps = {
  desc: string;
}

type ProductBtnProps = {
  children: React.ReactNode;
}

type ProductImgProps = {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
}

export function Product({children}: ProductProps) {
  return (
    <section
      // ref={ref}
      className='relative flex flex-col pb-[8rem] w-full
      after:absolute after:inset-0
      after:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'
      // style={{ '--feature-color': color } as CSSProperties}
    >
    <div className={cn('w-full')}>{children}</div>
    </section>
  )
}

function ProductTitle({title}: ProductTitleProps) {
  const Title = title
  return (
    <div><Title /></div>
  )
}

function ProductSubTitle({subTitle}:ProductSubTitleProps) {
  return (
    <p className="pl-12 text-lg text-primary-text text-nowrap min-w-[6.4rem]">{subTitle}</p>
  )
}

function ProductDesc({desc}: ProductDescProps) {
  return (
    <p className="pl-12 text-sm md:text-md text-secondary-text max-w-[42rem]">{desc}</p>
  )
}

function ProductBtn({children}: ProductBtnProps) {
  return (
    <div className="mb-12">{children}</div>
  )
}

function ProductImg({imgSrc, alt, width, height}: ProductImgProps) {
  return (
    <div><Image src={imgSrc} alt={alt} width={width} height={height} /></div>
  )
}

Product.Title = ProductTitle;
Product.SubTitle = ProductSubTitle;
Product.Desc = ProductDesc;
Product.Btn = ProductBtn;
Product.Img = ProductImg;