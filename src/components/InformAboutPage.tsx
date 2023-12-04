export function InformAboutPage({ text }: { text: string }) {
  return (
    <article className="bg-pi-secondary-purple px-2 text-center text-sm sm:text-lg sm:px-8 py-12 sm:py-24 w-72 sm:w-[28rem] text-white -mt-24 rounded ml-auto mr-auto">
      <p>{text}</p>
    </article>
  )
}
