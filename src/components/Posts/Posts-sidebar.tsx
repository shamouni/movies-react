import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router";

const ROOT = process.env.REACT_APP_ROOT ?? "";

const BASE_COLOR = "#34343b";
const HIGHLIGHT_COLOR = "#454545";

interface IPostsSidebarProps {
  loading?: boolean;
}

const PostsSidebar = ({ loading = true }: IPostsSidebarProps) => {
  const skeletonItems = Array.from({ length: 7 });
  const postItems = Array.from({ length: 14 });

  return (
    <>
      {loading
        ? postItems.map((_, k) => {
            const postId = k < 8 ? k + 1 : k - 7;
            const daysAgo = Math.ceil(Math.random() * 22 + 2);

            return (
              <div className="col col-12" key={k}>
                <Link to={`${ROOT}/post/${postId}`} role="link">
                  <img
                    src={`${ROOT}/assets/images/s${k + 1}.jpg`}
                    alt={`Post ${postId}`}
                  />
                  <span className="date">{daysAgo} days ago</span>
                </Link>
              </div>
            );
          })
        : skeletonItems.map((_, k) => (
            <div
              className="col col-12 d-flex flex-center bg-skeleton py-4"
              key={k}
            >
              <div className="col col-auto">
                <SkeletonTheme
                  baseColor={BASE_COLOR}
                  highlightColor={HIGHLIGHT_COLOR}
                >
                  <Skeleton width={52} height={52} circle />
                </SkeletonTheme>
              </div>
              <div className="col">
                <SkeletonTheme
                  baseColor={BASE_COLOR}
                  highlightColor={HIGHLIGHT_COLOR}
                >
                  <Skeleton count={4} height={3} />
                </SkeletonTheme>
              </div>
            </div>
          ))}
    </>
  );
};

export default PostsSidebar;
