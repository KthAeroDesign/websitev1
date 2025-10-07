import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../../data/projects';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const project = projectId ? getProjectById(projectId) : undefined;

    if (!project) {
        return (
            <>
                <Header />
                <main className="container">
                    <div className="project-not-found">
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                        <button onClick={() => navigate('/')} className="back-button">
                            ← Back to Home
                        </button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="container">
                <div className="project-detail">
                    <div className="project-header">
                        <button onClick={() => navigate('/')} className="back-button">
                            ← Back to Projects
                        </button>
                        <h1>{project.title}</h1>
                        <div className="project-status">
                            <span className="status-badge">{project.status}</span>
                        </div>
                    </div>

                    <div className="project-content">
                        <section className="project-overview">
                            <h2>Project Overview</h2>
                            <p className="project-description">{project.fullDescription}</p>
                        </section>

                        {project.specifications && (
                            <section className="project-specifications">
                                <h2>Specifications</h2>
                                <div className="specs-grid">
                                    {Object.entries(project.specifications).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-label">{key}:</span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.timeline && (
                            <section className="project-timeline">
                                <h2>Project Timeline</h2>
                                <div className="timeline">
                                    {project.timeline.map((phase, index) => (
                                        <div key={index} className={`timeline-item ${phase.completed ? 'completed' : 'pending'}`}>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h3>{phase.phase}</h3>
                                                <p>{phase.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProjectDetail;