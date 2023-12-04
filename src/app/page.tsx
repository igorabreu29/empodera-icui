import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="bg-degrade bg-400% bg-no-repeat animate-degrade h-[36rem] flex items-center justify-center font-bold p-10 text-white flex-col gap-4 overflow-hidden">
        <h1
          className="text-center text-5xl md:text-6xl leading-normal"
          data-aos="fade-up"
        >
          Empodera Icuí:{' '}
        </h1>
        <p
          className="text-xl md:text-3xl font-medium md:w-[40rem] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Entenda sobre os tipos de violência praticadas contra as mulheres, o
          ciclo da violência e muito mais
        </p>
      </header>
      <h2 className="mt-8 font-semibold text-center text-xl md:text-3xl">
        Saiba mais sobre o assunto
      </h2>
      <div className="mt-16 mb-24 flex items-center justify-center gap-10 flex-wrap md:gap-36">
        <article
          className={`p-2 rounded h-96 flex items-center justify-end flex-col gap-2 w-full max-w-[19rem] bg-center bg-cover bg-[url(../assets/types.jpeg)]`}
        >
          <span className="w-60 text-center font-semibold text-lg text-white">
            Conheça sobre os tipos de violência
          </span>
          <Link
            href={'/types'}
            className="w-full p-2 bg-pi-primary-purple rounded text-center text-white hover:scale-105 transition-transform"
          >
            Tipos de Violência
          </Link>
        </article>
        <article
          className={`p-2 rounded h-96 flex items-center justify-end flex-col gap-2 w-full max-w-[19rem] bg-center bg-cover bg-[url(../assets/cycle.jpeg)]`}
        >
          <span className="w-60 text-center font-semibold text-lg text-white">
            Conheça sobre o ciclo da violência
          </span>
          <Link
            href={'/cycle'}
            className="w-full p-2 bg-pi-primary-purple rounded text-center text-white hover:scale-105 transition-transform"
          >
            Ciclo da Violência
          </Link>
        </article>
      </div>
    </main>
  )
}
