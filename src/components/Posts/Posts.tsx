import Pagination from "../Pagination";
import { TPost } from "../SinglePost/types";
import PostItem from "./Post-item";
import PostsSidebar from "./Posts-sidebar";
import PostsSkeleton from "./Posts-skeleton";

interface IPostsProps {
  data?: TPost[];
  fetching?: boolean;
  page?: number;
  limit?: number;
  count?: number;
}

const Posts = (props: IPostsProps) => {
  const { data = [], fetching = true, page = 1, limit = 0, count = 0 } = props;
  const hasData = data.length > 0;

  return (
    <section className="posts">
      <div className="container">
        <div className="row">
          {/* Left column: posts */}
          <div className="col-left col col-9">
            {!fetching && hasData ? (
              data.map((post) => <PostItem post={post} key={post.id} />)
            ) : (
              <PostsSkeleton />
            )}

            <Pagination page={page} limit={limit} count={count} />
          </div>

          {/* Right column: latest posts sidebar */}
          <div className="col-right col">
            <h4 className="head">
              <i className="fa fa-life-ring mr-1" aria-hidden="true"></i>
              Latest Posts
            </h4>
            <div className="row col-latest">
              <PostsSidebar loading={hasData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
