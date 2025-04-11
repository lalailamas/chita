"use client";
import { useRouter } from "next/navigation";

export default function FooterButtons() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="max-w-[600px] w-full px-4 py-4 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Label */}
      <label
        className="text-sm text-[#140D2D] underline underline-offset-2 cursor-pointer font-medium leading-[20px] tracking-[0.5px] text-center sm:text-left"
        onClick={handleRedirect}
      >
        No volver a mostrar
      </label>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-[10px] sm:ml-auto w-full sm:w-auto">
        <button
          className="text-[#FBBD2E] text-sm font-medium leading-[20px] tracking-[0.5px] px-4 py-2 rounded border-2 border-[#FBBD2E] w-full sm:w-[120px] h-[40px]"
          onClick={handleRedirect}
        >
          Cerrar
        </button>
        <button
          className="text-white text-sm font-medium px-4 py-2 rounded bg-[#FBBD2E] leading-[20px] tracking-[0.5px] w-full sm:w-[140px] h-[40px]"
          onClick={handleRedirect}
        >
          Sincronizar
        </button>
      </div>
    </div>
  );
}
