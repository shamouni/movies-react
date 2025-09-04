import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";

import Slider from "../Slider";
import Posts from "../Posts";
import { Fetch_Posts } from "../../store/actions/post-actions";
import { TSlideItem } from "../Slider/types";
import { TPost } from "../SinglePost/types";

interface HomeProps {
  sliders: TSlideItem[];
  posts: TPost[];
  count: number;
  fetching: boolean;
  Fetch_Posts: (params: { page: number; limit: number }) => void;
}

const usePage = (): number => {
  const page = new URLSearchParams(useLocation().search).get("page");
  return page ? parseInt(page) : 1;
};

export const Home: React.FC<HomeProps> = ({
  posts,
  sliders,
  count,
  fetching,
  Fetch_Posts,
}) => {
  const isHome = useLocation().pathname !== "/category";
  const page = usePage();
  const limit = 6;

  useEffect(() => {
    Fetch_Posts({ page, limit });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      {isHome && <Slider data={sliders} />}
      <Posts
        data={posts}
        fetching={fetching}
        page={page}
        limit={limit}
        count={count}
      />
    </>
  );
};

// --- Redux typings ---
interface RootState {
  sliders: TSlideItem[];
  posts: TPost[];
  count: number;
  fetching: boolean;
}

const mapStateToProps = (state: RootState) => ({
  sliders: state.sliders,
  posts: state.posts,
  count: state.count,
  fetching: state.fetching,
});

const mapDispatchToProps = {
  Fetch_Posts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
