import { InformAboutPage } from '@/components/InformAboutPage'
import { Title } from '@/components/Title'
import { Move } from '@/components/move'
import { MoveRoot } from '@/components/move/MoveRoot'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tipos de Violência',
  description:
    'Página que possui informação sobre todos os tipos de violência contra a mulher.',
}

export default function Types() {
  return (
    <>
      <Title text="Tipos de Violência" />
      <InformAboutPage text="Essa seção abordará todos os tipos de violência contra a mulher e alguns exemplos" />

      <section className="flex items-center justify-center px-2 sm:w-full sm:max-w-[29.5rem] text-center mx-auto my-10">
        <p className="font-medium text-base sm:text-lg" data-aos="fade-down">
          De acordo com a Lei Maria da Penha, existem cinco tipos de violência
          contra a mulher que trazem diversas consequências. Normalmente, não
          ocorrem de maneira isolada e, se sofridas, devem ser denunciadas. Os
          cinco tipos são:
        </p>
      </section>

      <section className="bg-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-2 sm:px-10 md:px-20 lg:px-52 relative overflow-hidden">
        <div
          className={`absolute top-2 right-1/2 translate-x-1/2 hidden md:block bg-black h-[38rem] w-[0.115rem]`}
        />
        <div
          className="flex items-center md:items-start justify-start flex-col gap-4"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3 className="font-medium text-3xl">Violência Física</h3>
          <ul className="md:list-disc flex flex-col text-start items-center md:items-start text-sm md:text-base">
            <li>Puxões de cabelo</li>
            <li>Apertar os braços</li>
            <li>Estrangulamento, mordidas e beliscões</li>
            <li>Tentativas de homicídio</li>
            <li>Espancamentos</li>
            <li>Tortura</li>
            <li>Atirar objetos</li>
            <li>Queimaduras</li>
          </ul>
        </div>

        <div
          className="flex items-center md:items-start md:ml-20 lg:ml-36 justify-start flex-col gap-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="font-medium text-3xl">Violência Psicológica</h3>
          <ul className="md:list-disc flex flex-col items-center text-start md:items-start text-sm md:text-base">
            <li>Limitação do direito de ir e vir</li>
            <li>Vigilância constante</li>
            <li>Distorcer os fatos para que a mulher duvide de sua sanidade</li>
            <li>Impedir o contato com amigos e familiares</li>
            <li>Manipular, chantagear e humilhar</li>
            <li>Constranger, ridicularizar e insultar</li>
          </ul>
        </div>

        <div
          className="flex items-center md:items-start justify-start flex-col gap-4"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3 className="font-medium text-3xl">Violência Sexual</h3>
          <ul className="md:list-disc flex flex-col items-center text-start md:items-start text-sm md:text-base">
            <li>Impedir o uso de métodos contraceptivos</li>
            <li>Forçar matrimônio, gravidez, prostituição ou aborto</li>
            <li className="text-center">Estupro</li>
            <li>Obrigar a mulher a práticas sexuais que causam desconforto</li>
            <li>
              Limitar o exercício dos direitos sexuais e reprodutivos da mulher
            </li>
          </ul>
        </div>

        <div
          className="flex items-center md:items-start md:ml-20 lg:ml-36 justify-start flex-col gap-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="font-medium text-3xl">Violência Moral</h3>
          <ul className="md:list-disc flex flex-col text-start items-center md:items-start text-sm md:text-base">
            <li>Expor a vida íntima</li>
            <li>Desvalorizar a vítima pelo modo que se veste</li>
            <li>Acusar a mulher de traição</li>
            <li>Fazer críticas mentirosas</li>
            <li>Emitir juízos morais sobre a conduta</li>
          </ul>
        </div>

        <div
          className="flex items-center md:items-start justify-start flex-col gap-4 md:ml-auto md:-mr-72"
          data-aos="fade-down"
        >
          <h3 className="font-medium text-3xl">Violência Patrimonial</h3>
          <ul className="md:list-disc flex flex-col text-start items-center md:items-start text-sm md:text-base">
            <li>Destruir, vender ou furtar objetos pessoais da vítima</li>
            <li>Privar de bens, valores ou recursos econômicos</li>
            <li>Controlar o dinheiro</li>
            <li>Deixar de pagar pensão alimentícia</li>
            <li>Furto, extorsão, dano ou estelionato</li>
          </ul>
        </div>
      </section>

      <MoveRoot>
        <Move
          title="Denuncie!"
          url="/complaint"
          text="Acesse a aba DENÚNCIA e veja
        os locais para fazer sua denúncia."
        />
        <Move
          title="Entenda o ciclo da violência"
          url="/cycle"
          text="Acesse a aba CICLO DA VIOLÊNCIA e entenda
          mais sobre esse processo!"
        />
      </MoveRoot>
    </>
  )
}
