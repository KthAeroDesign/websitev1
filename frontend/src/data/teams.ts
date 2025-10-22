export interface Team {
    id: string;
    name: string;
    description: string;
    responsibilities: string[];
    longDescription: string;
    goals: string[];
    skills: string[];
    projects?: string[];
    currentFocus: string;
}

export const teams: Team[] = [
    {
        id: 'concept',
        name: 'Concept',
        description: 'Responsible for the overall design concept, mission requirements, and strategic planning of aircraft projects.',
        responsibilities: ['Mission analysis', 'Concept development', 'Requirements specification', 'System integration planning'],
        longDescription: `The Concept team serves as the foundation of every aircraft project at KTH Aero Design. We are responsible for transforming initial ideas into comprehensive design concepts that guide the entire development process.

Our team works closely with competition requirements and mission objectives to establish clear project parameters. We conduct thorough mission analysis to understand performance requirements, operational constraints, and success criteria. Through systematic concept development, we explore various design approaches and select the most promising solutions.

The team plays a crucial role in requirements specification, ensuring all subsystems understand their objectives and constraints. We facilitate system integration planning to ensure seamless collaboration between all functional teams throughout the project lifecycle.`,
        goals: [
            'Develop innovative aircraft concepts that meet competition requirements',
            'Establish clear project parameters and success criteria',
            'Facilitate effective communication between all teams',
            'Optimize overall system performance through integrated design approach'
        ],
        skills: [
            'Systems engineering',
            'Project management',
            'Technical writing',
            'Aircraft design fundamentals',
            'Requirements analysis',
            'Stakeholder communication'
        ],
        currentFocus: 'Currently working on next-generation aircraft concepts for upcoming competitions, with emphasis on sustainability and performance optimization.'
    },
    {
        id: 'aerodynamics',
        name: 'Aerodynamics',
        description: 'Focuses on optimizing aircraft performance through aerodynamic design and analysis.',
        responsibilities: ['Wing design', 'CFD analysis', 'Wind tunnel testing', 'Performance optimization'],
        longDescription: `The Aerodynamics team is at the heart of aircraft performance optimization. We combine theoretical knowledge with cutting-edge simulation tools and experimental validation to create efficient and effective aerodynamic solutions.

Our work begins with fundamental aerodynamic principles and extends to advanced computational fluid dynamics (CFD) analysis using industry-standard software. We design and optimize wing profiles, control surfaces, and complete aircraft configurations to achieve maximum performance within competition constraints.

Wind tunnel testing forms a crucial part of our validation process, allowing us to verify computational results and discover real-world performance characteristics. We work closely with the Structure & Design team to ensure aerodynamic efficiency is balanced with structural requirements.`,
        goals: [
            'Maximize aircraft performance through optimized aerodynamic design',
            'Validate designs through comprehensive CFD analysis and wind tunnel testing',
            'Develop innovative solutions for challenging flight requirements',
            'Minimize drag while maximizing lift and controllability'
        ],
        skills: [
            'Computational Fluid Dynamics (CFD)',
            'ANSYS Fluent, SolidWorks Flow Simulation',
            'Wind tunnel testing and data analysis',
            'Aerodynamic theory and applications',
            'MATLAB/Python for data analysis',
            'Airfoil design and optimization'
        ],
        currentFocus: 'Developing advanced wing designs with integrated control surfaces and investigating boundary layer control techniques for enhanced performance.'
    },
    {
        id: 'structure-design',
        name: 'Structure & Design',
        description: 'Handles structural integrity, materials selection, and mechanical design of aircraft components.',
        responsibilities: ['Structural analysis', 'CAD modeling', 'Materials selection', 'Load calculations'],
        longDescription: `The Structure & Design team ensures that every aircraft component meets rigorous safety and performance standards while maintaining optimal weight characteristics. We are responsible for the mechanical integrity of the entire aircraft system.

Our work encompasses detailed structural analysis using finite element methods to predict component behavior under various loading conditions. We create comprehensive CAD models that serve as the foundation for manufacturing and assembly processes.

Material selection is a critical aspect of our work, balancing strength, weight, cost, and manufacturability requirements. We work closely with the Manufacturing team to ensure designs are practical and cost-effective to produce while meeting all performance specifications.`,
        goals: [
            'Ensure structural integrity and safety of all aircraft components',
            'Optimize weight-to-strength ratios through advanced materials and design',
            'Create detailed, manufacturable designs for all aircraft systems',
            'Validate structural performance through analysis and testing'
        ],
        skills: [
            'SolidWorks, CATIA, AutoCAD',
            'Finite Element Analysis (FEA)',
            'Materials science and selection',
            'Mechanical design principles',
            'Structural optimization',
            'Manufacturing process understanding'
        ],
        currentFocus: 'Exploring lightweight composite materials and developing modular design approaches for improved maintenance and performance.'
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        description: 'Responsible for production planning, manufacturing processes, and quality control.',
        responsibilities: ['Manufacturing planning', 'Process optimization', 'Quality assurance', 'Production coordination'],
        longDescription: `The Manufacturing team transforms design concepts into physical reality through careful planning, precise execution, and continuous quality improvement. We bridge the gap between engineering designs and completed aircraft systems.

Our responsibilities include developing comprehensive manufacturing plans that optimize production efficiency while maintaining quality standards. We evaluate and implement various manufacturing processes, from traditional machining to advanced additive manufacturing techniques.

Quality assurance is integral to everything we do, ensuring each component meets specification requirements before assembly. We coordinate production activities across multiple workstreams and manage resource allocation to meet project timelines.`,
        goals: [
            'Deliver high-quality aircraft components on schedule and within budget',
            'Implement efficient manufacturing processes and workflows',
            'Maintain rigorous quality control throughout production',
            'Continuously improve manufacturing techniques and capabilities'
        ],
        skills: [
            'Manufacturing process design',
            'Quality control and inspection',
            'Project management',
            'Machining and fabrication techniques',
            'Additive manufacturing (3D printing)',
            'Supply chain coordination'
        ],
        currentFocus: 'Implementing lean manufacturing principles and exploring advanced manufacturing technologies including carbon fiber fabrication techniques.'
    },
    {
        id: 'test-evaluation',
        name: 'Test & Evaluation',
        description: 'Conducts testing procedures, data analysis, and performance validation.',
        responsibilities: ['Test planning', 'Data collection', 'Performance analysis', 'Validation procedures'],
        longDescription: `The Test & Evaluation team serves as the final authority on aircraft performance, conducting comprehensive testing programs to validate design predictions and ensure competition readiness.

We develop detailed test plans that systematically evaluate all aspects of aircraft performance, from individual component testing to complete system validation. Our work includes both ground-based testing and flight testing programs designed to characterize aircraft behavior across all operating conditions.

Data analysis is a core competency, using advanced statistical methods and visualization tools to extract meaningful insights from test results. We provide critical feedback to all teams, enabling design improvements and performance optimization throughout the development cycle.`,
        goals: [
            'Validate aircraft performance against design specifications',
            'Provide data-driven insights for continuous improvement',
            'Ensure competition readiness through comprehensive testing',
            'Develop robust testing methodologies and procedures'
        ],
        skills: [
            'Test planning and execution',
            'Data acquisition systems',
            'Statistical analysis and visualization',
            'Flight testing procedures',
            'Instrumentation and sensors',
            'Report writing and presentation'
        ],
        currentFocus: 'Developing automated data collection systems and advanced analytics capabilities for real-time performance monitoring.'
    },
    {
        id: 'electronics',
        name: 'Electronics',
        description: 'Develops and integrates electronic systems, avionics, and control systems.',
        responsibilities: ['Avionics design', 'Control systems', 'Sensor integration', 'Electronic testing'],
        longDescription: `The Electronics team develops sophisticated electronic systems that enable autonomous flight, data collection, and remote control capabilities. We integrate cutting-edge technology into reliable, lightweight systems optimized for aircraft applications.

Our work encompasses avionics design from concept through implementation, including flight control systems, navigation equipment, and communication systems. We design and implement control algorithms that enable stable, predictable aircraft behavior across all flight conditions.

Sensor integration is a critical capability, incorporating various measurement devices to monitor aircraft performance and environmental conditions. We ensure all electronic systems are properly tested, documented, and integrated with mechanical systems.`,
        goals: [
            'Develop reliable, lightweight electronic systems for aircraft applications',
            'Implement advanced control algorithms for optimal flight performance',
            'Integrate comprehensive sensor suites for data collection and monitoring',
            'Ensure electromagnetic compatibility and system reliability'
        ],
        skills: [
            'Circuit design and PCB layout',
            'Microcontroller programming (Arduino, Raspberry Pi)',
            'Control systems design',
            'Sensor integration and calibration',
            'Wireless communication systems',
            'Electronic testing and debugging'
        ],
        currentFocus: 'Developing AI-enhanced flight control systems and implementing advanced sensor fusion techniques for improved navigation accuracy.'
    },
    {
        id: 'pr-marketing',
        name: 'PR & Marketing',
        description: 'Manages public relations, marketing initiatives, and external communications.',
        responsibilities: ['Social media management', 'Event coordination', 'Sponsor relations', 'Content creation'],
        longDescription: `The PR & Marketing team serves as the public face of KTH Aero Design, building relationships with sponsors, engaging with the community, and promoting our achievements and activities to a wider audience.

We manage comprehensive social media strategies across multiple platforms, creating engaging content that showcases our technical achievements and team culture. Our event coordination efforts include competition participation, university presentations, and community outreach activities.

Sponsor relations are crucial to our success, and we work diligently to maintain strong partnerships with industry leaders and educational institutions. We create professional presentations, reports, and marketing materials that effectively communicate our value proposition and achievements.`,
        goals: [
            'Build and maintain strong relationships with sponsors and partners',
            'Increase public awareness of KTH Aero Design activities and achievements',
            'Create engaging content that attracts new team members and supporters',
            'Coordinate successful participation in competitions and public events'
        ],
        skills: [
            'Social media marketing and content creation',
            'Graphic design and video production',
            'Public speaking and presentation',
            'Sponsor relationship management',
            'Event planning and coordination',
            'Written and visual communication'
        ],
        currentFocus: 'Launching new digital marketing campaigns and developing strategic partnerships with aerospace industry leaders for enhanced collaboration opportunities.'
    }
];