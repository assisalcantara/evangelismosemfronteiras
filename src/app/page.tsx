import { Header } from "@/components/layout";
import {
  HeroSection,
  PillarsBar,
  FeaturedProject,
  ActionCardsGrid,
  MissionFieldSection,
  CtaBanner,
  MetricsBar,
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Header Institucional (TopBar + Navbar com Logo e Menu Responsivo) */}
      <Header />

      {/* Conteúdo da Landing Page */}
      <main className="flex-1">
        {/* 2. Hero Panorâmico com Isaías 58:12 e CTAs */}
        <HeroSection />

        {/* 3. Faixa dos 4 Pilares Institucionais */}
        <PillarsBar />

        {/* 4. Destaque: Projeto Sertão sem Fronteiras com Logo Oficial */}
        <FeaturedProject />

        {/* 5. Grid das 4 Frentes de Atuação com Cards e Ícones */}
        <ActionCardsGrid />

        {/* 6. Nosso Primeiro Campo: Distrito Casa de Pedra + Mapa de Expansão */}
        <MissionFieldSection />

        {/* 7. Banner de Conversão: Você também pode fazer parte */}
        <CtaBanner />
      </main>

      {/* 8. Faixa Final: Indicadores Institucionais e Promessa Bíblica (Jeremias 29:11) */}
      <MetricsBar />
    </div>
  );
}
