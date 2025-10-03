import React from 'react';
import './SponsorCard.css';

interface SponsorCardProps {
    logoUrl: string;
    name: string;
    description: string;
    onClick: () => void;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ logoUrl, name, description, onClick }) => {
    return (
        <div className="sponsor-card" onClick={onClick}>
            <img src={logoUrl} alt={`${name} logo`} className="sponsor-logo" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SponsorCard;