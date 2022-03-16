import PropTypes from 'prop-types';
import Pagination from '../Pagination'
import PostItem from './Post-item'
import PostsSidebar from './Posts-sidebar'
import PostsSkeleton from './Posts-skeleton'


const Posts = (props) => {

    const {
        data = [], 
        fetching = true, 
        page = 1, 
        limit = 0, 
        count = 0
    } = props;

    const loading = data && data.length > 0;

    return (
        <section className='posts'>
            <div className="container">
                <div className="row">

                    <div className='col-left col col-9'>
                        {!fetching ? (
                            data.map((i, k) => <PostItem post={i} key={k} />)
                        ) : (
                            <PostsSkeleton />
                        )}

                        <Pagination page={page} limit={limit} count={count} />
                    </div>

                    <div className="col-right col">
                        <h4 className='head'>
                            <i className="fa fa-life-ring mr-1" aria-hidden="true"></i>
                            Latest Posts
                        </h4>
                        <div className="row col-latest">
                            {<PostsSidebar loading={loading} />}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

Posts.propTypes = {
    data: PropTypes.array,
    fetching: PropTypes.bool,
    limit: PropTypes.number,
    count: PropTypes.number,
}

export default Posts
