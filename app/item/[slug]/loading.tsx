import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-32 md:pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
            {/* Back Link Skeleton */}
          <Skeleton className="h-4 w-48 mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Images Skeleton */}
            <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="aspect-[3/4] w-full" />
                  <Skeleton className="aspect-[3/4] w-full" />
               </div>
            </div>

            {/* Details Skeleton */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-12 md:h-16 w-3/4" />
                <Skeleton className="h-8 w-24" />
              </div>

              <div className="pt-8 border-t border-foreground/10 space-y-6">
                <div>
                  <Skeleton className="h-4 w-24 mb-3" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>

                <div>
                   <Skeleton className="h-4 w-24 mb-2" />
                   <Skeleton className="h-4 w-32" />
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                  <Skeleton className="h-14 w-full" />
                  <Skeleton className="h-14 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
