import Link from 'next/link'
import { NavigationItem } from './NavigationItem'
import { MenuNav } from './MenuNav'
import Image from 'next/image'
import Logo from '../assets/logo.png'

export function Header() {
  return (
    <>
      <nav className="hidden w-full md:flex md:items-center md:justify-between bg-white px-12 py-2">
        <Link href={'/'} className="text-xl font-bold" data-aos="fade-right">
          <Image
            src={Logo}
            width={50}
            alt="Imagem com uma mão levantada e com o texto: Empodera Icuí"
            className="object-cover"
          />
        </Link>
        <div className="flex items-center justify-center gap-4 font-semibold">
          <NavigationItem />
          <Link href={'/complaint'} data-aos="fade-down" data-aos-delay="100">
            Denúncia
          </Link>
          <Link href={'/about'} data-aos="fade-down" data-aos-delay="200">
            Sobre
          </Link>
        </div>
      </nav>

      <MenuNav />
    </>
  )
}
