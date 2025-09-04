import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SliderSkeleton = () => {
  return (
    <>
      {[...Array(9)].map((_, k) => (
        <div
          className="slide skeleton bg-skeleton"
          key={k}
          data-testid="slide-skeleton"
        >
          <SkeletonTheme baseColor="#23232b" highlightColor="#333">
            <Skeleton count={4} height={2} />
          </SkeletonTheme>
        </div>
      ))}
    </>
  );
};

export default SliderSkeleton;
