"use client";
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className="relative overflow-hidden grid grid-rows-[auto_1fr_auto] gap-16 font-[family-name:var(--font-geist-sans)]">
      <Player />
    </div>
  );
}
