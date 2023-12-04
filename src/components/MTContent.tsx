interface MTContentProps {
  title: string
  text: string
}

export function MTContent({ title, text }: MTContentProps) {
  return (
    <div className="w-full max-w-[35rem] space-y-2 text-center md:text-start">
      <h3 className="font-bold text-2xl text-center">{title}</h3>
      <p>{text}</p>
    </div>
  )
}
