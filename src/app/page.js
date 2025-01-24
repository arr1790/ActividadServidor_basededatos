import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col items-center space-y-4">
      <Link href="/grupos" className="block px-4 py-2 text-xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        GRUPOS
      </Link>
      <Link href="/estudiantes" className="block px-4 py-2 text-xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        ESTUDIANTES
      </Link>
      <Link href="/asignatura" className="block px-4 py-2 text-xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        ASIGNATURAS
      </Link>
    </div>
  );
}
