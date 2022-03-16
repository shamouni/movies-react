import {Link} from 'react-router-dom';
import NavMobile from './Nav-Mobile';
import Search from './Search';

const Header = () => {
    return (
        <header>
            <div className="container">

                <div className="row">

                    <div className="col col-auto">
                        <Link to="/">
                            <img src='/assets/images/logo.png' alt='logo' />
                        </Link>
                    </div>

                    <div id="menu-main" className="col">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className='has-sub'>
                                <Link to="/category">
                                    Movies
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </Link>
                                
                                <ul>
                                    <li><Link to="/category">Comedy</Link></li>
                                    <li><Link to="/category">Action</Link></li>
                                    <li><Link to="/category">Marvel</Link></li>
                                    <li><Link to="/category">Science Fiction</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/category">Archive</Link></li>
                            <li><Link to="/category">Action</Link></li>
                            <li><Link to="/">About</Link></li>
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
