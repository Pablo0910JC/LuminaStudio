/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Catalog } from './components/Catalog';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './utils/pricing';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Top Bar Navigation */}
      <Header onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quiénes Somos */}
        <AboutUs />

        {/* Catálogo de 3 Servicios con Precios */}
        <Catalog onSelectService={(service) => setSelectedService(service)} />

        {/* Datos de Contacto y Formulario */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Detail Modal for Catalog Services */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* GitHub Pages Tutorial & Download Modal */}
      <GitHubPagesModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
      />
    </div>
  );
}
