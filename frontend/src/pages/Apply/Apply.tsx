import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Apply.css';

const Apply = () => {
    const [activeTab, setActiveTab] = useState('General');
    const applicationsOpen = true; // Change to true when applications are open


    return (
        <>
            <Header />
            <div className="apply-container">
                <div className="apply-content">
                    <h2>Apply to KTH Aero Design</h2>
                    {applicationsOpen ? (
                        <>
                            <p>Pick what you're applying for and fill out the corresponding form. </p>
                            <p>Applications are open until March 9th.</p>


                            <div className="tabs">
                                <button
                                    className={activeTab === 'General' ? 'active' : ''}
                                    onClick={() => setActiveTab('General')}>
                                    General
                                </button>
                                <button
                                    className={activeTab === 'PR Team' ? 'active' : ''}
                                    onClick={() => setActiveTab('PR Team')}>
                                    PR Team
                                </button>
                            </div>
                            {/* Google Forms baserat på activeTab */}
                            <div className="form-area">
                                {activeTab === 'General' && (
                                    <div className="form-panel">
                                        <div className="form-embed">
                                            <iframe
                                                src="https://docs.google.com/forms/d/e/1FAIpQLSeCsWdjpL5IMAD15lLbeQJKqN9Rp9bOOlswJHZFzz3yEUsvSQ/viewform?embedded=true"
                                                title="General Application Form"
                                                loading="lazy"
                                                frameBorder="0"
                                                marginHeight={0}
                                                marginWidth={0}>
                                                Loading…
                                            </iframe>
                                        </div>
                                        <p className="form-alt">
                                            Prefer a new tab?
                                            <a
                                                href="https://forms.gle/hRmeJ97y6nF7CbKd9"
                                                target="_blank"
                                                rel="noopener">
                                                Open form ↗
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {activeTab === 'PR Team' && (
                                    <div className="form-panel">
                                        <div className="form-embed">
                                            <iframe
                                                src="https://docs.google.com/forms/d/e/1FAIpQLScEzUVLnxHQQBNwZLt4M6NWDn4aD3NAn2tTrbQZ7qNdmpugGg/viewform?embedded=true"
                                                title="PR Team Application Form"
                                                loading="lazy"
                                                frameBorder="0"
                                                marginHeight={0}
                                                marginWidth={0}>
                                                Loading…
                                            </iframe>
                                        </div>
                                        <p className="form-alt">
                                            Prefer a new tab?
                                            <a
                                                href="https://docs.google.com/forms/d/e/1FAIpQLScEzUVLnxHQQBNwZLt4M6NWDn4aD3NAn2tTrbQZ7qNdmpugGg/viewform"
                                                target="_blank"
                                                rel="noopener">
                                                Open form ↗
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
                            We are currently not accepting applications. Please check back later! <br></br> The form re-opens February 15.
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Apply;