import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/~_unauthenticated/~login/components/login',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/~_unauthenticated/login/components/login"!</div>
}
