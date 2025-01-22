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

    const grupo = await prisma.grupo.findUnique({ where: { id: +id } });
    

    return ( 
    
     
            <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
              <h1 className="text-xl font-bold text-blue-600 mb-4">Detalles del Grupo</h1>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Grupo: <span className="font-normal">{grupo.nombre}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Tutor: <span className="font-normal">{grupo.tutor}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Aula: <span className="font-normal">{grupo.aula}</span>
              </p>
            </div>
          
      );
}

        
    