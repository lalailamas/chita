"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function openModal() {
    router.push("/modal");
  }

  return (
    <div className="flex items-center justify-center px-4">
      <button
        onClick={openModal}
        className="bg-[#FBBD2E] h-10 min-w-[120px] w-[143px] px-2 rounded 
             text-white text-sm leading-[20px] tracking-[0.5px] text-center
             transition duration-300 ease-out hover:bg-[#e6a900]"
      >
        Abrir modal
      </button>
    </div>
  );
}
