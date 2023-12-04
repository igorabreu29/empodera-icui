import { Title } from '@/components/Title'
import { InformAboutPage } from '../../components/InformAboutPage'
import { DivisorWidth } from '@/components/DivisorWidth'
import { Move } from '@/components/move'
import { MoveRoot } from '@/components/move/MoveRoot'
import { Metadata } from 'next'
import { AlertCircle, Flower2, Hand } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ciclo',
  description: 'Página que contém o processo do ciclo da violência',
}

export default function Cycle() {
  return (
    <div>
      <Title text="Ciclo da Violência" />
      <InformAboutPage
        text="Essa seção abordará todas as fases do ciclo da violência. 
        Arraste para baixo e entenda sobre."
      />

      <section className="flex justify-center gap-4 flex-col px-8 md:px-20 py-4 mt-10 overflow-hidden">
        <div
          className="flex items-center sm:justify-evenly flex-col sm:flex-row gap-4"
          data-aos="zoom-in"
        >
          <div className="flex flex-col gap-2 w-full max-w-[25rem]">
            <span className="text-sm">Fase 1</span>
            <h3 className="text-xl md:text-2xl text-center sm:text-start font-semibold">
              Aumento da Tensão
            </h3>
            <p className="text-sm md:text-base text-center sm:text-start">
              Ocorre quando o agressor se mostra irritado por coisas
              insignificantes tendo acesso de raiva, humilhando a vítima,
              fazendo ameaças e destruindo objetos. Então a vítima tenta
              acalmá-lo, evitando condutas que possam {'"provocá-ló"'},
              escondendo o fato das demais pessoas e até mesmo achando que fez
              algo de errado que justificasse o comportamento do agressor.
            </p>
          </div>
          <div className="h-60 w-60 sm:h-96 sm:w-96 bg-radial flex items-center justify-center">
            <AlertCircle size={80} className="text-white" />
          </div>
        </div>
        <DivisorWidth />

        <div
          className="hidden sm:flex sm:items-center sm:justify-evenly flex-col sm:flex-row gap-4"
          data-aos="zoom-out"
        >
          <div className="h-60 w-60 sm:h-96 sm:w-96 bg-radial-secondary flex items-center justify-center">
            <Hand size={80} className="text-white" />
          </div>
          <div className="flex flex-col gap-2 w-[25rem]">
            <span className="text-sm">Fase 2</span>
            <h3 className="text-xl md:text-2xl text-center sm:text-start font-semibold">
              Ato de Violência
            </h3>
            <p className="text-sm md:text-base text-center sm:text-start">
              Ocorre a falta de controle do agressor que chega ao limite e leva
              à violência propriamente dita. A mulher se sente paralisada e sem
              possibilidade de reagir. Nesse momento, ela pode tomar decisões
              como: pedir ajuda, denunciar, pedir separação ou até mesmo
              suicidar-se. Normalmente, há o distanciamento do agressor.
            </p>
          </div>
        </div>

        <div
          className="sm:hidden flex items-center sm:justify-evenly flex-col sm:flex-row gap-4"
          data-aos="zoom-out"
        >
          <div className="flex flex-col gap-2 w-full max-w-[25rem]">
            <span className="text-sm">Fase 2</span>
            <h3 className="text-xl md:text-2xl text-center sm:text-start font-semibold">
              Ato de Violência
            </h3>
            <p className="text-sm md:text-base text-center sm:text-start">
              Ocorre a falta de controle do agressor que chega ao limite e leva
              à violência propriamente dita. A mulher se sente paralisada e sem
              possibilidade de reagir. Nesse momento, ela pode tomar decisões
              como: pedir ajuda, denunciar, pedir separação ou até mesmo
              suicidar-se. Normalmente, há o distanciamento do agressor.
            </p>
          </div>
          <div className="h-60 w-60 sm:h-96 sm:w-96 bg-radial-secondary flex items-center justify-center">
            <Hand size={80} className="text-white" />
          </div>
        </div>

        <DivisorWidth />
        <div
          className="flex items-center sm:justify-evenly flex-col sm:flex-row gap-4"
          data-aos="zoom-in-right"
        >
          <div className="flex flex-col gap-2 w-full max-w-[25rem]">
            <span className="text-sm">Fase 3</span>
            <h3 className="text-xl md:text-2xl text-center sm:text-start font-semibold">
              Lua de Mel
            </h3>
            <p className="text-sm md:text-base text-center sm:text-start">
              Nela, o agressor se diz arrependido e se torna amável para
              conseguir a reconciliação. Em seguida, há um período relativamente
              calmo em que a mulher se sente feliz por constatar a mudança de
              atitude do parceiro, lembrando dos bons momentos que tiveram
              juntos. Por fim, a tensão da Fase 1 volta.
            </p>
          </div>
          <div className="h-60 w-60 sm:h-96 sm:w-96 bg-radial flex items-center justify-center">
            <Flower2 size={80} className="text-white" />
          </div>
        </div>

        <DivisorWidth />
      </section>

      <MoveRoot>
        <Move
          title="Denuncie!"
          url="/complaint"
          text="Acesse a aba DENÚNCIA e veja
        os locais para fazer sua denúncia."
        />
        <Move
          title="Entenda sobre as leis de direito!"
          url="/laws"
          text="Acesse a aba LEIS para ver todas as leis de direito."
        />
      </MoveRoot>
    </div>
  )
}
