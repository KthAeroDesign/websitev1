import React from 'react';
import './SponsorCard.css';

interface SponsorCardProps {
    logoUrl: string;
    name: string;
    description: string;
    websiteUrl: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ logoUrl, name, description, websiteUrl }) => {
    const handleClick = () => {
        window.open(websiteUrl, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="sponsor-card" onClick={handleClick}>
            <img src={logoUrl} alt={`${name} logo`} className="sponsor-logo" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SponsorCard;