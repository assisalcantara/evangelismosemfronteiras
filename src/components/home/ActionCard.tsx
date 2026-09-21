import React from "react";
import Image from "next/image";
import { Check, GraduationCap, Monitor, Users, Heart } from "lucide-react";
import { ActionCardItem } from "@/types";

interface ActionCardProps {
  card: ActionCardItem;
}

export const ActionCard: React.FC<ActionCardProps> = ({ card }) => {
  const getCardIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5 text-white", strokeWidth: 2 };
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap {...iconProps} />;
      case "Monitor":
        return <Monitor {...iconProps} />;
      case "UsersRound":
      case "Users":
        return <Users {...iconProps} />;
      case "Heart":
        return <Heart {...iconProps} className="h-5 w-5 fill-white text-white" />;
      default:
        return <Heart {...iconProps} />;
    }
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Imagem do Card com Proporção Otimizada */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Ícone Circular Flutuante na Divisão */}
      <div className="relative px-5">
        <div
          className={`-mt-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full ${card.iconBgColor} shadow-md ring-4 ring-white`}
          aria-hidden="true"
        >
          {getCardIcon(card.iconName)}
        </div>
      </div>

      {/* Corpo de Conteúdo */}
      <div className="flex flex-1 flex-col p-5 pt-2.5">
        {/* Título da Frente em Destaque */}
        <h3 className="text-base sm:text-lg font-bold text-brand-navy leading-snug">
          {card.title}
        </h3>

        {/* Lista de Benefícios com Ícone de Check */}
        <ul className="mt-3.5 flex-1 space-y-2" role="list">
          {card.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600">
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-navy"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
