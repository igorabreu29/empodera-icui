import { InformAboutPage } from '@/components/InformAboutPage'
import { Title } from '@/components/Title'
import { Move } from '@/components/move'
import { MoveRoot } from '@/components/move/MoveRoot'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leis',
  description: 'Página que contém leis de direito das mulheres.',
}

export default function Laws() {
  return (
    <div>
      <Title text="Leis" />
      <InformAboutPage text="Conheça um pouco sobre as leis de direito das mulheres." />

      <div className="px-2 sm:px-32 py-8">
        <section className="border-2 border-black flex justify-center items-center flex-col gap-8 p-2 sm:p-4 shadow-lg shadow-zinc-500 rounded">
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
            <div
              className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition"
              data-aos="fade-right"
            >
              <span className="text-xl font-semibold leading-relaxed">
                Lei Maria da Penha (11.340/2006):
              </span>
              <p className="text-sm md:text-base">
                Cria mecanismos para prevenir, punir e erradicar a violência
                doméstica e familiar contra a mulher através de medidas
                protetivas.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm
                </a>
              </p>
            </div>
            <div
              className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition"
              data-aos="fade-left"
            >
              <span className="text-xl font-semibold leading-relaxed">
                Lei do Minuto Seguinte (12.845/2013):
              </span>
              <p className="text-sm md:text-base">
                Garante às vítimas de violência sexual direitos como o
                atendimento imediato pelo SUS, amparo médico, social e
                psicológico, informações sobre seus direitos e exames
                preventivos.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12845.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12845.htm
                </a>
              </p>
            </div>
          </div>

          <div
            className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition"
            data-aos="fade-left"
          >
            <span className="text-xl font-semibold leading-relaxed">
              Lei do Feminicídio (13.104/2015):
            </span>
            <p>
              Prevê que, caso a mulher seja morta em decorrência da
              discriminação à sua condição de mulher ou em decorrência de
              violência doméstica e familiar, a pena do crime poderá chegar a 30
              anos de reclusão.
            </p>
            <p className="text-sm md:text-base">
              Disponível em: <br />
              <a
                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13104.htm"
                target="_blank"
                rel="noreferrer noopener"
                className="underline text-purple-700 text-sm"
              >
                https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13104.htm
              </a>
            </p>
          </div>

          <div
            className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition"
            data-aos="zoom-in"
          >
            <span className="text-xl font-semibold leading-relaxed">
              Lei Carolina Dieckmann:
            </span>
            <p>
              Proíbe a invasão de aparelhos eletrônicos para obtenção,
              adulteração ou destruição de dados particulares sem a permissão do
              dono do dispositivo.
            </p>
            <p className="text-sm md:text-base">
              Disponível em: <br />
              <a
                href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm"
                target="_blank"
                rel="noreferrer noopener"
                className="underline text-purple-700 text-sm"
              >
                https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm
              </a>
            </p>
          </div>

          <div
            className="flex items-center justify-center xl:justify-between gap-8 lg:gap-12 w-full flex-wrap"
            data-aos="zoom-in"
          >
            <div className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition">
              <span className="text-xl font-semibold leading-relaxed">
                Lei Joanna Maranhão (12.650/2015):
              </span>
              <p className="text-sm md:text-base">
                Alterou o prazo da prescrição contra abusos sexuais de crianças
                e adolescentes, de modo que ela só valha após a vítima completar
                18 anos, e o prazo para a denúncia aumentou para 20 anos.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12650.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12650.htm
                </a>
              </p>
            </div>

            <div className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition">
              <span className="text-xl font-semibold leading-relaxed">
                Lei de Importunação Sexual (13.718/2018):
              </span>
              <p className="text-sm md:text-base">
                Prevê punição a atos libidinosos sem a permissão de uma das
                pessoas envolvidas, aplicada também a passar a mão no corpo
                alheio sem permissão e a beijos roubados.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13718.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13718.htm
                </a>
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center xl:justify-between gap-8 lg:gap-12 xl:gap-28 flex-wrap"
            data-aos="zoom-out"
          >
            <div className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition">
              <span className="text-xl font-semibold leading-relaxed">
                Lei 13.836/2019:
              </span>
              <p className="text-sm md:text-base">
                Prevê que, caso a mulher vítima de agressão doméstica ou
                familiar sofra de alguma deficiência, outros órgãos e leis
                específicas serão acionados, podendo agravar a pena do agressor.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13836.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13836.htm
                </a>
              </p>
            </div>

            <div className="bg-zinc-200 w-full max-w-[35rem] p-2 rounded space-y-2 md:h-full shadow-md shadow-zinc-300 hover:scale-105 transition">
              <span className="text-xl font-semibold leading-relaxed">
                Lei 13.882/2019:
              </span>
              <p className="text-sm md:text-base">
                Garante a matrícula dos dependentes da mulher vítima de
                violência doméstica e familiar em instituições de educação
                básica mais próxima de seu domicílio independentemente da
                existência de vaga.
              </p>
              <p className="text-sm md:w-60">
                Disponível em: <br />
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13882.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-purple-700 text-sm"
                >
                  https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13882.htm
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <MoveRoot>
        <Move
          title="Denuncie!"
          url="/complaint"
          text="Acesse a aba DENÚNCIA e veja
        os locais para fazer sua denúncia."
        />
        <Move
          title="Conheça um pouco sobre a linha do tempo"
          url="/timeline"
          text="Acesse a aba LINHA DO TEMPO e conheça mais sobre o assunto."
        />
      </MoveRoot>
    </div>
  )
}
