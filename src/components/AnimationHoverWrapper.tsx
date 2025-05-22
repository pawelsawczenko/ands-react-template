import { motion } from 'motion/react'
import { ChildrenProps } from '../types'

export const AnimationHoverWrapper = ({ children }: ChildrenProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  )
}
