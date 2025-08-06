'use client';
import React from 'react';
import Button from '@/components/Buttons/Button'; // ajustá el path si es necesario

const Sidebar = () => {
  const buttons = [
    { label: 'perfil', tag: 'R1', href: '/profile' },
    { label: 'proyectos', tag: 'R2', href: '/proyectos' },
    { label: 'ux/ui', tag: 'R3', href: '/uxui' },
    { label: 'contacto', tag: 'R4', href: '/contacto' },
  ];

  return (
    <aside className="w-64 h-full p-0 relative border-2 border-[#FC6351] bg-[#262322] flex flex-col">
      {/* Triángulo decorativo */}
      <div className="relative h-48 w-full border-b border-[#FC6351]">
        <div
          className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#262322]
          border-l border-b-2 border-[#FC6351] rotate-45
          translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div
            className="absolute top-0 left-0 w-[100px] h-[100px] bg-[#1a1a1a]
            border-l border-[#FC6351] rotate-45 translate-x-1/2 -translate-y-1/2 z-20 border-2"
          />
        </div>
      </div>

      {/* Botones del menú */}
      <nav className="flex flex-col gap-3 px-4 py-2">
        {buttons.map(({ label, tag, href }) => (
          <a href={href} key={label}>
            <Button
              label={label}
              tag={tag}
              className="!min-w-full !h-[65px] !text-left !pl-4"
            />
          </a>
        ))}
      </nav>

      {/* Extensión inferior */}
      <div className="flex-1 border-t border-[#FC6351] mt-auto" />
    </aside>
  );
};

export default Sidebar;
