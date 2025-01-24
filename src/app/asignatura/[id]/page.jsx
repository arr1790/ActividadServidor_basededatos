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

    const grupo = await prisma.asignatura.findUnique({ where: { id: +id } });
    

    return ( 
    
     
            <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
              <h1 className="text-xl font-bold text-blue-600 mb-4">Detalles del Asignatura</h1>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Nombre: <span className="font-normal">{asignatura.nombre}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-2">
            Profesor: <span className="font-normal">{asignatura.profesor}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                tutor: <span className="font-normal">{asignatura.tutor}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Horas: <span className="font-normal">{asignatura.horas}</span>
              </p>
            </div>
          
      );
}
