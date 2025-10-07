export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    specifications?: {
        [key: string]: string;
    };
    status: string;
    images?: string[];
    timeline?: {
        phase: string;
        description: string;
        completed: boolean;
    }[];
}

export const projects: Project[] = [
    {
        id: 'nfc-25',
        title: 'New Flying Competition 2025 – NFC-25',
        description: 'The NFC-25 aircraft is our first competition UAV, designed to comply with New Flying Competition 2025 regulations. Manufacturing is in its final stages.',
        fullDescription: 'The NFC-25 aircraft represents our inaugural entry into competitive unmanned aerial vehicle development. This sophisticated aircraft has been meticulously designed from the ground up to meet the stringent requirements of the New Flying Competition 2025 regulations. Our engineering team has focused on creating an optimal balance between aerodynamic efficiency, structural integrity, and competition-specific performance metrics.',
        specifications: {
            'Wingspan': 'TBD',
            'Weight': 'TBD',
            'Flight Time': 'TBD',
            'Max Speed': 'TBD',
            'Control Range': 'TBD'
        },
        status: 'Manufacturing - Final Stages',
        timeline: [
            {
                phase: 'Design & Planning',
                description: 'Initial concept development and regulatory compliance analysis',
                completed: true
            },
            {
                phase: 'Prototyping',
                description: 'Building and testing initial prototypes',
                completed: true
            },
            {
                phase: 'Manufacturing',
                description: 'Production of final competition aircraft',
                completed: false
            },
            {
                phase: 'Testing & Competition',
                description: 'Final testing and competition participation',
                completed: false
            }
        ]
    },
    {
        id: 'mds',
        title: 'Modular Drone System – MDS',
        description: 'A project with the purpose of developing modular systems for drone applications. Work begins this fall.',
        fullDescription: 'The Modular Drone System (MDS) project aims to revolutionize drone development by creating a standardized, modular approach to UAV construction. This innovative system will allow for rapid prototyping, easy maintenance, and customizable configurations to meet various application requirements. The modular design philosophy will enable users to swap components based on mission needs, from payload modules to propulsion systems.',
        specifications: {
            'Modularity': 'Standardized connection interfaces',
            'Compatibility': 'Cross-platform component support',
            'Scalability': 'Multiple size configurations',
            'Applications': 'Research, commercial, educational'
        },
        status: 'Planning Phase',
        timeline: [
            {
                phase: 'Research & Development',
                description: 'Market analysis and technical feasibility studies',
                completed: false
            },
            {
                phase: 'Module Design',
                description: 'Design of standardized modular components',
                completed: false
            },
            {
                phase: 'Prototype Development',
                description: 'Building first modular system prototypes',
                completed: false
            },
            {
                phase: 'Testing & Validation',
                description: 'Comprehensive testing of modular systems',
                completed: false
            }
        ]
    }
];

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
};