export default function ModalTabs({ activeTab, setTab }) {
  return (
    <div className="flex border-b border-gray-300 bg-white">
      <button
        className={`px-4 py-2 text-sm font-medium rounded-t-sm ${
          activeTab === "empresa"
            ? "text-[#241752] border border-gray-300 border-b-white -mb-px bg-white"
            : "text-gray-400"
        }`}
        onClick={() => setTab("empresa")}
      >
        SII Empresa
      </button>
      <button
        className={`px-4 py-2 text-sm font-normal rounded-t-sm ${
          activeTab === "personal"
            ? "text-[#241752] border border-gray-300 border-b-white -mb-px bg-white"
            : "text-gray-400"
        }`}
        onClick={() => setTab("personal")}
      >
        SII Personal
      </button>
    </div>
  );
}
