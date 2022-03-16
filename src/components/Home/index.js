import PropTypes from 'prop-types';
import { useEffect } from "react";
import {connect} from 'react-redux';
import { useLocation } from 'react-router-dom';

import Slider from "../Slider";
import Posts from "../Posts";
import { Fetch_Posts } from "../../store/actions/post-actions";

const usePage = () => {
  // The URLSearchParams interface defines utility methods to work with the query string of a URL.
  const page = new URLSearchParams(useLocation().search).get('page');
  return page ? parseInt(page) : 1;
}

const Home = (props) => {
  
  const {posts, sliders, count, fetching, Fetch_Posts} = props;
  const isHome = useLocation().pathname !== '/category' ? true : false;
  
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

const mapStateToProps = state => ({
  sliders: state.sliders,
  posts: state.posts,
  count: state.count,
  fetching: state.fetching
});

const mapDispatchToProps = {
  Fetch_Posts
}

Home.propTypes = {
  sliders: PropTypes.array,
  posts: PropTypes.array,
  count: PropTypes.number,
  fetching: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
