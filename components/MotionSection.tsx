
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
export default function MotionSection({ children, className="" }: PropsWithChildren<{className?:string}>){
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: .5, ease: 'easeOut' }}>
      {children}
    </motion.section>
  );
}
