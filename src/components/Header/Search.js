import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DataMock from '../../store/data-mock.json';

const body = document.querySelector('body');


const Search = () => {

    const [filteredList, setFilteredList] = useState([]);
    const [flag, setFlag] = useState(false);
	const inputClick = (e) => e.stopPropagation();

    const hideList = () => setFlag(false);
    const showList = () => setFlag(true);

    useEffect(() => {
        body.addEventListener('mousedown', hideList);

        return () => {
            body.removeEventListener('mousedown', hideList);
        }
    }, []);



    const lookup = e => {
        const {posts} = DataMock;
        const {value} = e.target;

        const regular = new RegExp(value, 'i');
        let f = posts.filter(i => i.title.match(regular));

        setFilteredList(f);
    }

    const itemClick = e => {
        e.stopPropagation();
        setTimeout(hideList, 500);
    }


    return (
        <div id="search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input 
                onKeyUp={lookup} 
                onFocus={showList} 
				onMouseDown={inputClick} 
                type="text" 
                name="search" 
                autoComplete='off' 
                placeholder='Search movies name ...' 
            />

            {(flag && filteredList.length > 0) && (
                <div className="list">
                    {filteredList.map(i => (
                        <Link onMouseDown={itemClick} to={'/post/' + i.id} key={i.id} >
                            {i.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
