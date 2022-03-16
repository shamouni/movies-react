import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SliderSkeleton from './Slider-skeleton';

const Slides = ({items = []}) => {

    const getLink = id => {
        const rnd = Math.ceil(Math.random() * 7) + 1;
        const idMock = id > 8 ? rnd : id;
        return '/post/' + idMock;
    }

    return (
        <>
        {items && items.length > 0 ? (
            items.map(i => (
                <Link to={getLink(i.id)} key={i.id} className="slide">
                    <img src={"assets/images/" + i.image} alt='' />
                </Link>
            ))
        ) : (
            <SliderSkeleton />    
        )}
        </>
    )
}

Slides.prototype = {
    items: PropTypes.array
}

export default Slides;
