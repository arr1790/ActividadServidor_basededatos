import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Suspense } from "react";

async function PaginaGrupo() {
    return (
        <div>
            <h1>Lista de Estudiantes</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Productos />
            </Suspense>
        </div>
    );
}

export default PaginaGrupo;

//-----------------------componente de servidor
async function Productos() {
    const estudiantes = await prisma.estudiante.findMany();

    return (
        <table className="w-auto table-auto border-collapse shadow-lg rounded-lg overflow-hidden mx-auto">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm w-1/4">Nombre</th>
            <th className="px-4 py-2 text-left text-sm w-1/4">Fecha de nacimiento</th>
            <th className="px-4 py-2 text-left text-sm w-1/4">Foto</th>
            <th className="px-4 py-2 text-left text-sm w-1/4">Tutor</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.id} className="hover:bg-blue-50 transition-all duration-200">
              <td className="px-4 py-2 border-b text-sm">{estudiante.nombre}</td>
              <td className="px-4 py-2 border-b text-sm">
                {new Date(estudiante.fecha_nacimiento).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border-b text-sm">{estudiante.foto || "No disponible"}</td>
              <td className="px-4 py-2 border-b text-sm">{estudiante.tutor_legal}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
      

    );
}
