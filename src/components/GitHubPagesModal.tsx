import React, { useState } from 'react';
import { generateStandaloneHtml } from '../utils/standaloneHtml';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showCodePreview, setShowCodePreview] = useState<boolean>(false);

  if (!isOpen) return null;

  const htmlContent = generateStandaloneHtml();

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-github-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 bg-neutral-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-lg">
              🚀
            </div>
            <div>
              <h3 id="modal-github-title" className="text-xl font-bold font-display">
                Guía de Alojamiento en GitHub Pages
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Cumple con el requisito de subir tu sitio a GitHub y obtener tu enlace público web.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de GitHub Pages"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Action Download Bar */}
          <div className="p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-blue-950">
                1. Descarga el archivo index.html listo
              </div>
              <p className="text-xs text-blue-800 mt-0.5">
                Código autónomo con todo el diseño, catálogo de 3 servicios y enlaces a WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs flex items-center justify-center gap-2 shrink-0"
            >
              <span>⬇ Descargar index.html</span>
            </button>
          </div>

          {/* Step by step guide */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Instrucciones paso a paso para GitHub Pages:
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <strong className="text-neutral-900 block mb-0.5">Crear repositorio público en GitHub</strong>
                  <span>Inicia sesión en GitHub y crea un nuevo repositorio público (ejemplo: <code>mi-sitio-web</code> o <code>lumina-estudio</code>).</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <strong className="text-neutral-900 block mb-0.5">Subir el archivo index.html</strong>
                  <span>Sube el archivo <code>index.html</code> que acabas de descargar a la raíz (rama <code>main</code>) de tu repositorio.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <strong className="text-neutral-900 block mb-0.5">Activar GitHub Pages</strong>
                  <span>En tu repositorio ve a la pestaña <strong>Settings</strong> &gt; sección izquierda <strong>Pages</strong>.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                <div>
                  <strong className="text-neutral-900 block mb-0.5">Configurar Source (Rama)</strong>
                  <span>En <em>Build and deployment</em> &gt; <em>Source</em>, elige <strong>Deploy from a branch</strong>. Selecciona la rama <code>main</code>, carpeta <code>/ (root)</code> y pulsa <strong>Save</strong>.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                <div>
                  <strong className="text-emerald-950 block mb-0.5">¡Tu enlace público queda activo!</strong>
                  <span>En 1 a 2 minutos tu sitio estará disponible globalmente en la URL pública: <code>https://&lt;tu-usuario&gt;.github.io/&lt;tu-repositorio&gt;/</code></span>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle View Raw Code */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={() => setShowCodePreview(!showCodePreview)}
                className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5"
              >
                <span>{showCodePreview ? '▼ Ocultar código HTML' : '▶ Ver o copiar código HTML directo'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCode}
                className="px-3 py-1 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                {copied ? '✓ ¡Código copiado!' : 'Copiar todo el código'}
              </button>
            </div>

            {showCodePreview && (
              <pre className="p-4 rounded-xl bg-neutral-950 text-neutral-200 text-xs font-mono max-h-60 overflow-y-auto overflow-x-auto border border-neutral-800">
                {htmlContent}
              </pre>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 flex justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            Entendido, cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
