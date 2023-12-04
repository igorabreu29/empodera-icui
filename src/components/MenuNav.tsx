'use client'
import { List, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import Logo from '../assets/logo.png'
import Image from 'next/image'

export function MenuNav() {
  const [active, setActive] = useState(false)

  return (
    <nav className="md:hidden flex items-center gap-4 bg-white px-12 py-2 justify-between rounded">
      <Link href={'/'} className="text-xl font-bold" data-aos="fade-right">
        <Image
          src={Logo}
          width={50}
          alt="Imagem com uma mão levantada e com o texto: Empodera Icuí"
        />
      </Link>
      {active && (
        <div className="absolute z-50 top-0 right-0 bg-zinc-100 flex items-center justify-center py-14 px-16 rounded">
          <button
            className="absolute top-4 right-8 bg-red-600 p-1 rounded text-white hover:scale-105 transition-transform"
            onClick={() => setActive(false)}
            aria-label="Button"
          >
            <X size={16} />
          </button>
          <div className="flex items-center justify-center flex-col gap-4 font-semibold">
            <Link
              href={'/types'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Tipos de Violência
            </Link>
            <Link
              href={'/cycle'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Ciclo da Violência
            </Link>
            <Link
              href={'/laws'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Leis
            </Link>
            <Link
              href={'/timeline'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Linha do tempo
            </Link>
            <Link
              href={'/myths-x-truths'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Mitos x Verdades
            </Link>
            <Link
              href={'/complaint'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Denúncia
            </Link>
            <Link
              href={'/about'}
              className="hover:bg-zinc-300 hover:scale-105 p-2 transition-all rounded w-full text-center"
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
      <button
        aria-label="Button"
        className="md:hidden"
        data-aos="fade-left"
        onClick={() => setActive(true)}
      >
        <List />
      </button>
    </nav>
  )
}
