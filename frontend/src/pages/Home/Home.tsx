import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SponsorCard from '../../components/SponsorCard/SponsorCard';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import './Home.css'; // För sid-specifik layout

// Importera bilder
import sarcLogo from '../../assets/sarc-logo.png'; 
import vaxholmLogo from '../../assets/vaxholm-logo.png';
import fmvLogo from '../../assets/fmv-logo.png';


const Home = () => {

    const handleProjectClick = (projectName: string) => {
        alert(`Du klickade på projektet: ${projectName}`);
    };

    return (
        <>
            <Header />
        
            <Hero />
            <main className="container">
                <section id="projects" className="projects-section">
                    <h2>Our projects</h2>
                    <div className="cards-container">
                        <ProjectCard
                            title="New Flying Competition 2025 – NFC-25"
                            description="The NFC-25 aircraft is our first competition UAV, designed to comply with New Flying Competition 2025 regulations. Manufacturing is in its final stages."
                            onClick={() => handleProjectClick('NFC-25')}
                        />
                        <ProjectCard
                            title="Modular Drone System – MDS"
                            description="A project with the purpose of developing modular systems for drone applications. Work begins this fall."
                            onClick={() => handleProjectClick('MDS')}
                        />
                    </div>
                </section>

                <About />

                <section id="sponsors" className="sponsors-section">
                    <h2>Our sponsors</h2>
                    <div className="cards-container">
                        <SponsorCard
                            logoUrl={sarcLogo}
                            name="SARC — Swedish Aerospace Research Center"
                            description="SARC is a strategic collaboration of Swedish universities and research organisations conducting research and education within the aerospace sector."
                            websiteUrl="https://www.sarc.center/"
                        />
                        <SponsorCard
                            logoUrl={vaxholmLogo}
                            name="Vaxholm Komposit"
                            description="One of the foremost companies in composite manufacturing in Sweden. They supply the team with a composite workshop as well as crucial know-how."
                            websiteUrl="https://www.vaxholmkomposit.se/"
                        />
                        <SponsorCard
                            logoUrl={fmvLogo}
                            name="Försvarets Materielverk (FMV)"
                            description="FMV procures, develops, and delivers equipment and services to the Swedish Armed Forces."
                            websiteUrl="https://www.fmv.se/"
                        />
                    </div>
                    
                </section>
                
            </main>
            <Footer />
        </>
    );
};

export default Home;