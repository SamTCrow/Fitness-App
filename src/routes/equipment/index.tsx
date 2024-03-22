import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/equipment/')({
  component: () => <div>Hello /equipment/!</div>
})