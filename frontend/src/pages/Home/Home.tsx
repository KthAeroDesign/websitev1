import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SponsorCard from '../../components/SponsorCard/SponsorCard';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import { projects } from '../../data/projects';
import { sponsors } from '../../data/sponsors';
import './Home.css'; // För sid-specifik layout


const Home = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <>
            <Header />

            <Hero />
            <main className="container">
                <section id="projects" className="projects-section">
                    <h2>Our projects</h2>
                    <div className="cards-container">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                onClick={() => handleProjectClick(project.id)}
                            />
                        ))}
                    </div>
                </section>

                <About />

                <section id="sponsors" className="sponsors-section">
                    <h2>Our sponsors</h2>
                    <div className="cards-container">
                        {sponsors.map((sponsor) => (
                            <SponsorCard
                                key={sponsor.id}
                                logoUrl={sponsor.logoUrl}
                                name={sponsor.name}
                                description={sponsor.description}
                                websiteUrl={sponsor.websiteUrl}
                            />
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Home;