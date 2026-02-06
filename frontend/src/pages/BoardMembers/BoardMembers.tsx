import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { boardmembers } from '../../data/boardmember';
import './BoardMembers.css';

const BoardMembers = () => {
    return (
        <>
            <Header />
            <div className="board-members-container">
                <div className="board-members-content">
                    <div className="board-members-header">
                        <h1>Our Board Members</h1>
                        <p>Meet the dedicated individuals who lead and guide KTH Aero Design.</p>
                    </div>

                    <div className="board-members-grid">
                        {boardmembers.map((member, index) => (
                            <div
                                key={index}
                                className="board-member-card"
                            >
                                <h3>{member.name}</h3>
                                <p className="member-title">{member.title}</p>
                                <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BoardMembers;
