import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { Toaster } from "@/components/ui/sonner"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
    const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <React.Fragment>
      <Toaster />
      <Outlet />
    </React.Fragment>
    </QueryClientProvider>
  )
}
