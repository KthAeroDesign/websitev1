import './Header.css';
import logo from '../../assets/logo.png';
import { FiFileText, FiHome, FiUsers } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <a href="/" className="brand">
                    <img src={logo} alt="KTH Aero Design logo" className="logo-image" />
                    <h1 className="logo">KTH Aero Design</h1>
                </a>
                <nav className="header-nav">
                    <a href="/" className="home-link">
                        <span>Home</span>
                        <FiHome className="nav-icon" aria-hidden="true" />
                    </a>
                    <a href="/teams" className="teams-link">
                        <span>Teams</span>
                        <FiUsers className="nav-icon" aria-hidden="true" />
                    </a>
                    <a href="/board-members" className="teams-link">
                        <span>Board</span>
                        <FiUsers className="nav-icon" aria-hidden="true" />
                    </a>
                    <a href="/apply" className="apply-link">
                        <span>Apply</span>
                        <FiFileText className="nav-icon" aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
