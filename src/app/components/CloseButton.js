"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-end max-w-[600px] min-h-[56px] py-4 px-6 ">
      <button
        className="w-[24px] h-[24px] bg-transparent border-none cursor-pointer"
        onClick={handleRedirect}
      >
        <Image src="/close.svg" alt="X" width={24} height={24} />
      </button>
    </div>
  );
}
