interface TitleProps {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <header className="bg-degrade bg-400% bg-no-repeat animate-degrade h-[36rem] flex items-center justify-center font-bold p-10 text-white flex-col gap-4">
      <h2 className="text-center text-5xl md:text-6xl leading-normal">
        {text}
      </h2>
    </header>
  )
}
