'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className={`${isExpanded ? 'w-44' : 'w-20'} font-sans transition-all duration-300 h-screen bg-zinc-900 text-white p-6 flex flex-col gap-8 sticky top-0`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="hover:bg-zinc-800 p-2 rounded w-fit"
      >
        {isExpanded ? '❮' : '❯'}
      </button>
      <nav className="text-lg flex flex-col gap-7 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-zinc-400"> {isExpanded ? 'Introdução 🏠' : '🏠'} </Link>
        <Link href="/trajetoria" className="hover:text-zinc-400"> {isExpanded ? 'Trajetoria 🛣️' : '🛣️'} </Link>
        <Link href="/projetos" className="hover:text-zinc-400"> {isExpanded ? 'Projetos 📁' : '📁'} </Link>
        <Link href="/futura_noiva" className="hover:text-zinc-400"> {isExpanded ? 'Futura Noiva 💍' : '💍'} </Link>
        <Link href="/contato" className="hover:text-zinc-400"> {isExpanded ? 'Contato 📞' : '📞'} </Link>
      </nav>
    </aside>
  );
}