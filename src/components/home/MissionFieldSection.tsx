import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { missionFieldData } from "@/data";

export const MissionFieldSection: React.FC = () => {
  const { badge, title, description, cta, map, churchImage, aerialImage } =
    missionFieldData;

  return (
    <section
      id="campos-missionarios"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 scroll-mt-20"
      aria-labelledby="mission-field-heading"
    >
      {/* Âncora invisível para suporte ao link direto campo-casa-de-pedra */}
      <div id="campo-casa-de-pedra" className="absolute -top-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Principal: Imagem do Templo + Conteúdo e Mapa */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Coluna da Esquerda: Fotografia do Templo */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/70 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] w-full bg-slate-100">
              <Image
                src={churchImage.src}
                alt={churchImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Coluna da Direita: Conteúdo Institucional + Mapa de Expansão */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Bloco de Texto e Botão de Ação */}
              <div className="md:col-span-7 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase">
                  {badge}
                </span>

                <h2
                  id="mission-field-heading"
                  className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-brand-navy leading-tight"
                >
                  {title}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {description}
                </p>

                <div className="mt-6">
                  <Link
                    href={cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-brand-navy hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 cursor-pointer"
                  >
                    <span>{cta.text}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Bloco do Mapa de Expansão Regional */}
              <div className="md:col-span-5 flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
                <div className="relative h-44 w-full max-w-[200px]">
                  <Image
                    src={map.imageSrc}
                    alt={map.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bloco Complementar: Registro Aéreo da Localidade de Casa de Pedra */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 p-4 sm:p-6 shadow-xs">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/70 aspect-[21/9] sm:aspect-[21/9] md:aspect-[24/9] w-full bg-slate-200">
            <Image
              src={aerialImage.src}
              alt={aerialImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* Legenda Institucional Discreta */}
          <div className="mt-3 flex items-center justify-between gap-2 px-1 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-brand-blue shrink-0" aria-hidden="true" />
              <span className="font-medium text-slate-600">
                {aerialImage.caption}
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] text-slate-400">
              Local de implantação do Projeto Sertão sem Fronteiras
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
