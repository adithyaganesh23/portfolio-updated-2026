import React from 'react';
import './project-visual.css';

export function ProjectVisual({ project, className = '' }) {
    if (project.artwork === 'pulse' || project.artwork === 'customer') {
        const image = project.artwork === 'pulse' ? '/images/generated/pulse-workflow.png' : '/images/generated/customer-360.png';
        return (
            <div className={`project-visual project-visual-generated ${className}`} role="img" aria-label={`Conceptual artwork for ${project.title}`}>
                <img src={image} alt="" loading="lazy" />
            </div>
        );
    }
    const pulse = project.artwork === 'pulse';
    const bars = pulse ? [28, 42, 35, 57, 46, 68, 61, 86, 72, 95] : [44, 63, 39, 78, 58, 92, 67, 83, 54, 74];

    return (
        <div className={`project-visual project-visual-${project.artwork || 'default'} ${className}`} role="img" aria-label={`Abstract visual for ${project.title}`}>
            <div className="project-visual-orbit" />
            <div className="project-visual-orbit project-visual-orbit-inner" />
            <div className="project-visual-panel">
                <div className="project-visual-panel-head"><i /><i /><i /><span>{pulse ? 'WEEKLY SIGNAL' : 'CONNECTED VIEW'}</span></div>
                <div className="project-visual-chart">
                    {bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                </div>
                <div className="project-visual-line"><i /><i /><i /><i /><i /></div>
            </div>
            <div className="project-visual-sphere" />
            <div className="project-visual-caption"><span>{pulse ? 'SIGNAL → CONTEXT → INSIGHT' : 'PEOPLE → CONTEXT → CONNECTION'}</span><strong>{project.title}</strong></div>
        </div>
    );
}
