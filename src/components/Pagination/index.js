import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Pagination = ({page = 1, limit = 1, count = 1}) => {

    const url = '?page=';
    const pagesCount = Math.ceil(count / limit);

    return (
        <div className='pagination'>
            <ul>
                {page > 1 && (
                    <li>
                        <Link to={url + (page - 1)} className="btn btn-blue">Prev</Link>
                    </li>
                )}
                
                {count > 1 && (
                    [...Array(pagesCount)].map((i, k) => {
                        
                        const active = k + 1 === page ? 'active' : 'normal';

                        return (
                            <li key={k}>
                                <Link to={url + (k + 1)} className={`btn btn-blue ${active}`}>
                                    {k + 1}
                                </Link>
                            </li>
                        )
                    })
                )}

                {page * limit < count && (
                    <li>
                        <Link to={url + (page + 1)} className="btn btn-blue">Next</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number,
    count: PropTypes.number
}

export default Pagination
