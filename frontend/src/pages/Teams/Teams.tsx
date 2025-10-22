import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Teams.css';

const Teams = () => {
    const teams = [
        {
            name: 'Concept',
            description: 'Responsible for the overall design concept, mission requirements, and strategic planning of aircraft projects.',
            responsibilities: ['Mission analysis', 'Concept development', 'Requirements specification', 'System integration planning']
        },
        {
            name: 'Aerodynamics',
            description: 'Focuses on optimizing aircraft performance through aerodynamic design and analysis.',
            responsibilities: ['Wing design', 'CFD analysis', 'Wind tunnel testing', 'Performance optimization']
        },
        {
            name: 'Structure & Design',
            description: 'Handles structural integrity, materials selection, and mechanical design of aircraft components.',
            responsibilities: ['Structural analysis', 'CAD modeling', 'Materials selection', 'Load calculations']
        },
        {
            name: 'Manufacturing',
            description: 'Responsible for production planning, manufacturing processes, and quality control.',
            responsibilities: ['Manufacturing planning', 'Process optimization', 'Quality assurance', 'Production coordination']
        },
        {
            name: 'Test & Evaluation',
            description: 'Conducts testing procedures, data analysis, and performance validation.',
            responsibilities: ['Test planning', 'Data collection', 'Performance analysis', 'Validation procedures']
        },
        {
            name: 'Electronics',
            description: 'Develops and integrates electronic systems, avionics, and control systems.',
            responsibilities: ['Avionics design', 'Control systems', 'Sensor integration', 'Electronic testing']
        },
        {
            name: 'PR & Marketing',
            description: 'Manages public relations, marketing initiatives, and external communications.',
            responsibilities: ['Social media management', 'Event coordination', 'Sponsor relations', 'Content creation']
        }
    ];

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
                            <div key={index} className="team-card">
                                <h3>{team.name}</h3>
                                <p className="team-description">{team.description}</p>
                                <div className="team-responsibilities">
                                    <h4>Key Responsibilities:</h4>
                                    <ul>
                                        {team.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
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