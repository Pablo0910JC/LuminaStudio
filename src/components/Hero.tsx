import React from 'react';
import { buildWhatsAppLink, COMPANY_CONTACT } from '../utils/pricing';
import { downloadStandaloneHtml } from '../utils/standaloneHtml';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative py-16 lg:py-24 px-6 bg-gradient-to-b from-white via-neutral-50/50 to-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Value proposition & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Estudio de Diseño Web & Branding</span>
            <span aria-hidden="true">·</span>
            <span>San José, Costa Rica 🇨🇷</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            Diseñamos tu presencia digital y la convertimos en <span class="text-blue-600">ventas reales</span>.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Ayudamos a marcas y emprendedores en <strong>Costa Rica</strong> e internacional a proyectar máxima credibilidad con sitios web modernos, identidades visuales memorables y precios regionales transparentes en <strong>colones (₡ CRC)</strong> y <strong>dólares (USD)</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#catalogo"
              className="px-5 sm:px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Ver Catálogo con Precios</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href={buildWhatsAppLink(undefined, 'Hola, me comunico desde San José Costa Rica para una asesoría de diseño web')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>WhatsApp: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={downloadStandaloneHtml}
              className="px-4 py-3.5 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Descargar HTML</span>
            </button>
          </div>

          {/* Social Proof Strip - claim to proof adjacency */}
          <div className="pt-8 border-t border-neutral-200 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tabular-nums">120+</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Marcas en Costa Rica & LATAM</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tabular-nums">7 días</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Tiempo medio de entrega</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tabular-nums">99.4%</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Satisfacción verificada</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Asset */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-900 group">
            <img
              src="/src/assets/images/hero_creative_studio_1793549570075.jpg"
              alt="Instalaciones del estudio creativo Lumina en San José, Costa Rica"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                Diseño para Marcas en Costa Rica
              </span>
              <p className="text-white font-medium text-sm mt-1">
                Estrategia visual, código limpio y facturación en ₡ Colones o $ USD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
