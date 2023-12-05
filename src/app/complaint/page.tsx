import { InformAboutPage } from '@/components/InformAboutPage'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denúncia',
  description:
    'Página com o objetivo de mostrar as principais formas e locais de busca.',
}

export default function Complaint() {
  return (
    <div>
      <Title text="Denúncia" />
      <InformAboutPage text="Conheça, abaixo, as principais formas de buscar ajuda em casos de violência." />

      <section className="mt-8 py-4 px-4 md:px-12 flex items-center justify-center flex-col gap-12">
        <section className="text-center flex items-center justify-center flex-col gap-2 w-full max-w-[40rem]">
          <h3 className="text-xl font-bold text-center md:text-2xl">
            Central de Denúncia - 180
          </h3>
          <p className="text-justify">
            Responsável por orientar e encaminhar a vítima para os serviços da
            rede de atendimento. A chamada de telefone é gratuita. O atendimento
            é realizado durante 24 horas e é válido para todo o território
            nacional.
          </p>
        </section>

        <section className="flex items-center justify-center flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-bold text-center">
            Caso precise de atendimento médico, busque:
          </h3>

          <div className="flex items-start justify-center flex-wrap gap-8 w-full max-w-[60rem] text-center md:text-start">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg md:text-xl text-center">
                Unidade Básica de Saúde (UBS)
              </h4>
              <p className="text-justify">
                A vítima deve procurar esse serviço caso apresente ferimentos
                leves ou problemas de saúde mental, como depressão e ansiedade.
                Os profissionais de saúde serão responsáveis por identificar a
                violência e realizar o primeiro acolhimento.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-lg md:text-xl text-center">
                Hospitais
              </h4>
              <p className="text-justify">
                Deve-se procurar esse serviço caso esteja ferida ou tenha
                sofrido estupro/tentativa de estupro. O médico deverá ser
                avisado em casos de agressão doméstica e, em casos de violência
                sexual, a vítima tem direito a atendimento prioritário.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 justify-center">
          <h3 className="font-bold text-xl md:text-2xl text-center">
            Em caso de denúncia ou acolhimento, busque:
          </h3>

          <div className="w-full max-w-[40rem] space-y-4 text-center">
            <h4 className="font-semibold text-lg">
              Delegacia de Defesa da Mulher de Ananindeua (DEAM)
            </h4>
            <p className="text-justify">
              A vítima deve procurar esse serviço caso apresente ferimentos
              leves ou problemas de saúde mental, como depressão e ansiedade. Os
              profissionais de saúde serão responsáveis por identificar a
              violência e realizar o primeiro acolhimento.
            </p>
            <div className="text-sm flex flex-col items-center md:items-end text-center md:text-end">
              <span className="w-full max-w-[24rem]">
                Endereço: Tv. We-31 (Cj Cidade Nova V), 1112 - Cidade Nova,
                Ananindeua - PA, 67133-140
              </span>
              <span>Telefone: (91) 98435-2596</span>
              <span>Atendimento: 24 horas</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.692383490823!2d-48.39706342515859!3d-1.3612199357123327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a45fe37abb5b1f%3A0xf69df424f81184cc!2sTv.%20We-31%20(Cj%20Cidade%20Nova%20V)%2C%201112%20-%20Cidade%20Nova%2C%20Ananindeua%20-%20PA%2C%2067133-140!5e0!3m2!1spt-BR!2sbr!4v1701614082442!5m2!1spt-BR!2sbr"
              className="w-full max-w-[40rem] h-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Divisor */}
          <div className="w-full max-w-[40rem] h-[0.115rem] bg-black my-4" />

          <div className="w-full max-w-[40rem] space-y-4 text-center">
            <h4 className="font-semibold text-lg md:text-xl">
              Centro de Referência de Assistência Social (CRAS)
            </h4>
            <p className="text-justify">
              Oferece benefícios e auxílios, faz a orientação e o encaminhamento
              para os outros serviços. Além de garantir proteção social básica,
              acolhimento e prevenção. Só em Ananindeua, há 10 unidades.
            </p>

            <div>
              <div className="text-sm flex flex-col items-center md:items-end text-center md:text-end">
                <span className="w-full max-w-[24rem]">
                  Endereço: Icuí-Guajará, Ananindeua - PA, 67125-000
                </span>
                <span>Telefone: (91) 3287-0433</span>
                <span>Atendimento: De segunda a sexta, das 8 às 14h</span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.972152264472!2d-48.41910135473098!3d-1.3302463264744848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46096ad249b33%3A0xa0dcd258b5a46317!2sEstr.%20Icu%C3%AD-Guajar%C3%A1%20-%20Icu%C3%AD-Guajar%C3%A1%2C%20Ananindeua%20-%20PA%2C%2067125-000!5e0!3m2!1spt-BR!2sbr!4v1701615114331!5m2!1spt-BR!2sbr"
                className="w-full max-w-[40rem] h-60"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <div className="text-sm flex flex-col items-center md:items-end text-center md:text-end">
                <span className="w-full max-w-[24rem]">
                  Endereço: Tv. SN 22, 911b - Coqueiro, Ananindeua - PA,
                  67000-000
                </span>
                <span>Atendimento: De segunda a sexta, das 8 às 14h</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.9307456600086!2d-48.39887347362849!3d-1.3446248379506611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a45fd6795e9c8d%3A0x3e7301b9938ebb5a!2sTv.%20SN%2022%2C%20911b%20-%20Coqueiro%2C%20Ananindeua%20-%20PA%2C%2067140-270!5e0!3m2!1spt-BR!2sbr!4v1701615237540!5m2!1spt-BR!2sbr"
                className="w-full max-w-[40rem] h-60"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full max-w-[40rem] h-[0.115rem] bg-black my-4" />

          <div className="w-full max-w-[40rem] space-y-4 text-center">
            <h4 className="font-semibold text-lg md:text-xl">
              Centro de Referência Especializado de Assistência Social (CREAS)
            </h4>
            <p className="text-justify">
              Responsável por orientar, proteger e atender a vítima em casos de
              violência. Realiza o atendimento em casos de abusos sexuais contra
              crianças e adolescentes e solicita vaga no abrigo-sigiloso, se
              necessário.
            </p>
            <div className="text-sm flex flex-col items-center md:items-end text-center md:text-end">
              <span className="w-full max-w-[24rem]">
                Endereço: Rua do Fio, esquina com Dr. Nonato Sanova (SN 17), S/N
                - Coqueiro, Ananindeua - PA, 67133-520
              </span>
              <span>Telefone: (91) 3234-3685</span>
              <span>Atendimento: De segunda a sexta, das 8 às 17h</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.355043445539!2d-48.416050409340386!3d-1.370174599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4600280ec34cf%3A0x105914bcddc6df40!2sCREAS%20I%20ANANINDEUA%20-%20CENTRO%20DE%20REFER%C3%8ANCIA%20ESPECIALIZADO%20DE%20ASSIST%C3%8ANCIA%20SOCIAL!5e0!3m2!1spt-BR!2sbr!4v1701615501303!5m2!1spt-BR!2sbr"
              className="w-full max-w-[40rem] h-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </section>
    </div>
  )
}
