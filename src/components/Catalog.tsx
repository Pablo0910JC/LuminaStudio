import React, { useState } from 'react';
import {
  SERVICES,
  ServiceItem,
  formatCurrencyCRC,
  formatCurrencyUSD,
  buildWhatsAppLink,
  calculateTotalEstimate
} from '../utils/pricing';

interface CatalogProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currency, setCurrency] = useState<'CRC' | 'USD'>('CRC');
  
  // Interactive mini calculator state
  const [selectedCalcServiceId, setSelectedCalcServiceId] = useState<string>(SERVICES[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<string>('');
  const [discountMessage, setDiscountMessage] = useState<string>('');

  const toggleAddon = (addonKey: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonKey) ? prev.filter(k => k !== addonKey) : [...prev, addonKey]
    );
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === 'EMPRENDE10') {
      setAppliedDiscount('EMPRENDE10');
      setDiscountMessage('¡Cupón EMPRENDE10 aplicado con éxito! 10% de descuento.');
    } else {
      setAppliedDiscount('');
      setDiscountMessage('Cupón inválido. Prueba con "EMPRENDE10".');
    }
  };

  const calculation = calculateTotalEstimate(selectedCalcServiceId, selectedAddons, appliedDiscount, currency);
  const selectedServiceObj = SERVICES.find(s => s.id === selectedCalcServiceId) || SERVICES[0];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="catalogo" className="py-20 lg:py-28 px-6 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Currency & Category Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Precios Regionales Costa Rica & Internacional
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-display">
              Catálogo de Servicios & Tarifas
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Consulta nuestra oferta principal de 3 servicios especializados con tarifas en <strong>Colones Costarricenses (₡ CRC)</strong> y <strong>Dólares (USD)</strong>, con botón de contratación directa a WhatsApp (+506).
            </p>
          </div>

          {/* Controls: Currency switch & category filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Currency selector toggle */}
            <div className="flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-xl shadow-xs">
              <span className="text-[11px] font-semibold text-neutral-500 px-2">Moneda:</span>
              <button
                type="button"
                onClick={() => setCurrency('CRC')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  currency === 'CRC'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-900'
                }`}
              >
                ₡ Colones (CRC)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  currency === 'USD'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-900'
                }`}
              >
                $ USD (Dólares)
              </button>
            </div>

            {/* Interactive filter tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === 'all'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Todos (3)
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('desarrollo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === 'desarrollo'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Web
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('diseño')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === 'diseño'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Branding
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('marketing')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === 'marketing'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Marketing
              </button>
            </div>
          </div>
        </div>

        {/* 3 Main Product/Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isHighlighted = service.popular;
            const primaryPrice = currency === 'CRC' 
              ? formatCurrencyCRC(service.priceCRC) 
              : formatCurrencyUSD(service.priceUSD);
            const secondaryPrice = currency === 'CRC' 
              ? `Equivalente: ${formatCurrencyUSD(service.priceUSD)}` 
              : `Equivalente: ${formatCurrencyCRC(service.priceCRC)}`;

            return (
              <div
                key={service.id}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                  isHighlighted ? 'border-blue-600 ring-1 ring-blue-600 shadow-md' : 'border-neutral-200 shadow-xs'
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-900/85 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {`0${index + 1}. ${service.category}`}
                  </div>
                  {isHighlighted && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Destacado en CR
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 font-display">
                      {service.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      {service.tagline}
                    </p>

                    {/* Regional Price Block */}
                    <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tabular-nums">
                          {primaryPrice}
                        </span>
                        <span className="text-xs text-neutral-500 font-medium">
                          {service.priceNote}
                        </span>
                      </div>
                      <div className="text-xs text-blue-600 font-semibold mt-1">
                        {secondaryPrice}
                      </div>
                      <div className="text-xs text-neutral-600 mt-1 flex items-center gap-1.5">
                        <span className="font-semibold text-neutral-700">Plazo en Costa Rica:</span>
                        <span>{service.deliveryTime}</span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="mt-5 space-y-2.5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Incluye en el paquete:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold text-sm shrink-0" aria-hidden="true">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions: View Details Modal & WhatsApp Costa Rica */}
                  <div className="pt-4 border-t border-neutral-100 space-y-2">
                    <a
                      href={buildWhatsAppLink(
                        service.name,
                        `Quiero contratar ${service.name} con tarifa de ${formatCurrencyCRC(service.priceCRC)} / ${formatCurrencyUSD(service.priceUSD)}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                      </svg>
                      <span>Pedir por WhatsApp (+506)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="w-full py-2 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs transition-colors"
                    >
                      Ver Entregables & Detalles
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Quote Calculator Block with Costa Rica Colones */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Calculadora de Presupuesto Rápido (Costa Rica)
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                Personaliza tu cotización en {currency === 'CRC' ? 'Colones (CRC)' : 'Dólares (USD)'}
              </h3>
              <p className="text-sm text-neutral-600">
                Selecciona tu servicio base y añade los complementos que desees. Aplica el cupón <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs font-bold">EMPRENDE10</code> para obtener un 10% de descuento directo.
              </p>

              {/* Service Radio Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-700 block">Servicio Base:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SERVICES.map(srv => {
                    const priceLabel = currency === 'CRC' 
                      ? formatCurrencyCRC(srv.priceCRC) 
                      : formatCurrencyUSD(srv.priceUSD);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedCalcServiceId(srv.id)}
                        className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                          selectedCalcServiceId === srv.id
                            ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                            : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-bold font-display">{srv.name.split('&')[0]}</div>
                        <div className="text-[11px] opacity-80 mt-0.5">{priceLabel}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Addons Checklist */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-700 block">Complementos Opcionales:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => toggleAddon('express')}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-colors flex items-center justify-between ${
                      selectedAddons.includes('express')
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Entrega Exprés (+48h)</span>
                    <span className="font-mono text-[11px]">{currency === 'CRC' ? '+₡40,000' : '+$80'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleAddon('multilingual')}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-colors flex items-center justify-between ${
                      selectedAddons.includes('multilingual')
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Sitio Bilingüe (EN/ES)</span>
                    <span className="font-mono text-[11px]">{currency === 'CRC' ? '+₡60,000' : '+$120'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleAddon('maintenance')}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-colors flex items-center justify-between ${
                      selectedAddons.includes('maintenance')
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Mantenimiento 60 días</span>
                    <span className="font-mono text-[11px]">{currency === 'CRC' ? '+₡30,000' : '+$60'}</span>
                  </button>
                </div>
              </div>

              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  placeholder="Código de cupón (ej. EMPRENDE10)"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-neutral-300 bg-white flex-1 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </form>
              {discountMessage && (
                <p className={`text-xs ${appliedDiscount ? 'text-emerald-600 font-medium' : 'text-rose-600'}`}>
                  {discountMessage}
                </p>
              )}
            </div>

            {/* Total summary box */}
            <div className="lg:col-span-5 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Resumen de Cotización ({currency})
              </div>
              
              <div className="space-y-2 text-xs text-neutral-600 border-b border-neutral-200 pb-4">
                <div className="flex justify-between">
                  <span>{selectedServiceObj.name}</span>
                  <span className="font-mono tabular-nums font-semibold">
                    {currency === 'CRC' ? formatCurrencyCRC(selectedServiceObj.priceCRC) : formatCurrencyUSD(selectedServiceObj.priceUSD)}
                  </span>
                </div>
                {selectedAddons.map(addon => (
                  <div key={addon} className="flex justify-between text-neutral-500">
                    <span>
                      {addon === 'express' && 'Entrega Exprés'}
                      {addon === 'multilingual' && 'Soporte Bilingüe'}
                      {addon === 'maintenance' && 'Mantenimiento extendido'}
                    </span>
                    <span className="font-mono tabular-nums">
                      {currency === 'CRC' ? (
                        addon === 'express' ? '+₡40,000 CRC' : addon === 'multilingual' ? '+₡60,000 CRC' : '+₡30,000 CRC'
                      ) : (
                        addon === 'express' ? '+$80 USD' : addon === 'multilingual' ? '+$120 USD' : '+$60 USD'
                      )}
                    </span>
                  </div>
                ))}
                {calculation.discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Descuento (EMPRENDE10)</span>
                    <span className="font-mono tabular-nums">
                      -{currency === 'CRC' ? formatCurrencyCRC(calculation.discount) : formatCurrencyUSD(calculation.discount)}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs text-neutral-500">Total estimado:</div>
                <div className="text-3xl font-extrabold text-neutral-900 font-display tabular-nums mt-0.5">
                  {currency === 'CRC' ? formatCurrencyCRC(calculation.finalTotal) : formatCurrencyUSD(calculation.finalTotal)}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {currency === 'CRC' 
                    ? `Aprox. $${Math.round(calculation.finalTotal / 515)} USD` 
                    : `Aprox. ₡${(calculation.finalTotal * 515).toLocaleString()} CRC`}
                </div>
              </div>

              <a
                href={buildWhatsAppLink(
                  selectedServiceObj.name,
                  `Cotización calculada para Costa Rica: Total ${currency === 'CRC' ? formatCurrencyCRC(calculation.finalTotal) : formatCurrencyUSD(calculation.finalTotal)}${calculation.discount > 0 ? ' (con cupón EMPRENDE10)' : ''} con complementos: [${selectedAddons.join(', ') || 'ninguno'}]`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Enviar Cotización a WhatsApp (+506)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
