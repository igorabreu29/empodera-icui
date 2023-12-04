import { InformAboutPage } from '@/components/InformAboutPage'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

import FirstMember from '../../assets/member-1.jpeg'
import SecondMember from '../../assets/member-2.jpg'
import ThirthMember from '../../assets/member-3.webp'
import TeacherMember from '../../assets/teacher-member.jpeg'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conta um breve resumo do projeto Empodera Icuí e mostra os membros criadores',
}

export default function About() {
  return (
    <div>
      <Title text="Sobre" />
      <InformAboutPage text="Conheça um pouco sobre o projeto Empodera Icuí e veja os membros participantes da criação do website." />

      <section
        className="flex flex-col mx-auto mt-10 items-center justify-center gap-4 w-full max-w-[40rem] leading-relaxed px-4"
        data-aos="fade-down"
      >
        <h3 className="font-semibold text-xl md:text-2xl">
          Projeto Empodera Icuí:
        </h3>
        <p className="text-justify text-sm md:text-base">
          O Empodera Icuí é um grupo criado em 2022, composto pela Professora
          Ma. Cristiane Ribeiro e alguns alunos do Instituto Federal do Pará
          Campus Ananindeua. Ele foi criado a partir de um projeto de pesquisa
          denominado{' '}
          {`"O papel da escola nas relações de gênero e no
          enfrentamento da violência contra a mulher moradora do Icuí Guajará -
          Ananindeua PA"`}{' '}
          e possui como objetivo discutir com a comunidade interna e externa
          sobre questões que englobam as relações de gênero, bem como a
          violência contra a mulher. As atividades foram realizadas no segundo
          semestre de 2022 e incluíram aplicações de questionários, rodas de
          conversa, palestras e oficinas sobre a integração da mulher na
          sociedade. Para dúvidas, sugestões, mais informações e contato,
          escreva-nos pelo e-mail: icuiempodera@gmail.com.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-12 px-16 py-6 mt-8">
        <div
          className="bg-zinc-300 flex items-center justify-between flex-col gap-6 md:gap-2 md:flex-row px-4 md:px-8 py-4 rounded w-full max-w-[58rem]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-lg font-semibold">Yasmim Cristina</h3>
            <p className="font-medium">
              Aluna do 3° ano de informática no IFPA.
            </p>
            <a
              href="https://instagram.com/yasm.im2007"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram: <br />
              @yasm.im2007
            </a>
          </div>

          <Image
            src={FirstMember}
            width={150}
            className="object-cover h-48 rounded"
            alt=""
          />
        </div>

        <div
          className="bg-zinc-300 flex items-center justify-between flex-col gap-6 md:gap-2 md:flex-row px-4 md:px-8 py-4 rounded w-full max-w-[58rem]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-lg font-semibold">Nicolas Arthur</h3>
            <p className="font-medium">
              Aluno do 3° ano de informática no IFPA.
            </p>
            <a
              href="https://instagram.com/nicolas.arthur"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram: <br />
              @nicolas.arthur
            </a>
          </div>

          <Image
            src={SecondMember}
            width={150}
            className="object-cover h-48 rounded"
            alt=""
          />
        </div>

        <div
          className="bg-zinc-300 flex items-center justify-between flex-col gap-6 md:gap-2 md:flex-row px-4 md:px-8 py-4 rounded w-full max-w-[58rem]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-lg font-semibold">Sophia Canuto</h3>
            <p className="font-medium">
              Aluna do 3° ano de informática no IFPA.
            </p>
            <a
              href="https://instagram.com/_swphia_"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram: <br />
              @_swphia_
            </a>
          </div>

          <Image
            src={ThirthMember}
            width={150}
            className="object-cover h-48 rounded"
            alt=""
          />
        </div>

        <div
          className="bg-zinc-300 flex items-center justify-between flex-col gap-6 md:gap-2 md:flex-row px-4 md:px-8 py-4 rounded w-full max-w-[58rem]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-lg font-semibold">Leika Cristiane</h3>
            <p className="font-medium">
              Professora de letras/Espanhol no IFPA.
            </p>
            <a
              href="https://instagram.com/profacristiane.costa"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram: <br />
              @profacristiane.costa
            </a>
          </div>

          <Image
            src={TeacherMember}
            width={150}
            className="object-cover h-48 rounded"
            alt=""
          />
        </div>
      </section>
    </div>
  )
}
