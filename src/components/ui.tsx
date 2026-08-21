import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Yuva Rojgar Abhiyan home">
      {/* YRA Logo — people/family SVG icon matching client mockup */}
      <span className="brand-mark" style={{width: 200, height: 55, position: 'relative', background: 'none', borderRadius: 0, overflow: 'visible', flexShrink: 0}}>
        <Image src="/images/logo/logo.png" alt="Yuva Rojgar Abhiyan Logo" fill sizes="200px" style={{objectFit: 'contain', objectPosition: 'left center'}} />
      </span>
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
