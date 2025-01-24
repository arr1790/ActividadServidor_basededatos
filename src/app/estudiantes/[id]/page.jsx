import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaGrupo({ params, searchParams }) {
  const { id } =  await params; 

 

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Productos id={id}/>
    </Suspense>
  );
}

export default PaginaGrupo;


async function Productos ({id}) {

    const estudiante = await prisma.estudiante.findUnique({ where: { id: +id } });
    

    return ( 
    
        <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-blue-600 mb-4">Detalles del Estudiante</h1>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Nombre: <span className="font-normal">{estudiante.nombre}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Fecha de nacimiento: <span className="font-normal">{new Date(estudiante.fecha_nacimiento).toLocaleDateString()}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Foto: <span className="font-normal">{estudiante.foto || "No disponible"}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Tutor: <span className="font-normal">{estudiante.tutor_legal}</span>
        </p>
      </div>
      
    )
}