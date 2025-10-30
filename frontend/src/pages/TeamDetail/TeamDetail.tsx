import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { teams } from '../../data/teams';
import './TeamDetail.css';

const TeamDetail = () => {
    const { teamId } = useParams<{ teamId: string }>();
    const navigate = useNavigate();

    const team = teams.find(t => t.id === teamId);

    if (!team) {
        return (
            <>
                <Header />
                <div className="team-detail-container">
                    <div className="team-detail-content">
                        <div className="error-message">
                            <h2>Team not found</h2>
                            <p>The team you're looking for doesn't exist.</p>
                            <button onClick={() => navigate('/teams')} className="back-button">
                                <FiArrowLeft /> Back to Teams
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="team-detail-container">
                <div className="team-detail-content">
                    {/* Back Button */}
                    <button onClick={() => navigate('/teams')} className="back-button">
                        <FiArrowLeft /> Back to Teams
                    </button>

                    {/* Hero Section */}
                    <div className="team-hero">
                        <h1>{team.name}</h1>
                        <p className="team-subtitle">{team.description}</p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="team-detail-grid">
                        {/* About Section */}
                        <section className="team-section about-section">
                            <h2>About the Team</h2>
                            <div className="section-content">
                                {team.longDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>



                        {/* Goals
                        <section className="team-section goals-section">
                            <div className="section-header">
                                <FiTarget className="section-icon" />
                                <h3>Team Goals</h3>
                            </div>
                            <div className="section-content">
                                <ul className="goals-list">
                                    {team.goals.map((goal, index) => (
                                        <li key={index}>{goal}</li>
                                    ))}
                                </ul>
                            </div>
                        </section> */}




                        {/* Responsibilities
                        <section className="team-section responsibilities-section">
                            <div className="section-header">
                                <FiUsers className="section-icon" />
                                <h3>Key Responsibilities</h3>
                            </div>
                            <div className="section-content">
                                <div className="responsibilities-grid">
                                    {team.responsibilities.map((responsibility, index) => (
                                        <div key={index} className="responsibility-card">
                                            {responsibility}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section> */}




                        {/* What we work with
                        <section className="team-section skills-section">
                            <div className="section-header">
                                <FiTool className="section-icon" />
                                <h3>What We Work With</h3>
                            </div>
                            <div className="section-content">
                                <div className="skills-grid">
                                    {team.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section> */}


                    </div>





                    {/* Call to Action */}
                    <div className="team-cta">
                        <h2>Interested in Joining {team.name}?</h2>
                        <p>Ready to contribute to cutting-edge aircraft design? Join our {team.name} team and help shape the future of aerospace engineering.</p>
                        <div className="cta-buttons">
                            <a href="/apply" className="cta-button primary">
                                Apply Now
                            </a>
                            <button onClick={() => navigate('/teams')} className="cta-button secondary">
                                View Other Teams
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TeamDetail;