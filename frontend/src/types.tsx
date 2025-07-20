import type { LucideIcon } from "lucide-react";

export interface Metriccardprops{
    title:string,
    value:string | number,
    variant?: 'default' | 'success' | 'warning' | 'primary';
    icon?: LucideIcon;
    description?: string;
}