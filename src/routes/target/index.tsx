import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/target/')({
  component: () => <div>Hello /target/!</div>
})