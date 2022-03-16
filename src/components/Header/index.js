import {Link} from 'react-router-dom';
import NavMobile from './Nav-Mobile';
import Search from './Search';

const ROOT = process.env.REACT_APP_ROOT;
const CATEGORY = ROOT + "/category";


const Header = () => {
    return (
        <header>
            <div className="container">

                <div className="row">

                    <div className="col col-auto">
                        <Link to={ROOT}>
                            <img src={`${ROOT}/assets/images/logo.png`} alt='logo' />
                        </Link>
                    </div>

                    <div id="menu-main" className="col">
                        <ul>
                            <li><Link to={ROOT}>Home</Link></li>
                            <li className='has-sub'>
                                <Link to={CATEGORY}>
                                    Movies
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </Link>
                                
                                <ul>
                                    <li><Link to={CATEGORY}>Comedy</Link></li>
                                    <li><Link to={CATEGORY}>Action</Link></li>
                                    <li><Link to={CATEGORY}>Marvel</Link></li>
                                    <li><Link to={CATEGORY}>Science Fiction</Link></li>
                                </ul>
                            </li>
                            <li><Link to={CATEGORY}>Archive</Link></li>
                            <li><Link to={CATEGORY}>Action</Link></li>
                            <li><Link to={ROOT}>About</Link></li>
                        </ul>
                    </div>

                    <div className="col col-3 col-search">
                        <Search />
                    </div>

                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header
