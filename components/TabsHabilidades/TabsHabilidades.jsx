'use client';
import { useState } from 'react';

const tabs = ['Desarrollador', 'UX/UI', 'Product Owner'];

const TabsHabilidades = () => {
    const [activeTab, setActiveTab] = useState('Desarrollador');

    return (
        <div className="w-full max-w-5xl">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-[#FC6351] pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 uppercase tracking-widest text-sm font-mono border border-[#FC6351] transition-all duration-300 
              ${activeTab === tab
                                ? 'bg-[#FC6351] text-black'
                                : 'text-[#FC6351] hover:bg-[#FC6351] hover:text-black'
                            }`}
                    >
                        {tab}_
                    </button>
                ))}
            </div>

            {/* Contenido de cada tab */}
            <div className="text-[#FC6351] font-mono text-sm leading-relaxed border-l border-[#FC6351] pl-4">
                {activeTab === 'Desarrollador' && (
                    <ul className="list-disc list-inside">
                        <li>Frontend avanzado (React, NextJS, Astro, TypeScript)</li>
                        <li>Integración con APIs, SSR/SSG, consumo eficiente de datos</li>
                        <li>Gestión de estado con Zustand, Redux, Context API</li>
                        <li>Testing con Vitest, React Testing Library</li>
                        <li>Pipeline CI/CD, control de versiones (Git, GitLab)</li>
                    </ul>
                )}
                {activeTab === 'UX/UI' && (
                    <ul className="list-disc list-inside">
                        <li>Diseño de interfaces en Figma con enfoque funcional</li>
                        <li>Experiencia en prototipado y user flows</li>
                        <li>Microinteracciones con GSAP, Framer Motion</li>
                        <li>Uso avanzado de TailwindCSS y diseño responsive</li>
                        <li>Coherencia entre sistema de diseño y desarrollo</li>
                    </ul>
                )}
                {activeTab === 'Product Owner' && (
                    <ul className="list-disc list-inside">
                        <li>Visión de producto centrada en el usuario final</li>
                        <li>Priorización de funcionalidades y roadmap</li>
                        <li>Testing de concepto y validación temprana</li>
                        <li>Capacidad de traducir objetivos de negocio a features</li>
                        <li>Trabajo colaborativo con equipos multidisciplinarios</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TabsHabilidades;
