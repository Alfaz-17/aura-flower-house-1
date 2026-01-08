import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
       {/* Simulate Hero */}
       <div className="h-[60vh] w-full bg-muted/5 animate-pulse relative">
           <div className="absolute inset-0 flex items-center justify-center">
               {/* Subtle Logo Pulse */}
               <div className="w-24 h-24 rounded-full bg-primary/5 animate-pulse" />
           </div>
       </div>
       
       {/* Simulate Content Sections */}
       <div className="flex-1 px-6 md:px-12 py-24 space-y-24">
           <div className="max-w-screen-xl mx-auto space-y-8 text-center">
                 <Skeleton className="h-4 w-32 mx-auto" />
                 <Skeleton className="h-12 w-2/3 mx-auto" />
                 <Skeleton className="h-4 w-1/2 mx-auto" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
           </div>
       </div>
    </div>
  )
}
