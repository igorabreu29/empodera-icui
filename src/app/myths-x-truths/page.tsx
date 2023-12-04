import { DivisorWidth } from '@/components/DivisorWidth'
import { InformAboutPage } from '@/components/InformAboutPage'
import { MTMappedContent } from '@/components/MTMappedContent'
import { Title } from '@/components/Title'
import { Move } from '@/components/move'
import { MoveRoot } from '@/components/move/MoveRoot'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empodera Icuí | Mitos x Verdades',
  description:
    'Página que contém frases que normalmente são faladas pela sociedade',
}

export default function MythsXTruths() {
  return (
    <div>
      <Title text="Mitos x Verdades" />
      <InformAboutPage text="Entenda as coisas como ela realmente são, essa seção abordará alguns pontos falados por algumas pessoas." />

      <section className="flex flex-col items-center justify-center gap-12 py-12 px-8">
        <MTMappedContent />
      </section>
      <DivisorWidth />
      <MoveRoot>
        <Move
          title="Denuncie!"
          url="/complaint"
          text="Acesse a aba DENÚNCIA e veja
        os locais para fazer sua denúncia."
        />
        <Move
          title="Conheça os membros do projeto Empodera Icuí"
          url="/about"
          text="Acesse a aba SOBRE e veja os criadores do projeto."
        />
      </MoveRoot>
    </div>
  )
}
