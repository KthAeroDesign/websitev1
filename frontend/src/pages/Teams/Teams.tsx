import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { teams } from '../../data/teams';
import './Teams.css';

const Teams = () => {
    const navigate = useNavigate();

    const handleTeamClick = (teamId: string) => {
        navigate(`/teams/${teamId}`);
    };

    return (
        <>
            <Header />
            <div className="teams-container">
                <div className="teams-content">
                    <div className="teams-header">
                        <h1>Our Functional Teams</h1>
                        <p>Meet the specialized teams that make KTH Aero Design successful. Each team brings unique expertise to our aircraft design and development projects.</p>
                    </div>

                    <div className="teams-grid">
                        {teams.map((team, index) => (
                            <div
                                key={index}
                                className="team-card clickable"
                                onClick={() => handleTeamClick(team.id)}
                            >
                                <h3>{team.name}</h3>
                                <p className="team-description">{team.description}</p>
                                {/* <div className="team-responsibilities">
                                    <h4>Key Responsibilities:</h4>
                                    <ul>
                                        {team.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div> */}
                                <div className="click-hint">
                                    <span>Click to learn more →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="teams-cta">
                        <h2>Interested in Joining a Team?</h2>
                        <p>We're always looking for passionate individuals to join our teams. Each team offers unique learning opportunities and the chance to work on cutting-edge aircraft design projects.</p>
                        <a href="/apply" className="cta-button">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Teams;