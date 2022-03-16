import {Link} from 'react-router-dom';

const Similars = () => {
    return (
        <section className='similar'>
            <div className="container">
                <h4 className='head'>Similars</h4>
                <div className="row">
                    {[...Array(6)].map((i, k) => (
                        <div className="col col-2" key={k}>
                            <Link to={"/post/" + (k + 1)}>
                                <img src={`/assets/images/thumb${k+1}.jpg`} alt="" />
                                <h5>Movies name</h5>
                                <div className="vote">
                                    <i className="fa fa-heart mr-05" aria-hidden="true"></i>
                                    85%
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Similars
