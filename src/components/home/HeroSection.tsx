import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data";

export const HeroSection: React.FC = () => {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[560px] md:min-h-[620px] lg:min-h-[680px] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Imagem de Fundo Panorâmica */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero02.png"
          alt={hero.bgImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay de Contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl text-left">

          {/* Tag Superior / Pre-title */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase">
              {hero.preTitle}
            </span>
            <span className="h-0.5 w-6 bg-brand-gold/80" aria-hidden="true" />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {hero.titlePrefix}{" "}
            <span className="text-brand-gold">{hero.titleHighlight}</span>{" "}
            {hero.titleSuffix}
          </h1>

          {/* Texto Descritivo Institucional */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl">
            {hero.description}
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-gold px-6 py-3.5 text-sm sm:text-base font-bold text-brand-navy shadow-lg transition-all duration-200 hover:bg-brand-gold-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 cursor-pointer"
            >
              <Heart className="h-4 w-4 fill-brand-navy text-brand-navy" aria-hidden="true" />
              <span>{hero.primaryCta.text}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-black/25 backdrop-blur-xs px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              <span>{hero.secondaryCta.text}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
