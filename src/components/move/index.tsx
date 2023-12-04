import Link from 'next/link'

interface MoveProps {
  title: string
  url: string
  text: string
}

export function Move({ text, title, url }: MoveProps) {
  return (
    <div className="flex items-center justify-start flex-col gap-2 w-72 text-center">
      <h3 className="text-2xl font-medium">{title}</h3>
      <Link href={url} className="text-sm font-medium">
        {text}
      </Link>
    </div>
  )
}
