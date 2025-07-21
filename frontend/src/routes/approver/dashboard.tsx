import { createFileRoute } from '@tanstack/react-router'
import ApproverDashBoard from '@/components/approver/ApproverDashBoard'

export const Route = createFileRoute('/approver/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ApproverDashBoard/>
}
