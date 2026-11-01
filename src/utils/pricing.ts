export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  priceCRC: number;
  priceUSD: number;
  priceNote: string;
  category: string;
  deliveryTime: string;
  description: string;
  image: string;
  features: string[];
  deliverables: string[];
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Diseño Web & Landing Page Pro',
    tagline: 'Presencia digital moderna enfocada en conversión',
    priceCRC: 180000,
    priceUSD: 350,
    priceNote: 'Pago único por proyecto',
    category: 'Desarrollo Digital',
    deliveryTime: '7 a 10 días hábiles',
    description: 'Diseño y desarrollo de sitios web responsivos y optimizados para dispositivos móviles, integración de WhatsApp directa, SEO inicial y panel autoadministrable.',
    image: '/src/assets/images/service_web_design_1793549568399.jpg',
    popular: true,
    features: [
      'Diseño UI/UX 100% personalizado',
      'Adaptabilidad móvil, tablet y escritorio',
      'Optimización de velocidad y SEO On-Page',
      'Botones de contacto y WhatsApp costarricense (+506)',
      'Alojamiento y dominio guiado paso a paso'
    ],
    deliverables: [
      'Código fuente completo y responsive',
      'Guía de administración y actualización',
      'Configuración de dominio y SSL',
      'Soporte técnico por 30 días posteriores'
    ]
  },
  {
    id: 'branding',
    name: 'Identidad Visual & Branding',
    tagline: 'Logotipo y sistema gráfico memorable para tu negocio',
    priceCRC: 115000,
    priceUSD: 220,
    priceNote: 'Pago único por paquete completo',
    category: 'Diseño Gráfico',
    deliveryTime: '5 a 7 días hábiles',
    description: 'Creación integral de la identidad gráfica corporativa: logotipo en todos los formatos vectoriales, paleta cromática, combinaciones tipográficas y kit para redes sociales.',
    image: '/src/assets/images/service_branding_identity_1793549570364.jpg',
    popular: false,
    features: [
      '3 propuestas iniciales de logotipo',
      'Formatos vectoriales (AI, SVG, PDF, PNG)',
      'Paleta de colores Pantone y RGB/CMYK',
      'Tipografías corporativas y jerarquía',
      'Kit de perfiles y plantillas para redes sociales'
    ],
    deliverables: [
      'Manual de identidad corporativa en PDF',
      'Archivos editables en alta resolución',
      'Versiones para fondo claro, oscuro y monotono',
      'Favicon y miniaturas de avatar'
    ]
  },
  {
    id: 'marketing',
    name: 'Gestión de Redes & Anuncios Ads',
    tagline: 'Crecimiento de audiencia y atracción de prospectos calificados',
    priceCRC: 95000,
    priceUSD: 185,
    priceNote: 'Plan mensual sin contrato forzoso',
    category: 'Marketing Digital',
    deliveryTime: 'Activación en 72 horas',
    description: 'Estrategia integral de contenidos para Instagram y Facebook, producción de piezas gráficas y reels, gestión de campañas en Meta Ads o Google Ads para ventas continuas.',
    image: '/src/assets/images/service_digital_marketing_1793549571030.jpg',
    popular: false,
    features: [
      'Calendario editorial de 12 publicaciones mensuales',
      'Diseño gráfico profesional y copy persuasivo',
      'Configuración de campañas en Meta/Google Ads',
      'Segmentación de clientes en Costa Rica e internacional',
      'Informe mensual de rendimiento y métricas clave'
    ],
    deliverables: [
      '12 piezas gráficas/carruseles/reels optimizados',
      'Gestión de presupuesto publicitario',
      'Monitoreo semanal de comentarios y mensajes',
      'Reunión mensual de balance de resultados'
    ]
  }
];

export const COMPANY_CONTACT = {
  name: 'Lumina Estudio Creativo',
  tagline: 'Impulsamos marcas costarricenses con diseño, tecnología y estrategia digital',
  country: 'Costa Rica',
  countryCode: '+506',
  phoneDisplay: '+506 8712 3456',
  whatsappNumber: '50687123456',
  email: 'contacto@luminaestudio.cr',
  address: 'Barrio Escalante, San José, Costa Rica',
  hours: 'Lunes a Viernes: 8:30 AM – 6:00 PM (Hora Costa Rica)',
  githubRepoTemplate: 'https://github.com/new'
};

export function formatCurrencyCRC(amountCRC: number): string {
  return `₡${amountCRC.toLocaleString('es-CR')} CRC`;
}

export function formatCurrencyUSD(amountUSD: number): string {
  return `$${amountUSD.toLocaleString('en-US')} USD`;
}

export function formatDualPrice(amountCRC: number, amountUSD: number, preferred: 'CRC' | 'USD' = 'CRC'): string {
  if (preferred === 'CRC') {
    return `${formatCurrencyCRC(amountCRC)} (~${formatCurrencyUSD(amountUSD)})`;
  }
  return `${formatCurrencyUSD(amountUSD)} (~${formatCurrencyCRC(amountCRC)})`;
}

// Default formatter supporting both
export function formatCurrency(amount: number, currency: 'CRC' | 'USD' = 'CRC'): string {
  if (currency === 'CRC') {
    return formatCurrencyCRC(amount);
  }
  return formatCurrencyUSD(amount);
}

export function buildWhatsAppLink(serviceName?: string, customNote?: string): string {
  const base = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}`;
  let text = `¡Hola Lumina Estudio Creativo en Costa Rica! Me interesa obtener más información.`;
  if (serviceName) {
    text = `¡Hola Lumina Estudio (Costa Rica)! Quiero solicitar información y cotización sobre: *${serviceName}*.`;
  }
  if (customNote) {
    text += ` Nota adicional: ${customNote}`;
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Por favor ingresa tu nombre completo (mínimo 2 caracteres).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Por favor ingresa un correo electrónico válido.';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 8) {
    errors.phone = 'Por favor ingresa un número de teléfono válido (ej. +506 8712 3456).';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Por favor cuéntanos brevemente sobre tu proyecto (mínimo 10 caracteres).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function calculateTotalEstimate(
  serviceId: string, 
  addOns: string[], 
  discountCode?: string,
  currency: 'CRC' | 'USD' = 'CRC'
): { total: number; discount: number; finalTotal: number; currency: 'CRC' | 'USD' } {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  
  if (currency === 'CRC') {
    let total = service.priceCRC;
    if (addOns.includes('express')) total += 40000;
    if (addOns.includes('multilingual')) total += 60000;
    if (addOns.includes('maintenance')) total += 30000;

    let discount = 0;
    if (discountCode && discountCode.trim().toUpperCase() === 'EMPRENDE10') {
      discount = Math.round(total * 0.1);
    }

    return {
      total,
      discount,
      finalTotal: total - discount,
      currency: 'CRC'
    };
  }

  // USD
  let total = service.priceUSD;
  if (addOns.includes('express')) total += 80;
  if (addOns.includes('multilingual')) total += 120;
  if (addOns.includes('maintenance')) total += 60;

  let discount = 0;
  if (discountCode && discountCode.trim().toUpperCase() === 'EMPRENDE10') {
    discount = Math.round(total * 0.1);
  }

  return {
    total,
    discount,
    finalTotal: total - discount,
    currency: 'USD'
  };
}
