import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/grupos" className="block">GRUPOS</Link>
      <Link href="/estudiantes" className="block">ESTUDIANTES</Link>
      <Link href="/asignaturas" className="block">ASIGNATURAS</Link>

    </div>
  );
}
