import { AgentNodeProfile } from '../lib/types';

export const mockAgents: AgentNodeProfile[] = [
    {
        id: 'ag-01',
        human: {
            fullName: 'Dr. Alejandro V.',
            role: 'Chief Strategy Officer',
            department: 'OPERATIONS',
            location: 'Madrid HQ',
            // avatarUrl: '...', // Use initial if undefined
            email: 'alejandro@activasl.com',
            status: 'DEEP_WORK',
        },
        synthetic: {
            model: 'Gemini 3.0 Pro',
            contextWindow: 1450000,
            uptime: 99.99,
            notebookLmId: 'nb-strat-01',
            workspaceSync: true,
            mcpTools: ['stripe', 'firebase', 'github'],
        },
        metrics: {
            tasksCompleted: 142,
            agentEfficiency: 98,
            knowledgeGraphContribution: 85,
        },
    },
    {
        id: 'ag-02',
        human: {
            fullName: 'Sarah Chen',
            role: 'Head of Engineering',
            department: 'ENGINEERING',
            location: 'Remote (Tokyo)',
            email: 'sarah.chen@activasl.com',
            status: 'AVAILABLE',
        },
        synthetic: {
            model: 'Gemini 3.0 Pro',
            contextWindow: 950000,
            uptime: 99.95,
            notebookLmId: 'nb-eng-core',
            workspaceSync: true,
            mcpTools: ['github', 'docker', 'terminal'],
        },
        metrics: {
            tasksCompleted: 356,
            agentEfficiency: 94,
            knowledgeGraphContribution: 92,
        },
    },
    {
        id: 'ag-03',
        human: {
            fullName: 'Marcus O.',
            role: 'Legal Compliance Lead',
            department: 'LEGAL',
            location: 'London Office',
            email: 'marcus.o@activasl.com',
            status: 'MEETING',
        },
        synthetic: {
            model: 'Gemini 3.0 Pro',
            contextWindow: 600000,
            uptime: 100,
            notebookLmId: 'nb-legal-eu',
            workspaceSync: true,
            mcpTools: ['doc-review', 'email-parser'],
        },
        metrics: {
            tasksCompleted: 89,
            agentEfficiency: 88,
            knowledgeGraphContribution: 65,
        },
    },
    {
        id: 'ag-04',
        human: {
            fullName: 'Elena R.',
            role: 'Financial Analyst',
            department: 'FINANCE',
            location: 'Madrid HQ',
            email: 'elena.r@activasl.com',
            status: 'OFFLINE',
        },
        synthetic: {
            model: 'Gemini 3.0 Pro',
            contextWindow: 1100000,
            uptime: 98.5,
            notebookLmId: 'nb-finance-q1',
            workspaceSync: true,
            mcpTools: ['stripe', 'excel-bridge'],
        },
        metrics: {
            tasksCompleted: 210,
            agentEfficiency: 91,
            knowledgeGraphContribution: 78,
        },
    },
];
