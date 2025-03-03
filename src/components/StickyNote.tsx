import React from 'react';
import { motion } from 'framer-motion';

interface StickyNoteProps {
  title: string;
  content: string;
  color?: string;
  rotation?: number;
}

const StickyNote: React.FC<StickyNoteProps> = ({ 
  title, 
  content, 
  color = 'bg-accent-100', 
  rotation = 1 
}) => {
  return (
    <motion.div
      className={`sticky-note ${color}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ 
        scale: 1.05, 
        rotate: -rotation,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-700">{content}</p>
    </motion.div>
  );
};

export default StickyNote;