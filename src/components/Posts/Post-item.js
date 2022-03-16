import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PostItem = ({ post }) => {

    const {
      id,
      title,
      genre,
      satisfied,
      actors,
      director,
      desc,
      year,
      country,
      imdb,
    } = post;

    const url = `/post/${id}`;

    return (
        <div className='post-item'>
            <Link to={url} className="figure">
                <img src={`assets/images/thumb${id}.jpg`} alt="" width='207' height='290' />
            </Link>
            <div className="text">
                <h5 className='title'>
                    <Link to={url}>{title}</Link>
                </h5>
                
                <div className="meta">
                    <span>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                            {genre.join(', ')}
                        </span>
                    <span>
                    <span>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                            {satisfied}% satisfied
                        </span>
                    </span>
                </div>

                <div className="cast">
                    <div>Actors: {actors.join(', ')}</div>
                    <div>Director: {director}</div>
                </div>

                <div className="desc">
                    {desc}...
                </div>

                <div className="info">
                    <div>
                        <span>
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            Year: {year}
                        </span>
                        <span>
                            <i className="fa fa-life-ring" aria-hidden="true"></i>
                            Country: {country}
                        </span>
                        <span>
                            <i className="fa fa-imdb" aria-hidden="true"></i>
                            Imdb: {imdb}
                        </span>
                    </div>
                    <Link to={url} className="btn btn-blue">Watch Online</Link>
                </div>
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.array,
        satisfied: PropTypes.number,
        actors: PropTypes.array,
        director: PropTypes.string,
        desc: PropTypes.string,
        year: PropTypes.string,
        country: PropTypes.string,
        imdb: PropTypes.number
    })
}

export default PostItem
