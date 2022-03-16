import PropTypes from 'prop-types';

const Trailer = ({post = {}}) => {

    const { id, desc, summary } = post;

    return (
        <div className="trailer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <video 
                            src="/assets/images/goal.mp4" 
                            poster={`/assets/images/thumb${id}.jpg`} 
                            width='100%' 
                            controls 
                            preload='none'
                        ></video>
                    </div>
                    <div className="col text">
                        <h5>Summary</h5>
                        <p>{desc}</p>
                        <h5 className='mt-3'>About</h5>
                        <p>{summary}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

Trailer.prototype = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        desc: PropTypes.string,
        summary: PropTypes.string
    }).isRequired
}

export default Trailer
