'use client'

import { motion } from "framer-motion";
import Container from "@/app/components/container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "rs-stim", label: "RS-STIM" },
  { id: "rs-detection", label: "RS-DETECTION" },
  { id: "rs-akas", label: "AKAS-01" },
  { id: "rs-protecthip", label: "RS-PROTECTHIP" },
];

export default function ProductNav() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <Container>
      <div className="flex space-x-2 justify-center items-center mt-12">
        <div className="rounded-full border border-transparent-white bg-grey/15 py-2 md:py-3">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/product/${tab.id}`}
              className={cn('relative rounded-full px-4 md:px-6 py-3 md:py-4 text-sm md:text-md font-medium text-secondary-text/60 outline-sky-400 transition focus-visible:outline-2',
              {'text-primary-text': pathname === `/product/${tab.id}`},
              {'hover:text-white/40': pathname !== `/product/${tab.id}`}
              )}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === `/product/${tab.id}` && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-[0.12rem] z-10 bg-brand mix-blend-screen"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
