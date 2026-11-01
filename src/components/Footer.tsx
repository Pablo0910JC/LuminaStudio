import React from 'react';
import { COMPANY_CONTACT, buildWhatsAppLink } from '../utils/pricing';
import { downloadStandaloneHtml } from '../utils/standaloneHtml';

interface FooterProps {
  onOpenGitHubGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide }) => {
  return (
    <footer className="py-16 px-6 bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-white text-neutral-900 flex items-center justify-center font-extrabold text-lg">
                L
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {COMPANY_CONTACT.name}
              </span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded border border-neutral-700">
                Costa Rica 🇨🇷
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {COMPANY_CONTACT.tagline}. Diseñamos y desarrollamos soluciones web, identidad visual y campañas digitales con facturación en Colones (CRC) y Dólares (USD).
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegación
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Catálogo de Servicios</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto & Cotización</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGitHubGuide}
                  className="hover:text-blue-400 text-neutral-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Guía GitHub Pages</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded">Tutorial</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Canales Oficiales en Costa Rica
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <span className="text-neutral-500">WhatsApp: </span>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Email: </span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-neutral-300 hover:text-white">
                  {COMPANY_CONTACT.email}
                </a>
              </p>
              <p className="text-neutral-400">
                {COMPANY_CONTACT.address}
              </p>
              <p className="text-neutral-500 text-xs">
                {COMPANY_CONTACT.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-neutral-500">
          <div>
            © 2026 {COMPANY_CONTACT.name}. San José, Costa Rica. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>Desarrollado con Asistencia de IA</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={downloadStandaloneHtml}
              className="text-blue-400 hover:underline cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>⬇ Descargar index.html autónomo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
