import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Type, Zap, Eye } from 'lucide-react';
import { clsx } from 'clsx';

function SettingSwitch({ checked, onChange, label }) {
    return <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={onChange} className={clsx('setting-switch', checked && 'is-on')}><span /></button>;
}

export function SettingsPopup({ isOpen }) {
    const { fontSize, setFontSize, reducedMotion, setReducedMotion, highContrast, setHighContrast } = useSettings();
    if (!isOpen) return null;

    return (
        <div className="settings-popup absolute top-16 right-0 z-50 w-80 rounded-2xl border p-6 shadow-2xl animate-fade-in-up origin-top-right" role="dialog" aria-label="Display settings">
            <h3 className="mb-6 text-lg font-serif font-bold">Display Settings</h3>
            <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3"><div className="setting-icon"><Type size={18} /></div><span className="font-medium">Font Size</span></div>
                    <div className="setting-size-group" role="group" aria-label="Font size">
                        {['normal', 'large', 'larger'].map((size, i) => <button type="button" key={size} onClick={() => setFontSize(size)} aria-pressed={fontSize === size} aria-label={['Normal text', 'Large text', 'Larger text'][i]} className={clsx('setting-size-button', fontSize === size && 'is-active')}><span style={{ fontSize: ['14px', '16px', '18px'][i] }}>A</span></button>)}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3"><div className="setting-icon"><Zap size={18} /></div><span className="font-medium">Reduce Motion</span></div>
                    <SettingSwitch checked={reducedMotion} onChange={() => setReducedMotion(!reducedMotion)} label="Reduce motion" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3"><div className="setting-icon"><Eye size={18} /></div><span className="font-medium">High Contrast</span></div>
                    <SettingSwitch checked={highContrast} onChange={() => setHighContrast(!highContrast)} label="High contrast" />
                </div>
            </div>
            <div className="settings-footnote">Changes are saved on this device</div>
        </div>
    );
}
