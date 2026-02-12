import Skeleton from "react-loading-skeleton"

function ProductsSkeleton() {
  return (
    <div className="bg-white/50 p-4 rounded-md flex flex-col gap-2">
      <div className="w-full">
        <Skeleton height={"20vh"} />
      </div>
      <div>
        <Skeleton width={"60%"} />
        <Skeleton count={2} />
      </div>
      <div>
        <Skeleton width={"30%"} />
      </div>
    </div>
  )
}

export default ProductsSkeleton