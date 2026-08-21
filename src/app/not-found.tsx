import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <main className="not-found"><span>404</span><h1>This page could not be found.</h1><p>The link may have moved, or the address may be incomplete.</p><Link href="/" className="button button-primary"><ArrowLeft/>Return home</Link></main>}
