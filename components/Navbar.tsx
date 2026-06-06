"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`sticky top-0 z-50 border-b border-slate-200/70 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold text-xl text-primary">
          <Image src="/logo-1.png" alt="Cool Kids Logo" width={40} height={40} />
          COOL KIDS SPORT CENTER
        </Link>
        <nav className="hidden gap-8 md:flex text-sm font-semibold text-primary">
          <a href="/#venue" className="transition hover:text-accent">Mekanımız</a>
          <Link href="/hakkimizda" className="transition hover:text-accent">Hakkımızda</Link>
          <Link href="/sporlar" className="transition hover:text-accent">Sporlar</Link>
          <a href="/#contact" className="transition hover:text-accent">İletişim</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#contact"
            className="rounded-full border border-primary px-5 py-2 text-sm text-primary transition hover:bg-primary/5"
          >
            Ücretsiz Deneme
          </a>
          <a
            href="/#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(242,101,34,0.18)] transition hover:bg-orange-600"
          >
            Başvur
          </a>
        </div>
      </div>
    </motion.header>
  );
}
