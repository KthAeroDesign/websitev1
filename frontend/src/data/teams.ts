export interface Team {
    id: string;
    name: string;
    description: string;
    responsibilities: string[];
    longDescription: string;
    goals: string[];
    skills: string[];
    projects?: string[];
}

export const teams: Team[] = [
    {
        id: 'concept',
        name: 'Concept',
        description: 'Lays the foundation for the KTH Aero Design Team\'s design and manufacturing process by brainstorming and developing innovative ideas into practical, working concepts.',
        responsibilities: ['Define mission objectives and design requirements', 'Develop and evaluate different conceptual aircraft configurations', 'Utilize matrix workflow to coordinate information flow', 'Propose and communicate concepts to ensure alignment'],
        longDescription: `The Concept Team lays the foundation for the KTH Aero Design Team's design and manufacturing process. They brainstorm and develop innovative ideas into practical, working concepts using a structured engineering approach. They analyze customer and competition requirements and generate multiple design concepts, evaluating them through various matrices, preliminary calculations, and trade-off studies.

Key responsibilities include defining mission objectives and the design requirements, developing and evaluating different conceptual aircraft configurations, utilizing the matrix workflow to coordinate information flow and decision-making among the other functional teams, and proposing and communicating the concept to ensure alignment across all technical teams.`,
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
        ]
    },
    {
        id: 'aerodynamics',
        name: 'Aerodynamics',
        description: 'Dedicated to advancing vehicle performance through innovative aerodynamic solutions, combining CFD simulations and wind tunnel testing.',
        responsibilities: ['Wing design', 'CFD analysis', 'Wind tunnel testing', 'Performance optimization'],
        longDescription: `The KTH Aero Design Aerodynamics Team is dedicated to advancing vehicle performance through innovative aerodynamic solutions. Aerodynamics lies at the core of flight, influencing stability, manoeuvrability, and the overall ease of movement through the air. They combine CFD simulations and wind tunnel testing to turn bold ideas into practical improvements in flight dynamics.

Team members work on real projects, developing unconventional solutions that challenge traditional approaches and directly enhance how vehicles move and respond in the air. They foster a collaborative environment to test, refine, and validate designs, ensuring that every concept contributes to better control, stability, and overall performance.

This team suits individuals who are passionate about aerodynamics, eager to explore uncharted ideas, and committed to applying innovative thinking to solve real-world challenges in flight.`,
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
        ]
    },
    {
        id: 'structure-design',
        name: 'Structure & Design',
        description: 'Turns wild aircraft design concepts into reality by creating lightweight yet robust structural solutions.',
        responsibilities: ['Design to Manufacture', 'Cost-effective engineering', 'Composite design', 'Structural analysis'],
        longDescription: `Wild ideas in aircraft design often demand equally bold structural solutions to make them fly. That is where the Structures and Design Team comes in, a passionate group of engineers who turn concepts into reality.

The members of this team dive into creating lightweight yet robust designs, ensuring they are strong enough for real-world applications. They brainstorm, design, simulate, and ultimately see their ideas take shape as the aircraft is manufactured.

Core principles include Design to Manufacture (bridging concepts to production), Cost Effectiveness (smart engineering without compromise), and Teamwork (because the best solutions are built together).

Their work spans metal, plastic, and composite parts, with composites being at the heart of what they do. Those who are excited by the art of composite design, and who smile at the thought of stress and strain, will find this the perfect team to join.`,
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
        ]
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        description: 'Responsible for bringing concepts and designs into the real world through composites, metalwork, 3D printing, and assembly.',
        responsibilities: ['Composites manufacturing', 'Metalwork', '3D printing', 'Assembly coordination', 'Workshop management'],
        longDescription: `The Manufacturing Team is responsible for bringing concepts and designs into the real world. They work with composites, metalwork, 3D printing, assembly, and more. They arrange weekly workshops where members come together to collaborate and work on ongoing projects.

The team transforms design concepts into physical reality through careful planning, precise execution, and continuous quality improvement. They bridge the gap between engineering designs and completed aircraft systems, ensuring that innovative concepts become functional aircraft components ready for testing and flight.`,
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
        ]
    },
    {
        id: 'test-evaluation',
        name: 'Test & Evaluation',
        description: 'Responsible for verifying and validating the performance, reliability, and safety of all KTH Aero Design aircraft and subsystems.',
        responsibilities: ['Test plan development', 'Safety compliance', 'Ground and flight test coordination', 'Data analysis', 'Regulatory management'],
        longDescription: `The Test and Evaluation Team is responsible for verifying and validating the performance, reliability, and safety of all KTH Aero Design aircraft and subsystems. They develop detailed test plans, prepare checklists, ensure compliance with safety standards, and coordinate both ground and flight tests.

Team members collect and analyze experimental data to assess whether the UAV meets design specifications and performance targets, providing critical feedback to improve future iterations. Additionally, they manage regulatory aspects such as EU UAV certification and flight permissions, ensuring all operations are conducted safely, efficiently, and in accordance with aviation guidelines.`,
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
        ]
    },
    {
        id: 'electronics',
        name: 'Electronics',
        description: 'Responsible for all electrical and propulsion systems in the aircraft, from wiring and component integration to system programming.',
        responsibilities: ['Electrical system design', 'Component integration', 'Battery and motor selection', 'Avionics and servo systems', 'Flight computer programming'],
        longDescription: `The Electronics Team is responsible for all electrical and propulsion systems in the aircraft. They handle everything from wiring and component integration to the selection of batteries, motors, avionics, servos, and flight computers.

Working in the team provides hands-on experience in system integration and programming. Their mission is to ensure that every system operates with reliability and efficiency. By connecting hardware to software, they enable precise control and dependable performance in flight.

The team integrates cutting-edge technology into reliable, lightweight systems optimized for aircraft applications, ensuring all electronic systems work seamlessly with mechanical components.`,
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
        ]
    },
    {
        id: 'pr-marketing',
        name: 'PR & Marketing',
        description: 'Responsible for communicating news, updates, and activities to fellow students, sponsors, and anyone interested in the team\'s work.',
        responsibilities: ['Website management', 'Social media content', 'Merchandise coordination', 'Team gear management', 'External communications'],
        longDescription: `The PR and Marketing Team is responsible for communicating news, updates, and activities to fellow students, sponsors, and anyone interested in the team's work. They keep the website up to date and coordinate merchandise and team gear, making it easy to find the team both online and in person.

The team serves as the public face of KTH Aero Design, building relationships with sponsors, engaging with the community, and promoting achievements and activities to a wider audience. They create engaging content that showcases technical achievements and team culture across multiple platforms.

You can find us on:
Instagram: @kthareodesign
LinkedIn: KTH Aero Design Team`,
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
        ]
    }
];