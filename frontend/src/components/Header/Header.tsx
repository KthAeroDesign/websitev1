import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="brand">
                    <img src={logo} alt="KTH Aero Design logo" className="logo-image" />
                    <h1 className="logo">KTH Aero Design</h1>
                </div>
                <nav className="header-nav">
                    <a href="/">Home</a>
                    <a href="/apply">Apply</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
