import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown, House } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <h1 className="font-semibold text-xl ">Loan Buddy</h1>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenuItem className="hover:bg-muted hover:cursor-pointer">
        <div className="flex items-center gap-2">
        <House size={16}/>
        <h1>Home</h1>
        </div>
      </SidebarMenuItem>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
        
      
  )
}