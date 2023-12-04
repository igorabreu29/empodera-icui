export function DivisorWidth({ width }: { width?: number }) {
  return (
    <div
      className={`w-full max-w-[${
        width ?? 67
      }rem] mx-auto my-4 bg-black h-[1px]`}
    ></div>
  )
}
