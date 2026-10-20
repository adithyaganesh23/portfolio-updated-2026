import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { SectionContext } from '../../context'

const sections = {
    'uiux': {
        title: "UI/UX ENGINEERING",
        content: "I build interactive environments where design meets logic. The computer in front of you isn't just a prop—it's a live terminal."
    },
    'apparels': {
        title: "APPAREL DESIGN",
        content: "Fashion is architecture for the body. I design clean, minimalist geometry that speaks louder than logos."
    },
    'graphic': {
        title: "GRAPHIC DESIGN",
        content: "From wedding invites to brand identities, I craft visuals that tell a story. See the corkboard for recent commissioned work."
    },
    'hobbies': {
        title: "MUSIC & HOBBIES",
        content: "When I'm not coding, I'm composing. Interactive audio on the web is my current obsession. Click the guitar to strum."
    },
    'contact': {
        title: "CONTACT ME",
        content: "Send me a message. Let's build something impossible. [email protected]"
    }
}

export const Overlay = () => {
    const { activeSection, setActiveSection } = useContext(SectionContext)

    return (
        <AnimatePresence>
            {activeSection && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
                        background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2000, pointerEvents: 'auto'
                    }}
                    onClick={() => setActiveSection(null)}
                >
                    <motion.div
                        className="modal-card"
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'rgba(20, 20, 20, 0.85)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '3rem', maxWidth: '600px', width: '90%',
                            color: 'white', borderRadius: '16px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        <h1 style={{ color: '#ffb703', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '2rem' }}>
                            {sections[activeSection]?.title || 'INFO'}
                        </h1>
                        <p style={{ lineHeight: 1.6, fontSize: '1.2rem', color: '#ccc' }}>
                            {sections[activeSection]?.content}
                        </p>
                        <button
                            onClick={() => setActiveSection(null)}
                            style={{
                                marginTop: '2rem', background: '#333', color: 'white', border: 'none',
                                padding: '0.8rem 2rem', cursor: 'pointer', borderRadius: '4px', fontSize: '1rem'
                            }}
                        >
                            CLOSE
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Hint UI */}
            {!activeSection && (
                <div style={{ position: 'absolute', bottom: '50px', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
                    <p style={{
                        color: '#aaa', fontSize: '1rem', background: 'rgba(0,0,0,0.5)',
                        display: 'inline-block', padding: '10px 20px', borderRadius: '20px'
                    }}>
                        CLICK ON OBJECTS TO EXPLORE
                    </p>
                </div>
            )}
        </AnimatePresence>
    )
}
