import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    const handleJoinTeam = () => {
        navigate('/apply');
    };

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>TURNING IDEAS INTO WINGS</h1>
                <button className="hero-button" onClick={handleJoinTeam}>Join the team</button>
            </div>
        </div>
    );
};

export default Hero;