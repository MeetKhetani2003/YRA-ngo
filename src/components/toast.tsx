"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => { const timer = setTimeout(onClose, 3200); return () => clearTimeout(timer); }, [onClose]);
  return <div className="toast" role="status"><CheckCircle2 size={19}/><span>{message}</span><button onClick={onClose} aria-label="Dismiss"><X size={16}/></button></div>;
}
