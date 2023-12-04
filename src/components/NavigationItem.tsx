'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu'

export function NavigationItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="text-base font-semibold"
            data-aos="fade-down"
          >
            Conteúdo
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex items-center justify-center flex-col gap-2 w-60">
            <div className="w-52 flex items-center justify-center text-center flex-col gap-2 p-2">
              <NavigationMenuLink asChild>
                <Link
                  href={'/types'}
                  className="w-52 text-center hover:bg-zinc-200 transition-colors p-1"
                >
                  Tipos de Violência
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="w-52 text-center hover:bg-zinc-200 transition-colors p-1"
                  href={'/cycle'}
                >
                  Ciclo da Violência
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="w-52 text-center hover:bg-zinc-200 transition-colors p-1"
                  href={'/laws'}
                >
                  Leis
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="w-52 text-center hover:bg-zinc-200 transition-colors p-1"
                  href={'/timeline'}
                >
                  Linha do tempo
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="w-52 text-center hover:bg-zinc-200 transition-colors p-1"
                  href={'/myths-x-truths'}
                >
                  Mitos x Verdades
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
