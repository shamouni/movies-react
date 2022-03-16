import PropTypes from 'prop-types';
import {useEffect} from 'react';
import Slides from './Slides';

const time = 5000;
let Handle = null;

const Slider = ({data = []}) => {

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
    }, []);


    const initialize = () => {

        const container = document.querySelector('.container');
        const row = document.querySelector(".row-s.reverse");

        row.scrollLeft = row.scrollWidth;
        row.classList.add('slide-smooth');
        
        window.addEventListener('resize', startSlider);

        window.addEventListener('blur', () => clearTimeout(Handle));
        window.addEventListener('focus', startSlider);
        
        container.addEventListener('mouseenter', () => clearTimeout(Handle));
        container.addEventListener('mouseleave', startSlider);

        document.getElementById('prev-slide').addEventListener('click', () => slide('prev', false));
        document.getElementById('next-slide').addEventListener('click', () => slide('next', false));
    }
    
    
    const slide = (dir = 'next', loop = true) => {

        const gap = 2;
        const rows = document.querySelectorAll(".row-s");
        const s1 = document.querySelector('.slide');

        if(!s1) {
            return false;
        }

        const slideWidth = s1.offsetWidth;
        
        for(const r of rows) {
            
            const l = r.scrollLeft;
            const scrollEnd = r.scrollWidth - r.offsetWidth;
            const isReverse = r.classList.toString().indexOf('reverse') > -1;

            if(dir === 'next') {

                if(isReverse) {
                    r.scrollLeft = (l - gap > 0) ? l - slideWidth : r.scrollWidth;
                }
                else {
                    r.scrollLeft = (l + gap < scrollEnd) ? l + slideWidth : 0;
                }
            }
            else {
                if(isReverse) {
                    r.scrollLeft = (l + gap < scrollEnd) ? l + slideWidth : 0;
                }
                else {
                    r.scrollLeft = (l - gap > 0) ? l - slideWidth : r.scrollWidth;
                }
            }
        }

        clearTimeout(Handle);

        if(loop) {
            Handle = setTimeout(slide, time);
        }
    }

    const startSlider = () => {

        clearTimeout(Handle);

        if(window.screen.availWidth > 1200) {
            Handle = setTimeout(slide, time);
        }
    }

    const t = Math.ceil(data.length / 3);
    const d2 = [...data];

    const list1 = d2.splice(0, t);
    const list2 = d2.splice(0, t);
    const list3 = d2.splice(0, t);

    if(data.length > 0) {
        startSlider();
    }


    return (
        <section className="slider">
            <div className="container">

                <div id="prev-slide" className="arrow-slide"></div>

                <div className="row-s slide-smooth">
                    <Slides items={list1} />
                </div>

                <div className="row-s reverse slide-smooth2">
                    <Slides items={list2} />
                </div>

                <div className="row-s slide-smooth">
                    <Slides items={list3} />
                </div>

                <div id="next-slide" className="arrow-slide"></div>

            </div>
        </section>
    )
}

Slider.prototype = {
    data: PropTypes.array
}

export default Slider
