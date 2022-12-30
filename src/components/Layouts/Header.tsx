import {Link} from 'react-router-dom'
import logo from '../../assets/icon/rest.png'
import { IoRestaurantOutline } from 'react-icons/io5';


const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <span className="logo__title">Cookery</span>
                <img src={logo} alt="logo" className="logo__img"/>
                {/*<IoRestaurantOutline className="logo__svg" />*/}
            </Link>
            <nav className="navbar">
                <Link to="/" className="home logo">Home</Link>
                <Link to="favourites" className="logo">Favourites</Link>
            </nav>
            
        </header>
    );
};

export default Header;