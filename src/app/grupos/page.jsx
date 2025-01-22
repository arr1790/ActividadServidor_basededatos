import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Suspense } from "react";
async function PaginaGrupo() {

    return (
        <div>
            <h1>Lista de Productos</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Productos />
            </Suspense>
        </div>
    )

}
export default PaginaGrupo;


//-----------------------componente de servidor


async function Productos () {
    const grupos = await prisma.grupo.findMany()
    // console.log(grupos)

    return ( 
        <div>

           
                {
                grupos.map(grupo => 
                    <div className=" border-blue-500 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200" key={grupo.id}>
                        Nombre:{grupo.nombre}
                        <p>Tutor:{grupo.tutor}</p>
                        <p>Aula:{grupo.aula}</p>
                    
                    </div>
                   
                )}
       
        </div>



      );
}

        
    