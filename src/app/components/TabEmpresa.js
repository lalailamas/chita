import Image from "next/image";
import SecurityMessage from "./SecurityMessage";

export default function TabEmpresa() {
  return (
    <div className="space-y-6 text-[#241752] text-sm font-normal leading-[20px] tracking-[0.25px] pt-4">
      <p>
        Vincula tu cuenta del SII Empresa para sincronizar automáticamente tus
        facturas, recibir ofertas en cuanto las emitas y evita requisitos
        adicionales en tus operaciones.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1">Rut Empresa</label>
          <input
            type="text"
            className="w-full h-10 border border-gray-300 rounded-xs px-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1">Contraseña SII</label>
          <input
            type="password"
            className="w-full h-10 border border-gray-300 rounded-xs px-2 focus:outline-none"
          />
        </div>
      </div>

      <SecurityMessage />
    </div>
  );
}
