import React from "react";
import { BookOpen, Users, Sprout, Globe } from "lucide-react";
import { pillarsData } from "@/data";

export const PillarsBar: React.FC = () => {
  const getPillarConfig = (id: string) => {
    switch (id) {
      case "evangelizacao":
        return {
          icon: <BookOpen className="h-7 w-7 text-amber-600 shrink-0" strokeWidth={1.75} />,
          bg: "bg-amber-50",
        };
      case "acao-social":
        return {
          icon: <Users className="h-7 w-7 text-brand-blue shrink-0" strokeWidth={1.75} />,
          bg: "bg-brand-blue-light",
        };
      case "transformacao":
        return {
          icon: <Sprout className="h-7 w-7 text-emerald-600 shrink-0" strokeWidth={1.75} />,
          bg: "bg-emerald-50",
        };
      case "sem-fronteiras":
        return {
          icon: <Globe className="h-7 w-7 text-brand-blue shrink-0" strokeWidth={1.75} />,
          bg: "bg-brand-blue-light",
        };
      default:
        return {
          icon: <Globe className="h-7 w-7 text-brand-navy shrink-0" strokeWidth={1.75} />,
          bg: "bg-slate-50",
        };
    }
  };

  return (
    <section
      className="w-full bg-white border-y border-slate-200/80 shadow-xs"
      aria-label="Pilares de Atuação do Ministério"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillarsData.map((pillar, index) => {
            const config = getPillarConfig(pillar.id);
            return (
              <div
                key={pillar.id}
                className={`flex items-center gap-4 py-2 px-3 sm:px-4 rounded-xl transition-colors hover:bg-slate-50/80 ${
                  index < pillarsData.length - 1
                    ? "lg:border-r lg:border-slate-200/60"
                    : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${config.bg}`}
                >
                  {config.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold tracking-wider text-brand-navy uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
