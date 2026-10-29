"use client";

import dynamic from "next/dynamic";
import type { Ville } from "@/lib/villes";

const CarteInteractive = dynamic(
  () => import("@/components/ui/CarteInteractive"),
  { ssr: false }
);

export default function CarteWrapper({ villes }: { villes: Ville[] }) {
  return <CarteInteractive villes={villes} />;
}
