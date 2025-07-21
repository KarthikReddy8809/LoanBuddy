import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import type { Metriccardprops } from "@/types";
const MetricCard=({title,value,variant,icon,description}:Metriccardprops)=>{
    const getVariantStyles = () => {
        switch (variant) {
          case 'success':
            return 'border-[hsl(142_76%_36%)]/20 bg-gradient-to-br from-[hsl(142_76%_36%)]/5 to-[hsl(142_76%_36%)]/10';
          case 'warning':
            return 'border-[hsl(38_92%_50%)]/20 bg-gradient-to-br from-[hsl(38_92%_50%)]/5 to-[hsl(38_92%_50%)]/10';
          case 'primary':
            return 'border-[hsl(262_83%_58%)]/20 bg-gradient-to-br from-[hsl(262_83%_58%)]/5 to-[hsl(262_83%_58%)]/10';
          default:
            return 'border-border bg-card';
        }
      };
      const getVariantText = () => {
        switch (variant) {
          case 'success':
            return 'text-green-500';
          case 'warning':
            return 'text-yellow-500';
          case 'primary':
            return 'text-red-500';
          default:
            return 'text-black-500';
        }
      };
      const Icon = icon;
    return(
            <Card className={`w-[300px] flex flex-col shadow-md border border-2 ${getVariantStyles()}`}>
                <CardTitle className=" flex flex-row justify-between text-muted-foreground font-bold ml-5">
                    {title}
                    <span className="mr-5">{Icon && <Icon className={`w-4 h-4 ${getVariantText()}`}/>}</span>
                </CardTitle>
                <CardContent className={`text-2xl font-bold ${getVariantText()}`}>
                    {value}
                </CardContent>
                <CardFooter className="text-muted-foreground text-sm">
                    {description}
                </CardFooter>
            </Card>

    )

}
export default MetricCard;