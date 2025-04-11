"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/FooterButtons";
import CloseButton from "../components/CloseButton";
import TabEmpresa from "../components/TabEmpresa";
import TabPersonal from "../components/TabPersonal";
import ModalHeader from "../components/ModalHeader";
import ModalTabs from "../components/ModalTabs";

export default function Modal() {
  const [tab, setTab] = useState("empresa");
  return (
    <div className=" bg-white rounded-2xl w-full max-w-[600px]  sm:min-w-[343px] ">
      <CloseButton />
      <div className="w-full h-auto pt-4 px-6 pb-6 gap-6">
        <ModalHeader />

        <ModalTabs activeTab={tab} setTab={setTab} />
        {tab === "empresa" ? <TabEmpresa /> : <TabPersonal />}
      </div>
      <Button />
    </div>
  );
}
