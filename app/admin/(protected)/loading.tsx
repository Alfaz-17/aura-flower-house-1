import { LoadingSpinner } from "@/components/ui/loader"

export default function AdminLoading() {
  return (
    <div className="h-full w-full min-h-[50vh] flex items-center justify-center">
       <LoadingSpinner />
    </div>
  )
}
