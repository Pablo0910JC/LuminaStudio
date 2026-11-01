import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 lg:py-28 px-6 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Identidad y Filosofía
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-display">
            Quiénes Somos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            En <strong>Lumina Estudio Creativo</strong>, con base en <strong>San José, Costa Rica</strong>, fusionamos la precisión del desarrollo de software moderno con la sensibilidad del diseño visual editorial. Nacimos con una convicción clara: las empresas y emprendimientos costarricenses merecen herramientas digitales del más alto nivel internacional con tarifas regionales claras y transparentes.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 font-display">
              Un equipo apasionado por la excelencia visual y técnica en Costa Rica
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              No creemos en plantillas genéricas ni en procesos burocráticos. Cada proyecto que desarrollamos pasa por una fase de investigación personalizada, entendiendo el mercado costarricense y la propuesta de valor única de tu negocio.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Nuestro compromiso no concluye al entregar los archivos; te capacitamos en su uso, configuramos tus canales directos de venta (WhatsApp +506) y te brindamos garantía técnica para que avances con total seguridad.
            </p>

            {/* Core Values / Editorial List */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-semibold text-neutral-500 uppercase">01. Enfoque Orientado a Resultados</div>
                <div className="text-sm text-neutral-800 font-medium mt-1">
                  Páginas rápidas y optimizadas para transformar visitantes en llamadas, mensajes y cotizaciones.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-semibold text-neutral-500 uppercase">02. Transparencia de Costos & Tiempos</div>
                <div className="text-sm text-neutral-800 font-medium mt-1">
                  Presupuestos cerrados sin letras pequeñas, entregables vectoriales originales y cronogramas estrictos.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-semibold text-neutral-500 uppercase">03. Atención Directa y Humana</div>
                <div className="text-sm text-neutral-800 font-medium mt-1">
                  Canal directo de comunicación constante por WhatsApp y videollamada durante cada fase del proyecto.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-100">
              <img
                src="/src/assets/images/about_team_creative_1793549571385.jpg"
                alt="Diseñadores del equipo Lumina colaborando en un proyecto"
                referrerPolicy="no-referrer"
                className="w-full h-96 lg:h-[480px] object-cover"
              />
              <div className="p-5 bg-white border-t border-neutral-200">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">Taller Creativo Lumina</span>
                  <span>Metodología Ágil · Entrega Garantizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
