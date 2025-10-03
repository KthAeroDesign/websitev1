import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-content">
                <h1>KTH Aero Design</h1>
                <nav className="header-nav">
                    <a href="/">Home</a>
                    <a href="/apply">Apply</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
