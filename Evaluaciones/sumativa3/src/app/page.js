"use client";

import { useEffect, useState } from "react";
import ClienteCard from "../components/ClienteCard";

export default function Page() {
  const [inscripciones, setInscripciones] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resInscripciones = await fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/inscripciones.json");
        const resTalleres = await fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/talleres.json");

        const dataInscripciones = await resInscripciones.json();
        const dataTalleres = await resTalleres.json();

        const talleresMap = {};
        dataTalleres?.forEach(t => {
          if (t) talleresMap[t.id] = t;
        });

        const inscripcionesCompletas = dataInscripciones?.filter(i => i).map(ins => ({
          ...ins,
          tallerInfo: talleresMap[ins.taller] || {},
        })) || [];

        setInscripciones(inscripcionesCompletas);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-[#D72638] font-montserrat">Listado de Inscripciones</h1>
        <p className="eslogan text-[#F0C808] text-lg">Talleres Urbanos 2025</p>
      </header>
      {cargando ? (
        <p className="text-center text-gray-500">Cargando datos...</p>
      ) : inscripciones.length === 0 ? (
        <p className="text-center text-gray-500">No hay inscripciones disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inscripciones.map((inscripcion) => (
            <ClienteCard key={inscripcion.id} inscripcion={inscripcion} />
          ))}
        </div>
      )}
    </main>
  );
}