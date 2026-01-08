import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function LoadingSpinner({ size = 48, className, ...props }: LoaderProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Loader2 
        className="animate-spin text-primary" 
        size={size} 
        strokeWidth={1.5}
      />
    </div>
  )
}

export function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <LoadingSpinner size={60} />
        </div>
    )
}
