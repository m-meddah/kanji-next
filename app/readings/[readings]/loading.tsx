export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="bg-gray-200 animate-pulse rounded-lg h-8 w-64"></div>
        <div className="bg-gray-200 animate-pulse rounded-lg h-12 w-96"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg aspect-square"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
