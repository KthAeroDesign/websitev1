import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Apply.css';

const Apply = () => {
    const [activeTab, setActiveTab] = useState('General');

    return (
        <>
            <Header />
            <div className="apply-container">
                <div className="apply-content">
                    <h2>Apply to KTH Aero Design</h2>
                    <p>Pick what you're applying for and fill out the corresponding form.</p>
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
                    {/* Här kan du visa olika formulär baserat på activeTab */}
                    <div className="form-area">
                        {activeTab === 'General' && <p>Formulär för "General" visas här.</p>}
                        {activeTab === 'PR Team' && <p>Formulär för "PR Team" visas här.</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Apply;