import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjectData } from "@/data";

export const FeaturedProject: React.FC = () => {
  const {
    badge,
    titlePrefix,
    titleHighlight,
    logo,
    description,
    cta,
    image,
  } = featuredProjectData;

  return (
    <section
      id="sertao-sem-fronteiras"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 scroll-mt-20 border-b border-slate-100"
      aria-labelledby="featured-project-heading"
    >
      {/* Âncora alternativa para suporte ao item de menu Quem Somos */}
      <div id="quem-somos" className="absolute -top-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Badge / Pré-título PROJETO */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase">
            {badge}
          </span>
          <span className="h-0.5 w-8 bg-brand-gold/80" aria-hidden="true" />
        </div>

        {/* Layout em 3 Colunas: Logo Ilustrada | Texto + Botão | Fotografia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Coluna 1: Logomarca Oficial do Projeto Sertão sem Fronteiras */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Coluna 2: Título Editorial, Descrição e Botão de Ação */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            <h2
              id="featured-project-heading"
              className="text-2xl sm:text-3xl font-black tracking-tight text-brand-navy leading-tight"
            >
              {titlePrefix}{" "}
              <span className="text-brand-gold">{titleHighlight}</span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>

            <div className="mt-6">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-brand-navy-light hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 cursor-pointer"
              >
                <span>{cta.text}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Coluna 3: Fotografia do Menino Sertanejo com Enquadramento Suave */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-3xl shadow-md border border-slate-100 aspect-[4/3] sm:aspect-[4/3] w-full max-w-[360px] bg-slate-50">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
