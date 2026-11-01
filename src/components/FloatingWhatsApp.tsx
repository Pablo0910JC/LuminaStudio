import React, { useState } from 'react';
import { COMPANY_CONTACT, buildWhatsAppLink } from '../utils/pricing';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-neutral-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-neutral-200">
          <span>¿Dudas? ¡Escríbenos a WhatsApp!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar sugerencia de WhatsApp"
            className="text-neutral-400 hover:text-neutral-600 text-sm ml-1"
          >
            ✕
          </button>
        </div>
      )}

      <a
        href={buildWhatsAppLink(undefined, 'Hola Lumina Estudio, estoy navegando en su sitio web y me gustaría información.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con Lumina Estudio Creativo"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </div>
  );
};
