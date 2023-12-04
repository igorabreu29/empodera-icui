import Link from 'next/link'

interface CardProps {
  url: string
  text: string
  textButton: string
}

export function Card({ text, url, textButton }: CardProps) {
  return (
    <article
      className={`p-2 rounded h-96 flex items-center justify-end flex-col gap-2 w-full max-w-[19rem] bg-center bg-cover bg-[url(../assets/cycle.jpeg)]`}
    >
      <span className="w-60 text-center font-semibold text-lg">{text}</span>
      <Link
        href={url}
        className="w-full p-1 bg-pi-primary-purple rounded text-center text-white hover:scale-105 transition-transform"
      >
        {textButton}
      </Link>
    </article>
  )
}
