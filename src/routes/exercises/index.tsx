import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/exercises/')({
  component: () => <div>Hello /exercises/!</div>
})