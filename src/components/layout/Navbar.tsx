"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/data";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Início");

  // Fechar o menu móvel ao redimensionar para telas maiores
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fechar menu mobile com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav
      className="relative w-full bg-white transition-shadow"
      aria-label="Navegação Principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Logotipo Oficial */}
        <div className="flex-shrink-0">
          <Logo width={280} height={70} className="max-w-[190px] xs:max-w-[230px] sm:max-w-[280px]" />
        </div>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {mainNavigation.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "relative px-3 py-2 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap",
                  isActive
                    ? "text-brand-navy font-bold"
                    : "text-slate-700 hover:text-brand-blue"
                )}
              >
                {item.label}
                {/* Linha indicadora de ativo na referência visual */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-brand-blue"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Botão Hambúrguer Mobile */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu principal"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Drawer / Dropdown) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 shadow-lg lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {mainNavigation.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-brand-blue-light font-bold text-brand-navy"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="h-2 w-2 rounded-full bg-brand-blue"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
