import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const bColor = "#34343b";
const hColor = "#454545";

const PostsSkeleton = () => {
  return (
    <>
      {[...Array(4)].map((_, k) => (
        <div
          className="post-item flex-center"
          key={k}
          data-testid="post-skeleton-item"
        >
          <div className="col col-auto figure">
            <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
              <Skeleton
                data-testid="skeleton-avatar"
                count={1}
                width={92}
                height={92}
                circle={true}
              />
            </SkeletonTheme>
          </div>
          <div className="col">
            <div className="desc">
              <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                <Skeleton data-testid="skeleton-text" count={8} height={4} />
              </SkeletonTheme>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsSkeleton;
