import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";
import { ctaSectionData } from "@/data";

export const CtaBanner: React.FC = () => {
  const {
    titlePrefix,
    titleHighlight,
    description,
    primaryAction,
    secondaryAction,
  } = ctaSectionData;

  return (
    <section
      id="seja-um-parceiro"
      className="relative w-full overflow-hidden bg-brand-navy py-12 sm:py-16 text-white scroll-mt-20"
      aria-label="Chamada para Parceria Institucional"
    >
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image02.jpg"
          alt="Paisagem de fundo do sertão nordestino"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
      </div>


      {/* Âncoras auxiliares para garantir que links do menu naveguem com segurança */}
      <div id="contato" className="absolute -top-20" />
      <div id="transparencia" className="absolute -top-20" />
      <div id="formas-de-ajudar" className="absolute -top-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Lado Esquerdo: Ícone e Mensagem de Parceria */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 max-w-2xl">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold ring-1 ring-brand-gold/30">
              <Handshake className="h-9 w-9 stroke-[1.75]" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {titlePrefix}{" "}
                <span className="text-brand-gold">{titleHighlight}</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Lado Direito: Botão Primário Dourado e Link Secundário */}
          <div className="flex flex-col items-center sm:items-end justify-center shrink-0 gap-3">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-gold px-8 py-3.5 text-sm sm:text-base font-bold text-brand-navy shadow-lg transition-all duration-200 hover:bg-brand-gold-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy cursor-pointer"
            >
              <span>{primaryAction.text}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
            </Link>
            
            <Link
              href={secondaryAction.href}
              className="text-xs sm:text-sm font-medium text-slate-300 underline underline-offset-4 transition-colors hover:text-white cursor-pointer"
            >
              {secondaryAction.text}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
