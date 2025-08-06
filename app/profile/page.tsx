import TabsHabilidades from '@/components/TabsHabilidades/TabsHabilidades';


export default function Home() {
    return (
        <section className="flex flex-col items-center justify-start h-full px-6 py-12 gap-12 overflow-y-scroll">
            <div className="flex flex-col md:flex-row items-center">
                {/* Imagen del sujeto */}
                <div className="text-center mb-6 md:mb-0 md:mr-12">
                    <img
                        src="\images\scanned-head.svg"
                        alt="Daniel Scandroglio"
                        className="w-64 h-64 p-2"
                    />
                    <h2 className="mt-4 text-xl uppercase text-[#FC6351] tracking-widest">Daniel Scandroglio</h2>
                </div>

                {/* Datos del sujeto */}
                <div className="border-t border-r border-[#FC6351] p-6 w-full max-w-3xl">
                    <h3 className="uppercase text-lg text-[#FC6351] mb-6 border-b border-[#FC6351] pb-2">
                        - Datos del Sujeto
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[#FC6351] font-mono text-sm">
                        <div>Nombre del Sujeto</div>
                        <div>Oscar Daniel Scandroglio Martinez</div>

                        <div>Fecha de Nacimiento</div>
                        <div>17 - Abr - 1991</div>

                        <div>Nacionalidad</div>
                        <div>Uruguay</div>

                        <div>Residencia</div>
                        <div>Montevideo</div>

                        <div>Rol</div>
                        <div>Frontend Developer</div>

                        <div>Experiencia</div>
                        <div>+5 Años</div>

                        <div>Especialidad</div>
                        <div>React / NextJS / Astro / Figma</div>

                        <div>Intereses</div>
                        <div>Industria gaming / entretenimiento</div>

                        <div>Status</div>
                        <div>Disponible para trabajar</div>
                        <div>Descripcion</div>
                        <div> frontend unicorn con visión creativa. no solo escribe código,
                            también propone ideas que aportan al concepto, diseño y funcionalidad
                            de las apps. su objetivo es construir experiencias digitales que dejen huella.</div>
                    </div>
                </div>
            </div>

            {/* Detalles de habilidades */}
            <div className="w-full max-w-5xl border-t border-[#FC6351] pt-6">
                <h3 className="uppercase text-lg text-[#FC6351] mb-4">
                    - Detalles de Habilidades
                </h3>
                <TabsHabilidades />
            </div>
        </section>
    );
}
