import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Yuva Rojgar Abhiyan home">
      {/* YRA Logo — people/family SVG icon matching client mockup */}
      <span className="brand-mark" style={{width:44,height:44,background:'none',borderRadius:0,overflow:'visible'}}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left person */}
          <circle cx="9" cy="12" r="4.5" fill="#0f7b40"/>
          <path d="M2 32c0-5 3-8 7-8s7 3 7 8" fill="#0f7b40"/>
          {/* Center person (taller) */}
          <circle cx="22" cy="10" r="5.5" fill="#0f7b40"/>
          <path d="M14 32c0-6 3.5-10 8-10s8 4 8 10" fill="#0f7b40"/>
          {/* Right person */}
          <circle cx="35" cy="12" r="4.5" fill="#f5821f"/>
          <path d="M28 32c0-5 3-8 7-8s7 3 7 8" fill="#f5821f"/>
          {/* Small child figure - left */}
          <circle cx="5" cy="20" r="2.5" fill="#f5821f"/>
          <path d="M1 30c0-3 1.5-5 4-5s4 2 4 5" fill="#f5821f"/>
        </svg>
      </span>
      {!compact && (
        <span className="brand-copy">
          <b className={light ? "text-white" : ""} style={{fontSize:22,fontWeight:800,letterSpacing:'.06em',fontFamily:'Poppins,sans-serif'}}>YRA</b>
          <small className={light ? "text-white/65" : ""} style={{fontSize:'7.5px',letterSpacing:'.04em'}}>Yuva Rojgar Abhiyan</small>
        </span>
      )}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</p>;
}

export function SectionHeading({ eyebrow, title, text, center = false, light = false }: { eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`section-heading ${center ? "text-center mx-auto" : ""} ${light ? "text-white" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p className={light ? "text-white/70" : ""}>{text}</p>}
    </div>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`arrow-link ${light ? "text-white" : ""}`}>{children}<ArrowRight size={17} /></Link>;
}

export function StatusBadge({ status }: { status: string }) {
  const kind = /successful|paid|verified|active/i.test(status) ? "success" : /failed|rejected|inactive/i.test(status) ? "danger" : "pending";
  return <span className={`status-badge status-${kind}`}><i />{status}</span>;
}

export function PageHero({ eyebrow, title, text, image, children }: { eyebrow: string; title: string; text: string; image?: string; children?: ReactNode }) {
  return (
    <section className={`page-hero ${image ? "page-hero-image" : ""}`}>
      {image && <Image src={image} alt="" fill priority className="page-hero-bg" sizes="100vw" />}
      <div className="page-hero-shade" />
      <div className="container relative z-10">
        <Eyebrow light={!!image}>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
