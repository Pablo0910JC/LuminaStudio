import React, { useState } from 'react';
import { buildWhatsAppLink } from '../utils/pricing';
import { downloadStandaloneHtml } from '../utils/standaloneHtml';

interface HeaderProps {
  onOpenGitHubGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGitHubGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a 
          href="#inicio" 
          className="text-xl font-bold tracking-tight text-neutral-900 font-display whitespace-nowrap shrink-0 flex items-center gap-2.5"
          aria-label="Lumina Estudio Creativo inicio"
        >
          <span className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-extrabold text-lg shadow-sm" aria-hidden="true">
            L
          </span>
          <span>Lumina Estudio</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md border border-neutral-200">
            <span>Costa Rica</span>
            <span>🇨🇷</span>
          </span>
        </a>

        {/* Zone 2: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-neutral-600" aria-label="Navegación principal">
          <a href="#inicio" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
            Inicio
          </a>
          <a href="#quienes-somos" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
            Quiénes Somos
          </a>
          <a href="#catalogo" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
            Servicios & Precios (CRC/USD)
          </a>
          <a href="#contacto" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
            Contacto
          </a>
          <button 
            type="button"
            onClick={onOpenGitHubGuide}
            className="hover:text-blue-600 font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-700 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Guía GitHub Pages</span>
          </button>
        </nav>

        {/* Zone 3: Actions (Direct HTML download, WhatsApp & Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct 1-Click HTML Download button */}
          <button
            type="button"
            onClick={downloadStandaloneHtml}
            title="Descargar archivo index.html para GitHub Pages"
            className="px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Descargar</span>
            <span>index.html</span>
          </button>

          {/* Costa Rica WhatsApp Button */}
          <a
            href={buildWhatsAppLink(undefined, 'Consulta desde la barra principal')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="text-[11px] sm:hidden">(+506)</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#quienes-somos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
          >
            Quiénes Somos
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
          >
            Catálogo de Servicios & Precios (CRC / USD)
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
          >
            Datos de Contacto (Costa Rica)
          </a>
          
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                downloadStandaloneHtml();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-neutral-900 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>⬇ Descargar index.html autónomo</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full text-left py-2 text-sm font-semibold text-blue-600 hover:underline flex items-center justify-between"
            >
              <span>Guía de Alojamiento GitHub Pages</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Paso a Paso</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
