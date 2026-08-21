"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Link2, MessageCircle, Menu, X } from "lucide-react";
import { Brand } from "@/components/ui";

const links = [
  ["Home", "/"], ["About", "/about"], ["Benefits", "/benefits"],
  ["How It Works", "/how-it-works"], ["FAQ", "/faq"], ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}
          <Link href="/eligibility" className={pathname === "/eligibility" ? "active mobile-only-link" : "mobile-only-link"}>Eligibility</Link>
        </nav>
        <div className="header-actions">
          <Link href="/register" className="button button-sm button-primary">Register Now <ArrowUpRight size={15} /></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Brand light /><p>Empowering Youth,<br />Building Future.</p><div className="socials"><span><MessageCircle size={17}/></span><span><Link2 size={17}/></span></div></div>
        <div><h3>Explore</h3>{links.slice(0,4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div>
        <div><h3>Information</h3><Link href="/eligibility">Eligibility</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Registration</h3><Link href="/register">Register Now</Link><Link href="/registration-status">Registration Status</Link><Link href="/how-it-works">Payment Process</Link></div>
        <div className="footer-note"><h3>Begin your journey</h3><p>A clear, guided registration experience designed around your next step.</p><Link href="/register" className="footer-cta">Register for ₹100 <ArrowUpRight size={16}/></Link></div>
      </div>
      <div className="container footer-bottom"><p>© 2026 Yuva Rojgar Abhiyan. All rights reserved.</p><p>Privacy · Terms · Accessibility</p></div>
    </footer>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
