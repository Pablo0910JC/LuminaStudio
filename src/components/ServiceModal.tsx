import React from 'react';
import { ServiceItem, formatCurrencyCRC, formatCurrencyUSD, buildWhatsAppLink } from '../utils/pricing';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="relative h-44 bg-neutral-900 shrink-0">
          <img
            src={service.image}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
            <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
              {service.category} · Costa Rica 🇨🇷
            </span>
            <h3 id="modal-service-title" className="text-xl sm:text-2xl font-bold text-white font-display">
              {service.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div>
              <div className="text-xs text-neutral-500 font-medium">Tarifa regional cerrada:</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tabular-nums">
                {formatCurrencyCRC(service.priceCRC)}
              </div>
              <div className="text-xs text-blue-600 font-semibold mt-0.5">
                Equivalente internacional: {formatCurrencyUSD(service.priceUSD)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500 font-medium">Plazo de entrega:</div>
              <div className="text-sm font-bold text-neutral-800">{service.deliveryTime}</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Descripción del servicio
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Características Principales
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Entregables Finales
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-blue-600 font-bold shrink-0">📁</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-100 transition-colors"
          >
            Regresar
          </button>

          <a
            href={buildWhatsAppLink(
              service.name,
              `Hola Lumina, revisé los detalles de ${service.name} (${formatCurrency(service.priceUSD)}) y quiero iniciar mi proyecto.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Contratar {service.name.split('&')[0]} por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
