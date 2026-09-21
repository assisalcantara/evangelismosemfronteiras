import React from "react";
import { Users, Church, Heart, Globe } from "lucide-react";
import { metricsData, biblicalPromiseData } from "@/data";

export const MetricsBar: React.FC = () => {
  const getMetricIcon = (iconName: string) => {
    const iconProps = { className: "h-7 w-7 text-brand-navy shrink-0", strokeWidth: 1.75 };
    switch (iconName) {
      case "Users":
        return <Users {...iconProps} />;
      case "Church":
        return <Church {...iconProps} />;
      case "Heart":
        return <Heart {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <footer
      className="w-full bg-white border-t border-slate-200/80 py-10 sm:py-12"
      aria-label="Indicadores Institucionais e Compromisso Bíblico"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Indicadores Institucionais */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {metricsData.map((metric) => (
              <div key={metric.id} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-brand-navy shrink-0">
                  {getMetricIcon(metric.icon)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-extrabold text-brand-navy leading-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
                    {metric.label}
                  </span>
                  {metric.sublabel && (
                    <span className="text-[10px] text-slate-400 font-normal">
                      {metric.sublabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Citação Bíblica e Promessa de Jeremias 29:11 */}
          <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 text-left">
            <blockquote className="text-xs sm:text-sm italic text-slate-600 leading-relaxed font-serif">
              {biblicalPromiseData.quote}
            </blockquote>
            <cite className="mt-2 text-xs font-bold text-brand-navy not-italic tracking-wide">
              {biblicalPromiseData.reference}
            </cite>
          </div>

        </div>
      </div>
    </footer>
  );
};
