import { InformAboutPage } from '@/components/InformAboutPage'
import { Title } from '@/components/Title'
import { Move } from '@/components/move'
import { MoveRoot } from '@/components/move/MoveRoot'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Linha do tempo',
  description:
    'Página que possui o intuito de mostrar a linha do tempo das mulheres ao longo dos anos.',
}

export default function Timeline() {
  return (
    <>
      <Title text="Linha do Tempo" />
      <InformAboutPage text="Conheça um pouco sobre as mudanças que ocorreram durante o passar dos anos." />

      <section className="flex flex-col justify-center items-center md:grid md:grid-cols-1 md:items-start md:justify-start px-10 mt-28 gap-12 relative lg:px-48 overflow-hidden">
        <div
          className={`absolute top-2 right-1/2 translate-x-1/2 hidden md:block bg-black h-[52rem] w-[0.115rem]`}
        ></div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center gap-2"
          data-aos="fade-right"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            Época do Brasil Império
          </h2>
          <p className="font-medium w-full">
            As mulheres não possuíam direitos, nem eram consideradas cidadãs.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center md:ml-auto gap-2"
          data-aos="fade-left"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            1940
          </h2>
          <p className="font-medium w-full">
            Alguns crimes sexuais deixaram de ser considerados proteção a honra
            e passaram a ser atentado aos costumes. Além disso, foi legalizado o
            aborto em caso de estupro.
          </p>
        </div>
        <div
          className="flex items-end justify-center flex-col w-full max-w-[24rem] text-center gap-2"
          data-aos="fade-right"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            1962
          </h2>
          <p className="font-medium w-full">
            As mulheres casadas não precisavam mais de permissão de seus maridos
            para trabalhar.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center md:ml-auto gap-2"
          data-aos="fade-left"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            1974
          </h2>
          <p className="font-medium w-full">
            As mulheres conquistaram o direito de portarem um cartão de crédito.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center gap-2"
          data-aos="fade-right"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            1977
          </h2>
          <p className="font-medium w-full">
            Houve a aprovção da Lei do Divórcio.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center md:ml-auto gap-2"
          data-aos="fade-left"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            1985
          </h2>
          <p className="font-medium w-full">
            Foi criada a primeira Delegacia da Mulher, em São Paulo.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center gap-2"
          data-aos="fade-right"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            2006
          </h2>
          <p className="font-medium w-full">
            Foi sancionada a Lei Maria da Penha.
          </p>
        </div>
        <div
          className="flex items-center md:items-start justify-center flex-col w-full max-w-[24rem] text-center md:ml-auto gap-2"
          data-aos="fade-left"
        >
          <h2 className="border-b-2 border-dashed border-b-black w-full font-semibold text-3xl">
            2015
          </h2>
          <p className="font-medium w-full">
            Foi aprovada a Lei do Feminicídio.
          </p>
        </div>
        <div
          className={`w-full max-w-full mx-auto my-4 bg-black h-[1px]`}
        ></div>
      </section>

      <MoveRoot>
        <Move
          text="Acesse a aba “Denúncia” e veja os locais para fazer sua denúncia."
          title="Denuncie!"
          url="/complaint"
        />
        <Move
          text="Acesse a aba “Mitos e Verdades” e conheça mais sobre o que é ou não real."
          title="Mitos X Verdades!"
          url="/myths-x-truths"
        />
      </MoveRoot>
    </>
  )
}
