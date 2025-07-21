import { createFileRoute } from '@tanstack/react-router'
import Login from '@/components/approver/Login'

export const Route = createFileRoute('/approver/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
