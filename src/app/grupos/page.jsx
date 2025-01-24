


import Modal from "@/components/Modal";
import { eliminarGrupo, insertarGrupo, modificarGrupo } from "@/lib/actions";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Suspense } from "react";

function PaginaGrupo() {

    return (
        <div>
           <h1 className="text-3xl font-bold text-center">Lista de grupos</h1>
            <Modal texto="abrir">
                <h1>Mi contenido</h1>
            </Modal>
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


        <div>
            

            <Modal texto={<button style={{ fontStyle: 'italic', color: 'white',background:'blue',justifyContent:'center',margin:'20px'}}>insertar</button>}>
            <form className="flex flex-col space-y-2 max-w-xs mx-auto" action={insertarGrupo}>
                <input className="px-4 py-2 border rounded-md" name="nombre" placeholder="Nombre" />
                <input className="px-4 py-2 border rounded-md" name="tutor" placeholder="Tutor" />
                <input className="px-4 py-2 border rounded-md" name="aula" placeholder="Aula" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3" type="submit">Insertar</button>
            </form>
            </Modal>

            <table className="w-auto table-auto border-collapse shadow-lg rounded-lg overflow-hidden mx-auto mt-9">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm w-1/4">Nombre</th>
                        <th className="px-4 py-2 text-left text-sm w-1/4">Tutor</th>
                        <th className="px-4 py-2 text-left text-sm w-1/4">Aula</th>
                        <th className="px-4 py-2 text-left text-sm w-1/4">Acciones</th>
                    </tr>
                </thead>
                <tbody>



                    {grupos.map((grupo) => (
                        <tr key={grupo.id} className="hover:bg-blue-50 transition-all duration-200">
                            <td className="px-4 py-2 border-b text-sm">{grupo.nombre}</td>
                            <td className="px-4 py-2 border-b text-sm">{grupo.tutor}</td>
                            <td className="px-4 py-2 border-b text-sm">{grupo.aula}</td>
                            <td>
                                <Modal texto ="Eliminar">
                                <div className="bg-red-100 border border-red-400 p-4 rounded-lg">
                                    <h2 className="text-2xl font-bold text-red-600 mb-4">¿Desea eliminar estos datos?</h2>
                                    <ul className="list-disc pl-8">
                                        <li className="text-lg font-semibold text-gray-800">Nombre: {grupo.nombre}</li>
                                        <li className="text-lg font-semibold text-gray-800">tutor: {grupo.tutor}</li>
                                        <li className="text-lg font-semibold text-gray-800">Aula: {grupo.aula}</li>
                                    </ul>
                                </div>
                                <form action={eliminarGrupo}>
                                    <input type="hidden" name="id" defaultValue={grupo.id} />
                                    <button>Eliminar</button>
                                </form>
                                </Modal>
                                <Modal texto="Modificar">
                                <form className="flex flex-col space-y-2 max-w-xs mx-auto" action={modificarGrupo}>
                                    <input className="px-4 py-2 border rounded-md" type="hidden" name="id" defaultValue={grupo.id} />
                                    <input className="px-4 py-2 border rounded-md" name="nombre" defaultValue={grupo.nombre} />
                                    <input className="px-4 py-2 border rounded-md" name="tutor"defaultValue={grupo.tutor} />
                                    <input className="px-4 py-2 border rounded-md" name="aula" defaultValue={grupo.aula} />
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3" type="submit">MODIFICAR</button>
                                </form>
                                </Modal>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>



        </div>


    );
}


