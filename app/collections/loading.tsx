import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-2xl w-full">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-16 w-3/4" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="px-6 md:px-12 pb-48">
         <div className="max-w-screen-2xl mx-auto mb-16">
            <Skeleton className="h-10 w-64" />
            <div className="w-24 h-px bg-primary/20 mt-4" />
         </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px border-y border-foreground/10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/3] relative p-8 md:p-12 lg:p-20 border-b md:border-b-0 md:odd:border-r border-foreground/10 flex flex-col justify-between">
                <div className="space-y-4 relative z-10 w-2/3">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-12 w-48" />
                    <Skeleton className="h-4 w-full" />
                </div>
                 <div className="absolute inset-0 z-0 bg-muted/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
