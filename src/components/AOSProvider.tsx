'use client'

import { ReactNode, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    Aos.init()
  }, [])

  return <>{children}</>
}
