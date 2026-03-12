'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 bg-zinc-900 text-white p-2 rounded shadow-md"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle Menu"
      >
        {isExpanded ? '✕' : '☰'}
      </button>

      <aside className={`
        fixed inset-y-0 left-0 z-40 bg-zinc-900 text-white p-6 transition-all duration-300 flex flex-col gap-8
        lg:sticky lg:translate-x-0
        ${isExpanded ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'}
      `}>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden lg:block hover:bg-zinc-800 p-2 rounded w-fit transition-colors"
        >
          {isExpanded ? '❮' : '❯'}
        </button>

        <nav className="text-lg flex flex-col gap-7 overflow-hidden whitespace-nowrap mt-12 lg:mt-0">
          <Link href="/" className="flex items-center gap-4 hover:text-zinc-400 group" onClick={() => setIsExpanded(false)}> 
            <span className="text-2xl">🏠</span> 
            <span className={`${!isExpanded && 'lg:hidden'} transition-opacity duration-300`}>Introdução</span>
          </Link>
          
          <Link href="/trajetoria" className="flex items-center gap-4 hover:text-zinc-400 group" onClick={() => setIsExpanded(false)}> 
            <span className="text-2xl">🛣️</span> 
            <span className={`${!isExpanded && 'lg:hidden'} transition-opacity duration-300`}>Trajetoria</span>
          </Link>
          
          <Link href="/projetos" className="flex items-center gap-4 hover:text-zinc-400 group" onClick={() => setIsExpanded(false)}> 
            <span className="text-2xl">📁</span> 
            <span className={`${!isExpanded && 'lg:hidden'} transition-opacity duration-300`}>Projetos</span>
          </Link>
          
          <Link href="/futura_noiva" className="flex items-center gap-4 hover:text-zinc-400 group" onClick={() => setIsExpanded(false)}> 
            <span className="text-2xl">💍</span> 
            <span className={`${!isExpanded && 'lg:hidden'} transition-opacity duration-300`}>Futura Noiva</span>
          </Link>
          
          <Link href="/contato" className="flex items-center gap-4 hover:text-zinc-400 group" onClick={() => setIsExpanded(false)}> 
            <span className="text-2xl">📞</span> 
            <span className={`${!isExpanded && 'lg:hidden'} transition-opacity duration-300`}>Contato</span>
          </Link>
        </nav>
      </aside>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}