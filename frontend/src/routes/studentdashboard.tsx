import StudentDashBoard from '@/components/StudentDashBoard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studentdashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <StudentDashBoard/>
}
