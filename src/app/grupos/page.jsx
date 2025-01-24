import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Suspense } from "react";
async function PaginaGrupo() {

    return (
        <div>
            <h1>Lista de Grupos</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Productos />
            </Suspense>
        </div>
    )

}
export default PaginaGrupo;


//-----------------------componente de servidor


async function Productos() {
    const grupos = await prisma.grupo.findMany()
    // console.log(grupos)

    return (
        <table className="w-auto table-auto border-collapse shadow-lg rounded-lg overflow-hidden mx-auto">
            <thead className="bg-blue-600 text-white">
                <tr>
                    <th className="px-4 py-2 text-left text-sm w-1/4">Nombre</th>
                    <th className="px-4 py-2 text-left text-sm w-1/4">Tutor</th>
                    <th className="px-4 py-2 text-left text-sm w-1/4">Aula</th>
                </tr>
            </thead>
            <tbody>
                {grupos.map((grupo) => (
                    <tr key={grupo.id} className="hover:bg-blue-50 transition-all duration-200">
                        <td className="px-4 py-2 border-b text-sm">{grupo.nombre}</td>
                        <td className="px-4 py-2 border-b text-sm">{grupo.tutor}</td>
                        <td className="px-4 py-2 border-b text-sm">{grupo.aula}</td>
                    </tr>
                ))}
            </tbody>
        </table>




    );
}


