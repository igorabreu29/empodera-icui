import { ReactNode } from 'react'

export function MoveRoot({ children }: { children: ReactNode }) {
  return (
    <article
      className="flex items-center justify-center flex-wrap md:flex-nowrap gap-12 sm:gap-28 my-10"
      data-aos="zoom-in"
    >
      {children}
    </article>
  )
}
