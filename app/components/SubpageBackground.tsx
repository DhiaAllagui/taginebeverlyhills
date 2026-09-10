import Image from "next/image";

export default function SubpageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <Image
        src="/images/bg.png"
        alt="Tagine Beverly Hills Ambiance"
        fill
        priority
        className="object-cover object-center filter brightness-[0.5] contrast-[1.1]"
        quality={90}
        sizes="100vw"
      />
      {/* Luxury Moody Espresso & Charcoal Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/55 to-[#0A0A0A]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/35 to-[#0A0A0A]/85" />
    </div>
  );
}
