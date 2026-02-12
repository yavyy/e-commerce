import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function ViewDetailSkeleton() {
  return (
    <SkeletonTheme baseColor="#dee0e3" highlightColor="#babcbf">
      <div className="xl:w-1/2 shadow-lg rounded-md gap-2.5 flex md:flex-row justify-between p-6 flex-col mt-10 w-3/4">
        <div className="w-1/2 hidden md:block">
          <Skeleton height={"100%"} />
        </div>
        <div className="lg:hidden block h-[20vh]">
          <Skeleton height={"100%"} />
        </div>
        <div className="w-full">
          <h2>
            <Skeleton height={35} />
          </h2>
          <p className="text-lg">
            <Skeleton count={2} />
          </p>
          <div className="flex flex-col gap-2">
            <p>
              <Skeleton width={100} height={25} />
            </p>
            <button>
              <Skeleton height={30} count={2} />
            </button>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default ViewDetailSkeleton