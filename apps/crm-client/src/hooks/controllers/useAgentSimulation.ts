import { useState, useEffect, useRef } from 'react';
import { AgentNodeProfile } from '../../lib/types';
import { useActivityLog } from '../useActivityLog';

/**
 * useAgentSimulation
 * 
 * "Breathing Life into the Machine"
 * This hook simulates the real-time activity of the Hybrid Workforce.
 * It randomly updates status, efficiency, and task counts to create a living dashboard.
 */
export const useAgentSimulation = (initialAgents: AgentNodeProfile[]) => {
    const [agents, setAgents] = useState<AgentNodeProfile[]>(initialAgents);
    const { logActivity } = useActivityLog();

    // Refs to avoid dependency loops in intervals
    const agentsRef = useRef(initialAgents);

    useEffect(() => {
        agentsRef.current = agents;
    }, [agents]);

    useEffect(() => {
        // 1. STATUS PULSE (Every 5-15 seconds)
        const statusInterval = setInterval(() => {
            const randomAgentIndex = Math.floor(Math.random() * agentsRef.current.length);
            const randomAgent = agentsRef.current[randomAgentIndex];

            const statuses: AgentNodeProfile['human']['status'][] = ['DEEP_WORK', 'MEETING', 'AVAILABLE', 'OFFLINE'];
            const newStatus = statuses[Math.floor(Math.random() * statuses.length)];

            if (randomAgent.human.status !== newStatus && newStatus !== 'OFFLINE') {
                const updatedAgents = [...agentsRef.current];
                updatedAgents[randomAgentIndex] = {
                    ...randomAgent,
                    human: { ...randomAgent.human, status: newStatus }
                };
                setAgents(updatedAgents);

                // Log meaningful status changes
                if (newStatus === 'DEEP_WORK') {
                    logActivity('system', `${randomAgent.human.fullName} ha entrado en FOCUS MODE.`);
                } else if (newStatus === 'MEETING') {
                    logActivity('system', `${randomAgent.human.fullName} ha iniciado sincronización.`);
                }
            }
        }, 8000);

        // 2. EFFICIENCY FLUCTUATION (Every 3 seconds)
        const metricInterval = setInterval(() => {
            const randomAgentIndex = Math.floor(Math.random() * agentsRef.current.length);
            const randomAgent = agentsRef.current[randomAgentIndex];

            // Fluctuate efficiency slightly (+- 2%)
            const delta = Math.random() > 0.5 ? 1 : -1;
            const newEfficiency = Math.min(100, Math.max(85, randomAgent.metrics.agentEfficiency + delta));

            // Occasional Task Completion
            const taskIncrement = Math.random() > 0.7 ? 1 : 0;

            const updatedAgents = [...agentsRef.current];
            updatedAgents[randomAgentIndex] = {
                ...randomAgent,
                metrics: {
                    ...randomAgent.metrics,
                    agentEfficiency: newEfficiency,
                    tasksCompleted: randomAgent.metrics.tasksCompleted + taskIncrement
                }
            };
            setAgents(updatedAgents);

            if (taskIncrement > 0) {
                // Very low probability log to avoid spam
                if (Math.random() > 0.9) {
                    logActivity('report', `Tarea completada por nodo ${randomAgent.id}`);
                }
            }

        }, 3000);

        return () => {
            clearInterval(statusInterval);
            clearInterval(metricInterval);
        };
    }, [logActivity]); // Run once on mount

    return { agents };
};
