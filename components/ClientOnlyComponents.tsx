"use client";

import dynamic from "next/dynamic";

export const CosmicBackground = dynamic(
  () => import("@/components/CosmicBackground"),
  { ssr: false }
);

export const ExitIntent = dynamic(
  () => import("@/components/ExitIntent"),
  { ssr: false }
);
