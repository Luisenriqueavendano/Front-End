"use client";

export default function ClienteCard({ inscripcion }) {
  const { nombres, apellidos, correo, tallerInfo } = inscripcion;

  return (
    <div className="card bg-white border-l-4 border-[#F0C808] shadow p-4">
      <h2 className="text-xl font-bold text-[#1B1F3B]">
        {nombres} {apellidos}
      </h2>
      <p className="text-sm text-gray-600">{correo}</p>
      <div className="mt-2">
        <p className="font-semibold text-[#D72638]">Taller: {tallerInfo.nombre}</p>
        <p className="text-sm text-gray-700">{tallerInfo.descripcion}</p>
        <p className="text-sm text-gray-700 italic">Profesor: {tallerInfo.profesor}</p>
      </div>
    </div>
  );
}
