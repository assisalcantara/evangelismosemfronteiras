"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { siteConfig } from "@/data";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui";

export const TopBar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Preparado para integração com sistema de busca institucional
      console.log("Busca institucional:", searchQuery);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return <InstagramIcon size={14} className="transition-transform hover:scale-110" />;
      case "Facebook":
        return <FacebookIcon size={14} className="transition-transform hover:scale-110" />;
      case "Youtube":
        return <YoutubeIcon size={14} className="transition-transform hover:scale-110" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full border-b border-slate-100 bg-white text-xs text-slate-600">
      <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Slogan Oficial */}
          <span className="hidden text-xs font-normal text-slate-500 sm:inline-block">
            {siteConfig.slogan}
          </span>

          {/* Divisor em telas maiores */}
          <span className="hidden h-3 w-px bg-slate-200 sm:inline-block" aria-hidden="true" />

          {/* Redes Sociais */}
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${social.name} do Ministério Evangelismo sem Fronteiras`}
                className="text-slate-700 transition-colors hover:text-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-blue"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Busca */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar no site..."
                  autoFocus
                  className="w-32 bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none sm:w-44"
                />
                <button
                  type="submit"
                  aria-label="Confirmar busca"
                  className="p-0.5 text-slate-600 hover:text-brand-navy"
                >
                  <Search className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Fechar busca"
                  className="p-0.5 text-slate-400 hover:text-slate-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Abrir campo de busca"
                className="p-0.5 text-slate-700 transition-colors hover:text-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-blue cursor-pointer"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
