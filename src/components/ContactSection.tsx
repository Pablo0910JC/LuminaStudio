import React, { useState } from 'react';
import {
  COMPANY_CONTACT,
  SERVICES,
  buildWhatsAppLink,
  validateContactForm,
  ContactFormData,
  ValidationErrors
} from '../utils/pricing';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceId: SERVICES[0].id,
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceId: SERVICES[0].id,
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  return (
    <section id="contacto" className="py-20 lg:py-28 px-6 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Hablemos de tu idea
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-display">
            Datos de Contacto & Asesoría
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            Estamos disponibles para responder tus preguntas y cotizar tu proyecto sin compromiso. Puedes escribirnos directamente a WhatsApp o enviarnos el formulario.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Prominent WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-emerald-950 font-display">
                    Canal Directo de WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Respuesta rápida con un diseñador en turno
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Si buscas una respuesta rápida, un presupuesto inmediato o consultar disponibilidad, haz clic en el botón inferior para abrir WhatsApp Web o la app en tu teléfono.
              </p>

              <a
                href={buildWhatsAppLink(undefined, 'Hola Lumina Estudio, me comunico desde la sección de contacto para cotizar mi proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Chatear ahora: {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Detailed Data List */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  Correo Electrónico
                </div>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-sm font-bold text-neutral-900 hover:text-blue-600 transition-colors block mt-0.5"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  Ubicación de Oficinas
                </div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                  {COMPANY_CONTACT.address}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Atención presencial previa cita confirmada
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  Horario de Atención
                </div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                  {COMPANY_CONTACT.hours}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 font-display">
                    ¡Solicitud Enviada con Éxito!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Hemos registrado tu consulta para <strong>{formData.name}</strong> sobre <strong>{selectedService.name}</strong>. Te enviaremos una propuesta formal al correo <strong>{formData.email}</strong> y nos contactaremos a tu número <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppLink(
                        selectedService.name,
                        `Acabo de enviar el formulario web. Mi nombre es ${formData.name} y mi mensaje es: "${formData.message}"`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                      </svg>
                      <span>Acelerar atención vía WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-700 font-semibold text-sm hover:bg-neutral-100 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 font-display">
                      Formulario de Proyecto
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Completa los campos requeridos para recibir tu propuesta sin compromiso.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="input-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Ana Morales"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-neutral-300 focus:border-neutral-900'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="input-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Correo electrónico *
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ana@empresa.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-neutral-300 focus:border-neutral-900'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Teléfono / WhatsApp (+506) *
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+506 8712 3456"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-neutral-300 focus:border-neutral-900'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="select-service" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Servicio de interés
                      </label>
                      <select
                        id="select-service"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>
                            {s.name} (₡{s.priceCRC.toLocaleString()} CRC / ${s.priceUSD} USD)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="textarea-message" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Descripción del proyecto u objetivos *
                    </label>
                    <textarea
                      id="textarea-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos brevemente sobre tu negocio, tus metas o los requerimientos clave..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-neutral-300 focus:border-neutral-900'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-semibold text-sm transition-colors shadow-xs"
                  >
                    {isSubmitting ? 'Procesando mensaje...' : 'Enviar Solicitud de Cotización'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
