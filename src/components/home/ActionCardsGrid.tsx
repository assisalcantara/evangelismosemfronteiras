import React from "react";
import { actionCardsData } from "@/data";
import { ActionCard } from "./ActionCard";

export const ActionCardsGrid: React.FC = () => {
  return (
    <section
      className="w-full bg-slate-50/50 pb-16 sm:pb-20 lg:pb-24 pt-4"
      aria-label="Frentes de Atuação do Projeto Sertão sem Fronteiras"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid de 4 Colunas Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {actionCardsData.map((card) => (
            <ActionCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
