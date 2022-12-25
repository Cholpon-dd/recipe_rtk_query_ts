import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <p>Cookery</p>
            </Link>
            <nav className="navbar">
                <Link to="/" className="home">Home</Link>
                <Link to="favourites">Favourites</Link>
            </nav>
            
        </header>
    );
};

export default Header;