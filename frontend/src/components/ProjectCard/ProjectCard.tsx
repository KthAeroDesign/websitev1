import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="read-more">Read more →</a>
        </div>
    );
};

export default ProjectCard;