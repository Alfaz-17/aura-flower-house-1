import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 md:pt-48 pb-12 px-6 md:px-12 border-b">
        <div className="max-w-screen-2xl mx-auto space-y-8">
          <Skeleton className="h-4 w-32" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4 w-full max-w-2xl">
              <Skeleton className="h-12 md:h-16 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-6">
              <Skeleton className="aspect-[3/4] w-full" />
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
