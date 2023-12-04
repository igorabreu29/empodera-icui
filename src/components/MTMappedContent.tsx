import { data } from '@/utils/mt-all-content'
import { MTContent } from './MTContent'

export function MTMappedContent() {
  return (
    <>
      {data.map((item) => (
        <MTContent key={item.title} title={item.title} text={item.text} />
      ))}
    </>
  )
}
