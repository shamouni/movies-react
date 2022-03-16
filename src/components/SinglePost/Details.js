import PropTypes from 'prop-types';
import {useState} from 'react';


const Details = ({post = {}}) => {

    const {
        id,
        title,
        genre = [],
        actors = [],
        satisfied,
        director,
        year,
        country,
        imdb
    } = post;

    const lk = 212;
    const dk = 7;

    const [like, setLike] = useState(lk);
    const [dislike, setDislike] = useState(dk);
    
    const likeClick = () => {
        setLike(like > lk ? lk : like + 1);
        setDislike(dk);
    }

    const dislikeClick = () => {
        setDislike(dislike > dk ? dk : dislike + 1);
        setLike(lk);
    }


    return (
        <div className="post-header">

            <div className="post-cover"></div>

            <div className="container">

                <div className="row">
                    <div className="figure col col-auto">
                        {id && <img src={`/assets/images/thumb${id}.jpg`} alt="" width={207} height={290} />}
                    </div>
                    <div className="col">
                        <div className="text">
                            <h1>{title || '-'}</h1>
                            <div className="meta">
                                <span>{genre ? genre.join(', ') : '-'}</span>
                                <span>{year || '-'}</span>
                                <span>+7</span>
                                <span>{country || ''}</span>
                                <span>2.1 hours</span>
                            </div>
                            <div className="cast">
                                <div className="row">
                                    <div className="col col-auto">
                                        <span className="icon yellow">
                                            <i className="fa fa-imdb" aria-hidden="true"></i>
                                        </span>
                                        {imdb || '-'}/10, 320 votes
                                    </div>
                                    <div className="col col-auto">
                                        <span className="icon green">
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                        </span>
                                        {satisfied || '-'}% satisfaction
                                    </div>
                                </div>
                                <div className="actors">
                                    <span className="lbl">Actors: </span>
                                    {actors ? actors.join(', ') : '-'}
                                </div>
                                <div className="director">
                                    <span className="lbl">Directors: </span>
                                    {director || '-'}
                                </div>
                                <div className="votes">
                                    <span onClick={likeClick}>
                                        <i className="fa fa-thumbs-up" aria-hidden="true"></i> 
                                        {like}
                                    </span>
                                    <span onClick={dislikeClick}>
                                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                        {dislike}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {
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

export default Details
