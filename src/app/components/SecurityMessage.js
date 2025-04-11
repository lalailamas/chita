import Image from "next/image";

export default function SecurityMessage() {
  return (
    <div className="flex items-start text-[12px] text-gray-500 gap-2">
      <Image src="/lock.svg" alt="lock" width={24} height={24} />
      <p>
        Tus credenciales estarán encriptadas y solo podremos leer información,
        sin realizar ningún cambio. Además en cualquier momento podrás
        desactivarla desde el menú Sincronizaciones.
      </p>
    </div>
  );
}
