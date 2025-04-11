import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-[#241752] mb-4">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-600 mb-6">
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#FBBD2E] text-white px-6 py-2 rounded font-medium hover:bg-yellow-500 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
